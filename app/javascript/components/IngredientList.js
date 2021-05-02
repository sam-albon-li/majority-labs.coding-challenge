import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";

const IngredientList = ({ handleChange }) => {
  const [ingredients, setIngredients] = useState([]);

  const [checkedIngredientIds, setCheckedIngredientIds] = useState([]);

  const toggleCheckedIngredient = ({ id }) => {
    if (checkedIngredientIds.includes(id)) {
      setCheckedIngredientIds(checkedIngredientIds.filter(obj => obj !== id));
    } else {
      setCheckedIngredientIds([...checkedIngredientIds, id]);
    }
  };

  useEffect(() => handleChange(checkedIngredientIds), [checkedIngredientIds]);

  useEffect(() => {
    axios.get("/api/ingredients").then(response => {
      setIngredients(response.data);
    });
  }, []);

  const ListIngredients = () => {
    if (ingredients.length < 1) {
      return <>Loading...</>;
    } else {
      return ingredients.map(({ id, name }) => (
        <ListGroup.Item
          key={`ingredient-${id}`}
          onClick={() => toggleCheckedIngredient({ id })}
        >
          <Form.Check
            inline
            checked={checkedIngredientIds.includes(id)}
            id={`ingredient-${id}-checkbox`}
          />
          <Form.Label htmlFor={`ingredient-${id}-checkbox`}>{name}</Form.Label>
        </ListGroup.Item>
      ));
    }
  };

  return (
    <Form>
      <ListGroup>
        <ListIngredients />
      </ListGroup>
    </Form>
  );
};

export default IngredientList;
