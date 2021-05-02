module Api
  class RecipesController < ApplicationController
    def ingredients_index
      @ingredients = Ingredient.all
      render json: @ingredients
    end
  end
end
