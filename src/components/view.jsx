import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, toggleItem, deleteItem } from "../Functions/index.js";
import { Container, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../m-view.css";

export const MainView = () => {
 
  const [inputValue, setInputValue] = useState("");
  
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      setInputValue("");
    } else {
      alert("Você deve escrever algo.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddItem();
    }
  };

  const handleToggleItem = (id) => {
    dispatch(toggleItem(id));
  };


  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Container
      className="bg-light d-flex flex-column align-items-center justify-content-center mt-3"
      style={{ minHeight: "80vh", maxWidth: "60vh" }}
    >
      <Row>
        <Col className="m-3" variant="secondary">
          <h2>Lista de Tarefas:</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="m-3"
            variant="outline-primary"
            onClick={handleAddItem}
          >
            Adicionar Item
          </Button>
          <ul style={{ listStyleType: "none" }}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={todo.completed ? "strike" : ""}
                onDoubleClick={() => handleToggleItem(todo.id)}
              >
                {todo.text}
                <Button
                  className="m-3"
                  variant="outline-secondary"
                  onClick={() => handleDeleteItem(todo.id)}
                >
                  X{" "}
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
