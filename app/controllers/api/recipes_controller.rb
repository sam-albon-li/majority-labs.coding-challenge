module Api
  class RecipesController < ApplicationController
    def recipes_index
      @recipes = Recipe.all
      render json: @recipes
    end

    def ingredients_index
      @ingredients = Ingredient.all
      render json: @ingredients
    end
  end
end
