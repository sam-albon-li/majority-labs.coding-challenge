import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IngredientList from "./IngredientList";
import RecipeList from "./RecipeList";

const App = () => {
  const [ingredientIds, setIngredientIds] = useState([]);
  const changeIngredientIds = (checked, id) => {
    setIngredientIds(
      checked
        ? ingredientIds.concat(id)
        : ingredientIds.filter((val) => val != id)
    );
  };

  return (
    <Container className="col-12 mt-3">
      <Row className="justify-content-md-center mb-3">
        <h1> Let's Find Some Recipes! </h1>
      </Row>
      <Row>
        <Col className="col-4">
          <IngredientList handleChange={changeIngredientIds} />
        </Col>
        <Col className="col-8">
          <RecipeList ingredientIds={ingredientIds} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
