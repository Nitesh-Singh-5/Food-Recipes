import React from 'react'
import './App.css'
import Header from './Components/Header';
import Recepies from './Components/Recepies'

function App(){
    return(
        <>
        <div className="App">
            <h1>Food Recipe App</h1>
            <Header />
            <Recepies />
        </div>
        </>
    )
}

export default App