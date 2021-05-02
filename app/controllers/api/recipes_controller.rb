module Api
  class RecipesController < ApplicationController
    def recipes_index
      @recipes = ::Recipe.all

      if params[:ingredients] && params[:ingredients].length > 0
        ingredientIds = params[:ingredients].split(',')

        recipeIds = ::Ingredient
          .where(id: ingredientIds)
          .joins("INNER JOIN ingredients_recipes ON ingredients_recipes.ingredient_id = ingredients.id")
          .group("ingredients_recipes.recipe_id")
          .having("COUNT(ingredients_recipes.recipe_id) >= ?", ingredientIds.length)
          .pluck("ingredients_recipes.recipe_id")

        @recipes = @recipes.where(id: recipeIds)
      end

      render json: @recipes.limit(100)
    end

    def ingredients_index
      @ingredients = ::Ingredient.all

      render json: @ingredients.limit(100)
    end
  end
end
