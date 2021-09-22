import React from "react";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function Update(props) {
	const [data, setData] = useState([]);
	const [user, setUser] = useState({
		id: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	const handleInputs = (e) => {
		console.log(e);
		let name = e.target.name;
		let value = e.target.value;
		setUser({ ...user, [name]: value });
	};
	useEffect(async () => {
		let result = await fetch(
			"http://localhost:5000/users/" + props.match.params.id
		);

		result = await result.json();
		setData(result);
	}, []);

	async function edituser(id) {
		const { firstname } = user;
		const response = await fetch(`http://localhost:5000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstname,
			}),
		});
	}
	return (
		<div>
			<input
				type="text"
				name="firstname"
				defaultValue={data.firstname}
				onChange={handleInputs}
				placeholder="firstname"
				className="input"
			/>
			<button onClick={() => edituser(data.id)}>Update</button>
		</div>
	);
}

export default withRouter(Update);
