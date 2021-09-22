import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function Update(props) {
	//const[currentdata,setcurrentdata]=useState()
	const [data, setData] = useState();

	const handleInputs = (e) => {
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};
	useEffect(async () => {
		let result = await fetch(
			"http://localhost:5000/users/" + props.match.params.id
		);

		result = await result.json();
		setData(result);
		console.log(result);
	}, []);

	async function edituser(id) {
		console.log(data);
		const { firstname, lastname } = data;
		const response = await fetch(`http://localhost:5000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstname,
				lastname,
			}),
		});
	}
	if (!data) {
		return null;
	}
	return (
		<div>
			<input
				type="text"
				name="firstname"
				defaultValue={data.firstname}
				value={data.firstname}
				onChange={handleInputs}
				placeholder="firstname"
				className="input"
			/>
			<input
				type="text"
				name="lastname"
				defaultValue={data.lastname}
				value={data.lastname}
				onChange={handleInputs}
				placeholder="firstname"
				className="input"
			/>
			<button onClick={() => edituser(data.id)}>Update</button>
		</div>
	);
}

export default withRouter(Update);
