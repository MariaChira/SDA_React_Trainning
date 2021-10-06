import Header from './components/header';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [searchStr, setSearchStr] = useState('Type here your search');

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

  function handeSearchStr(e) {
    console.log(e.target.value);
    setSearchStr(e.target.value);
  }

  function startSearch() {
    console.log("search !!!!")
  }

  console.log(">>>>>>>>>>", searchStr);

  return (
    <div className="App">
      <Header listItems={generateList(100)} 
      onClickBtn={handleHeaderOnClickBtn} 
      handleSearchInput={handeSearchStr}
      handleButtonSearch={startSearch}/>
    </div>
  );
}

export default App;
