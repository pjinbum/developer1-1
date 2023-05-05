import React from 'react'
import Navigate from './Navigate'
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { BsArrowRepeat } from 'react-icons/bs';

const words = [
  'apple', 'banana', 'cherry', 'dog', 'cat', 'bird', 'elephant', 'giraffe'
];

const connectors = [
  'and', 'or', 'but', 'because', 'if', 'when'
];

const Sentence = () => {

  const [sentence, setSentence] = useState('');

  const handleGenerateClick = () => {
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    const connector = connectors[Math.floor(Math.random() * connectors.length)];
    const newSentence = `${word1} ${connector} ${word2}`;
    setSentence(newSentence);
  };


  return (
    <div  style={{position:'absolute' , top:0 , left :0, width : '100vw' , height : '100vh' , backgroundColor :'aqua'}}>
      <Navigate></Navigate>


      <div className="container">
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>영어 문장 만들기</Card.Title>
          <div className="mt-4 mb-4">{sentence}</div>
          <Button variant="primary" onClick={handleGenerateClick}><BsArrowRepeat /> 다시 만들기</Button>
        </Card.Body>
      </Card>
    </div>

    </div>
  )
}

export default Sentence