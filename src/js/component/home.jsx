import React from "react";
import CRUD_Read from "./CRUD_Read";
import CRUD_Create from "./CRUD_Create";
import CRUD_Delete from "./CRUD_Delete";
import CRUD_Update from "./CRUD_Update";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">

		<div className="container text-center">
			<div className="row">

				<div className="col-12 mx-auto bg-dark text-white my-2">
					<h1> C R U D </h1>
				</div>

				<div className="col bg-success mx-1">
					<CRUD_Create/>
				</div>

				<div className="col bg-secondary mx-1">
					<CRUD_Read/>
					{/* <CRUD_Create/> */}
				</div>

				<div className="col bg-primary mx-1">
					<CRUD_Update/>
				</div>

				<div className="col bg-danger mx-1">
					<CRUD_Delete/>
				</div>
			</div>
		</div>
			
			

		</div>
	);
};

export default Home;
