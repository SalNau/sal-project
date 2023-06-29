import React from "react";
import './App.css';
import Header from "./Header"; // contact app application has 3 components as header add contact and contact list so import them
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() { //this is an app component and we are returning from the app component of div hello world
  
   const contact = [
    {
      id:"1",
      "name": "Nyla",
      "email": "nyla@gmail.com",
    },
    {
      id:"2",
      "name": "Ayra",
      "email": "ayra@gmail.com",
    },
   ];
  return ( 
  <div className="ui container">
    <Header/>
    <AddContact/>
    <ContactList contacts={contact} />
  </div> //react jsx, we cannot use html in js
  );
}

export default App;
