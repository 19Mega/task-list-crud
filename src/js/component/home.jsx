import React from "react";
import ToDoListComponent from "./todoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			
			
			<ToDoListComponent/>

		</div>
	);
};

export default Home;
