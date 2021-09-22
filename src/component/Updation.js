import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "../style/Adduser.css";
function Update(props) {
	let history = useHistory();
	const [data, setData] = useState();

	const handleInputs = (e) => {
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};
	useEffect(async () => {
		let result = await fetch(
			"https://api-task-rest.herokuapp.com/users/" + props.match.params.id
		);

		result = await result.json();
		setData(result);
		console.log(result);
	}, []);

	async function edituser(id) {
		const { firstname, lastname, email, password } = data;
		await fetch(`https://api-task-rest.herokuapp.com/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstname,
				lastname,
				email,
				password,
			}),
		});
		history.push("/get");
	}
	if (!data) {
		return null;
	}
	return (
		<div className="ma">
			<input
				type="text"
				name="firstname"
				defaultValue={data.firstname}
				value={data.firstname}
				onChange={handleInputs}
				placeholder="firstname"
				className="input"
			/>
			<br></br>
			<input
				type="text"
				name="lastname"
				defaultValue={data.lastname}
				value={data.lastname}
				onChange={handleInputs}
				placeholder="lastname"
				className="input"
			/>
			<br></br>
			<input
				type="text"
				name="email"
				defaultValue={data.email}
				value={data.email}
				onChange={handleInputs}
				placeholder="email"
				className="input"
			/>
			<br></br>
			<input
				type="text"
				name="password"
				defaultValue={data.password}
				value={data.password}
				onChange={handleInputs}
				placeholder="password"
				className="input"
			/>
			<br></br>
			<button className="upt" onClick={() => edituser(data.id)}>
				UpdateNow
			</button>
		</div>
	);
}

export default withRouter(Update);
