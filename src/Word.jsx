import React from "react";
import Navigate from "./Navigate";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BsCheck, BsX } from "react-icons/bs";

const words = [
  { word: "apple", meaning: "사과" },
  { word: "banana", meaning: "바나나" },
  { word: "cherry", meaning: "체리" },
  { word: "dog", meaning: "개" },
  { word: "cat", meaning: "고양이" },
  { word: "bird", meaning: "새" },
  { word: "elephant", meaning: "코끼리" },
  { word: "giraffe", meaning: "기린" },
];

const Word = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleNextClick = () => {
    setCurrentWordIndex(currentWordIndex + 1);
    setShowAnswer(false);
    setInputValue("");
  };

  const handleCheckClick = () => {
    setShowAnswer(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const currentWord = words[currentWordIndex];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "pink",
      }}
    >
      <Navigate></Navigate>

      <Card className="mt-5">
        <Card.Body>
          <Card.Title>영어 단어장</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {currentWord.meaning}
          </Card.Subtitle>
          <Form className="mt-4">
            <Form.Group controlId="formWord">
              <Form.Label>영어 단어</Form.Label>
              <Form.Control
                type="text"
                placeholder="단어를 입력하세요"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          <div className="mt-4 d-flex justify-content-between">
            <Button variant="success" onClick={handleCheckClick}>
              <BsCheck />
            </Button>
            <Button variant="danger" onClick={handleNextClick}>
              <BsX />
            </Button>
          </div>
          {showAnswer && (
            <div className="mt-4 text-success">{currentWord.word}</div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Word;
