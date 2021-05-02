import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import axios from "axios";

const RecipeList = ({ ingredientIds }) => {
  // Displays a list of recipes that contain all ingredients for ingredientIds.
  // Use your judgement about display and handling corner cases.

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/recipes", { params: { ingredients: ingredientIds.join(",") } })
      .then(({ data }) => setRecipes(data));
  }, [ingredientIds]);

  const ListRecipes = () => (
    <ul>
      {recipes.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  );

  return (
    <ListGroup>
      <ListGroup.Item>
        <Card className="mb-3">
          <Card.Header>Example Recipe Card</Card.Header>
          <Card.Body>
            <ListRecipes />
          </Card.Body>
        </Card>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default RecipeList;
