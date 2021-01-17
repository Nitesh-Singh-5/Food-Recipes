import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Recepies from "./Components/Recepies";
import Axios from "axios";

function App() {
  const [search, setsearch] = useState("chiken");
  const [recipes, setRecipe] = useState([]);

  const APP_ID = "96ae9512";
  const APP_KEY = "dab5bcc296fc5998a5baaf7e9647aabe";

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipe(res.data.hits);
  };

  const onInputChange = (e) => {
    setsearch(e.target.value);
  };
  const onSearchClick = () =>{
    getRecipe()
  }

  return (
    <>
      <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
        <div className="container">
          <Recepies recipes={recipes} />
        </div>
      </div>
    </>
  );
}

export default App;