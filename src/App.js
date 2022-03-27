import "./App.css";
import Footer from "./Components/Footers";
import React, { Component } from "react";
import MyNavbar from "./Components/Navbar";
//Non rappresenta documenti dinamicamente
//function App() {

//Funziona in modo dinamico e mi permette di mettere i props
class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <MyNavbar></MyNavbar>
        <div className="content">This is a content</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
