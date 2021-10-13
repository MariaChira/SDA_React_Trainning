import Header from "./components/header"
import "./App.css"
import React, { useState } from "react"

// const rendomString = "Blabla"

function App() {
  const [searchStr, setSearchStr] = useState('');

  function handleHeaderOnClickBtn(btnState) {
    console.log("click-from-header", btnState)
  }

  function generateList(length) {
    const arr = []
    for (let i = 0; i < length; i++) {
      arr.push(`item-${i}`)
    }
    return arr
  }

  function handleSearchStr(e) {
    console.log(e.target.value);
    setSearchStr(e.target.value);
  }

  function startSearch() {
    console.log("search")
  }


  return (
    <div className="App">
      <Header
        listItems={generateList(100)}
        onClickBtn={handleHeaderOnClickBtn}
        handleSearchInput={handleSearchStr}
        handleButtonSearch={startSearch}
      />
    </div>
  )
}

export default App
