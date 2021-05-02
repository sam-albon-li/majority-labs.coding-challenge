require 'rails_helper'

RSpec.describe Api::RecipesController, type: :controller do
  it "responds with all recipes" do
    get :ingredients_index, format: :json

    parsed_response = JSON.parse(response.body)
    expect(parsed_response.length).to eq(Ingredient.count)
  end
end
