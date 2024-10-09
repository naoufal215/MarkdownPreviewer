import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";

export default function VisuSettingsPanel() {
  const textZone = useRef();
  const settingsProps = useSelector((state) => state.settingsProperties);

  const fontSize = `fs-${
    settingsProps.find((prop) => prop.inputNumber === 2).value
  }`;
  const textColor = settingsProps.find(
    (prop) => prop.inputNumber === 3
  ).value;

  return (
    <Card className="w-75" style={{ height: '300px', overflowY: 'hidden' }}>
      <CardHeader className="text-center">Example</CardHeader>
      <CardBody style={{ fontSize: `${fontSize}px`, height: '100%', overflowY: 'auto' }}>
        <p ref={textZone} className={fontSize} style={{color: textColor}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas eius
          odio, vero magni at rerum pariatur voluptas enim placeat molestias
          ullam fugit eum tenetur autem dignissimos. At dignissimos, sint nam
          nobis recusandae corporis tenetur eius optio reiciendis sapiente ipsa
          ad atque earum aut odio doloremque perspiciatis error! Quia eligendi
          et mollitia dicta magnam assumenda at blanditiis rem sequi, asperiores
          nam fugit accusamus ab laboriosam nemo neque nisi expedita quos ullam
          quasi voluptatem corporis? Nisi cumque accusantium deserunt ea ipsum
          excepturi illum totam voluptatem necessitatibus quos aspernatur dicta,
          ut nulla quo officia cum laudantium, tempore, accusamus tenetur
          veritatis aliquid rem.
        </p>
      </CardBody>
    </Card>
  );
}
