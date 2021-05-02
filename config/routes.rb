Rails.application.routes.draw do
  root 'app#index'

  namespace :api do
    get 'ingredients', to: 'recipes#ingredients_index'
    get 'recipes', to: 'recipes#recipes_index'
  end
end
