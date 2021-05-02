import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import axios from "axios";

const RecipeList = ({ ingredientIds }) => {
  // Displays a list of recipes that contain all ingredients for ingredientIds.
  // Use your judgement about display and handling corner cases.
  return (
    <ListGroup>
      <ListGroup.Item>
        <Card className="mb-3">
          <Card.Header>Example Recipe Card</Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default RecipeList;
