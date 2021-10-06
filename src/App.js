import Header from './components/header';
import './App.css';
import React from 'react';

const rendomString = "Blabla";

function App() {

  function handleHeaderOnClickBtn(btnState) {
    console.log("click-from-header", btnState)
  }

  function generateList(length) {
    const arr = [];
    for(let i=0; i<length; i++){
      arr.push(`item-${i}`);
    }
    return arr;
  }

  return (
    <div className="App">
      <Header listItems={generateList(100)} onClickBtn={handleHeaderOnClickBtn} />
      <Header listItems={[1, 2, 3]} />
      <Header listItems={[]} />
      <Header />
      {/* <h2>{rendomString}</h2> */}
    </div>
  );
}

export default App;
