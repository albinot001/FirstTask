import React, { useState } from 'react';
import Button from './Components/Buttons.jsx'; 

function App() {
  const [activeButton, setActiveButton] = useState('HomeButton');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <h1>Simple SPA</h1>
      <div>
        <div className='outside-ul'>
          <ul className='ul-css'>
            <li><Button name="Home" onClick={() => handleButtonClick("HomeButton")} active={activeButton == "HomeButton"} /></li>
            <li><Button name="Stuff" onClick={() => handleButtonClick("StuffButton")} active={activeButton == "StuffButton"} /></li>
            <li><Button name="Contact" onClick={() => handleButtonClick("ContactButton")} active={activeButton == "ContactButton"} /></li>
          </ul>
        </div>
        {activeButton === "HomeButton" && (
          <div className='insidecontainer-content'>
            <h1>HELLO</h1>
            <p>Cages in et trat cols et dement aliqua ps via gravisit, mes du bondum est got inoncus ni notus 
              nec massa Macens hende locat u ne mosi Cum soris natoue penaltus e </p>
              <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
          </div>
        )}
        {activeButton === "StuffButton" && (
          <div className='insidecontainer-content'>
            <h1>STUFF</h1>
            <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
            <ol>
              <li>1. Nulla pulvinar diam</li>
              <li>2. Facilisis bibendum</li>
              <li>3. Vestibulum vulputate</li>
              <li>4. Eget erat</li>
              <li>5. Id porttitor</li>
            </ol>
          </div>
        )}
        {activeButton === "ContactButton" && (
          <div className='insidecontainer-content'>
            <h1>GOT QUESTIONS ?</h1>
            <p>The easiest thing to do is post in our  <a href="https://www.inspire11.com/" target="_blank">forum</a></p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
