Rails.application.routes.draw do
  root 'app#index'

  namespace :api do
    get 'ingredients', to: 'recipes#ingredients_index'
  end
end
