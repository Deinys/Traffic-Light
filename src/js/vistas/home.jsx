import React from "react";
import Semaforo from "../component/Semaforo.jsx";
import PoleStick from "../component/PoleStick.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<PoleStick />
			<Semaforo />
		</div>
	);
};

export default Home;
