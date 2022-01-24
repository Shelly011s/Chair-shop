import React from "react";
import "./App.scss";
import "./index.css";

//Components
import Header from "./components/header";
import Page from "./components/MainPage"

//context
import {PathContext, PathContextProvider} from './context/Context';

export default function App() {
  
  return (
    <>
    <PathContextProvider>
      
        <Header />
          <Page/>
      
    </PathContextProvider> 
    </>
  );
}


