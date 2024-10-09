import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateText } from "../../features/textProperties";
import { useSelector } from "react-redux";
import { useRef } from "react";

export default function TextzoneComponant() {
  const textZone = useRef();
  const settingsProps = useSelector((state) => state.settingsProperties);
  const [textValue, setTextValue] = useState("Text zone");


  const dispatch = useDispatch();
  //const maxLength = settingsProps.find((prop) => prop.inputNumber === 1).value;
  const modifyText = (text) => {
    if (textValue.length <= 8000) {
      setTextValue(text);
      dispatch(updateText({ text }));
    }
  };

  useEffect(()=>{
    const fontSize = `fs-${settingsProps.find((prop) => prop.inputNumber === 2).value}`;
  const textColor = settingsProps.find((prop) => prop.inputNumber === 3).value;
  console.log(textZone);
  textZone.current.classList.add(fontSize);
  textZone.current.style.color = textColor;
  },[]);



  return (
    <>
      <Row className="h-100 ">
        <InputGroup className="pe-0">
          <Form.Control
            style={{ height: '440px'}}
            ref={textZone}
            as="textarea"
            className="form-control-lg p-0 border border-3 rounded-0 shadow-none custom-scroll"
            id="textzone"
            value={textValue}
            onChange={(e) => modifyText(e.target.value)}
            rows={8}
          />
        </InputGroup>
      </Row>
    </>
  );
}
