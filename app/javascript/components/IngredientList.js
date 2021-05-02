import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";

const IngredientList = ({ handleChange }) => {
  const [ingredients, setIngredients] = useState([]);

  const listIngredients = () => {
    if (ingredients.length < 1) {
      return <>Loading...</>;
    } else {
      return ingredients.map((ingredient) => (
        <ListGroup.Item
          key={`ingredient-${ingredient.id}`}
          onClick={(e) => handleClick(e, ingredient.id)}
          data-elemtype="ingredient-wrapper"
        >
          <Form.Check
            inline
            id={`ingredient-${ingredient.id}-checkbox`}
            data-ingredient-id={ingredient.id}
          />
          <Form.Label
            htmlFor={`ingredient-${ingredient.id}-checkbox`}
            data-elemtype="ingredient-label"
          >
            {ingredient.name}
          </Form.Label>
        </ListGroup.Item>
      ));
    }
  };

  const handleClick = (e, ingredientId) => {
    const checkbox = document.querySelector(
      `[data-ingredient-id='${ingredientId}']`
    );

    switch (e.target.dataset.elemtype) {
      case "ingredient-wrapper":
        // handle click on list group
        checkbox.checked = !checkbox.checked;
        handleChange(checkbox.checked, ingredientId);
      case "ingredient-label":
        // label click fires event twice; rely on only checkbox event
        return;
      default:
        handleChange(checkbox.checked, ingredientId);
    }
  };

  useEffect(() => {
    axios.get("/api/ingredients").then((response) => {
      setIngredients(response.data);
    });
  }, []);

  return (
    <Form>
      <ListGroup>{listIngredients()}</ListGroup>
    </Form>
  );
};

export default IngredientList;
