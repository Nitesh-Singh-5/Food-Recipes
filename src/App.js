import React,{useState} from 'react'
import './App.css'
import Header from './Components/Header';
import Recepies from './Components/Recepies'

function App(){

    const [search,setsearch] = useState("Nitesh")
    const onInputChange = e =>{
        setsearch(e.target.value)
    }

    return(
        <>
        <div className="App">
            <Header search={search} onInputChange={onInputChange} />
            <Recepies />
        </div>
        </>
    )
}

export default App