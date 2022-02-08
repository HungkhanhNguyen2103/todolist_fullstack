import React, { useState } from "react";
import AddItem from "./Components/AddItem";
import Form from "./Components/Form";
import ListItem from "./Components/ListItem";
import Search from "./Components/Search";
import Sort from "./Components/Sort";
import Titles from "./Components/Titles";

function Home() {
  //bat tat toggle
  const [toggle, setToggle] = useState(false);


  //bat tat form
  const showToggle = () => {
    setToggle(!toggle);
  };



  return (
    <div className="container">
      <Titles />
      <div className="row">
        <Search />
        <Sort  />
        <AddItem toggle={toggle} showToggle={showToggle} />
      </div>
      <div className="row">
        <Form
          toggle={toggle}
          showToggle={showToggle}
        />
      </div>

      <ListItem />
    </div>
  );
}

export default Home;
