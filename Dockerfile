# syntax=docker/dockerfile:experimental

FROM ruby:2.6.0-alpine3.8 AS base

# Don't inherit local env settings when setting up bundler
RUN unset BUNDLE_PATH
RUN unset BUNDLE_BIN

ENV GEM_HOME "/usr/local/bundle"
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN mkdir -p ${GEM_HOME} \
  && gem install bundler -v 1.17.3
# https://jer-k.github.io/update-gem-dockerfile-alpine-linux
RUN apk --update add --virtual \
  run-dependencies \
  build-base \
  postgresql-client \
  postgresql-dev
RUN gem install pg -- --with-pg-lib=/usr/lib

# https://github.com/rmagick/rmagick/issues/834
RUN apk add --update --no-cache \
  build-base \
  imagemagick6 \
  imagemagick6-c++ \
  imagemagick6-dev \
  imagemagick6-libs

# Need git for some gems
RUN apk add --update --no-cache git

# https://github.com/locomotivecms/wagon/issues/340
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /src
EXPOSE 3000
CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]
