import React from "react";

import "./styles.css";

import Jumbotron from "./jumbotron.jsx";

import NavigationBar from "./navBar.jsx";

import CardContainer from "./cards.jsx";

import Footer from "./footer.jsx";

import Greetings from "./greetings.jsx";

//create your first component
const Home = () => {
	return (
	  <div>
		<NavigationBar />
		<Jumbotron />
		<CardContainer />
		<div>
      </div>
		<Footer />
	  </div>
	);
  };

export default Home;
