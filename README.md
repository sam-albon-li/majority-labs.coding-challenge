# Majority Labs Code Challenge

The object of this challenge is to use a checklist of ingredients to render recipes that are associated with all selected ingredients (see `seeds.rb` for a list of existing ingredients and recipes). Bear in mind that while there are only 12 ingredients and 6 recipes today, some day there may be thousands of each, so your solution should be _scalable_ and _performant_.

Your responsibilities will be:

1. Implement Ruby code to find all recipes that contain _all_ the specified ingredients.
1. Implement Javascript code in the RecipeList component to render all recipes that contain all the specified ingredients.
1. Ideally, if there's time, you'll expand the existing test suite to cover all Ruby and JS code added to the application.

<sub>_Note: Dependinig on your implementation, you might run into some CSRF issues; please fix them without compromising the CSRF security of the app._</sub>

## Requirements:

- yarn
- bundler
- postgres
- ruby '2.6.0'

## Steps to get started:

- clone this repository
- install ruby dependencies `bundle install`
  > resolved issue `mimemagic` gems being pulled due to licensing issues
  >
  > upgraded `mimemagic` to 3.10 and ran `bundle update mimemagic`
- install JS dependencies `yarn`
- specify your DB credentials in `.env` if necessary for your postgres setup
- create and seed the DB with `bundle exec rails db:setup`
- run rails server `bundle exec rails s`
- recommended that you use `bin/webpack-dev-server` for speedy react development

## Tests:

- Run ruby test suite with `rspec`
- Run JS test suite with `yarn test`

## Submission:

- Please make commits to a private repository on your github account, and grant access to users joshkestenberg and sarahstrong. _We review code by looking at commit history; please make an initial commit with no changes, followed by a clean series of commits with your added changes._
- Please add any of your own contextual notes at the bottom of this readme; also, inline comments throughout are welcome and appreciated.
