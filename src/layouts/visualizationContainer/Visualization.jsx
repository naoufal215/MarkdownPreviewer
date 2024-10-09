import React from 'react';
import { useSelector } from 'react-redux';
import MarkdownComponant from './markdownComponant';


export default function Visualization() {

    const textProperties = useSelector(state => state.textProperties);


  return (
    <>
        <MarkdownComponant text={textProperties.text} />
    </>
  )
}
