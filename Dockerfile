# syntax=docker/dockerfile:experimental

FROM ruby:2.6.0-alpine3.11

ENV NODE_VERSION 12.21.0-r0
RUN \
  apk add --update nodejs=${NODE_VERSION} npm=${NODE_VERSION} \
  && npm install --global yarn

# Don't inherit local env settings when setting up bundler
RUN unset BUNDLE_PATH
RUN unset BUNDLE_BIN

ENV GEM_HOME "/usr/local/bundle"
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN mkdir -p ${GEM_HOME} \
  && gem install bundler -v 2.1.4
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

# Upgrade to fix known security issues
RUN apk add \
  python3=3.8.2-r2 \
  busybox=1.31.1-r10 \
  gcc=9.3.0-r0 \
  perl=5.30.3-r0 \
  sqlite=3.30.1-r2 \
  musl-utils=1.1.24-r3 \
  libgcc=9.3.0-r0

# https://github.com/locomotivecms/wagon/issues/340
WORKDIR /
COPY ./entrypoint.sh entrypoint.sh
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000
CMD ["bundle", "exec", "rails", "s", "-p", "3000", "-b", "0.0.0.0"]
