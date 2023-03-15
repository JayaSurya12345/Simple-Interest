import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function CollapsibleBox({ heading, content = "", isFormula = false, isLast = false , isSidePanel = false}) {

  let weight = 400;
  if (!isSidePanel) {
    weight = 600;
  }

  const style = {
    cursor: 'pointer',
    fontWeight: weight,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem 0.5rem 10px 0',
  }

  return (
    <>

      {/* line */}
      {isLast ? <div className='mb-1'></div> : <div style={isSidePanel? { width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 0.6, marginBottom: '10px' } :{ width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 0.6, marginBottom: '10px', }}></div>}
      
    </>
  );
}