import React from 'react';
import './App.css';
import "../src/Components/headerr/header.css"
import "../src/Components/section/secrion.css"
import "../src/Components/footer/footer.css"
import { Header } from './Components/headerr/Header';
import { Section } from './Components/section/Section';
import { Footer } from './Components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Section />
      <Footer />

    </>
  );
}

export default App;
