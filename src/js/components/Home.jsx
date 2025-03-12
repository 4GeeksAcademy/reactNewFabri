import React from "react";
import Navbar from "./navbar/navbar";
import Card from "./card/card";
import Jumbotron from "./jumbotron/jumbotron";
import NavInferior from "./navinferior/navInferior";

const Home = () => {
	return (
		<>
			<div>
				<Navbar />
				<Jumbotron />
			</div>
			<div className=" container d-flex justify-content-center col-sm-12 ">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div>
				<NavInferior />
			</div>
		</>
	);
};

export default Home;