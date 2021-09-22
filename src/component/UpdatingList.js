import React from "react";
import { useState } from "react";
function UpdatingList(props) {
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
	async function edituser(id) {
		const { firstname, lastname, email, password } = user;
		const response = await fetch(`http://localhost:5000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});
	}
	return (
		<div>
			<div className="lsection">
				<form action="">
					<input
						type="text"
						name="firstname"
						defaultValue={props.value.name}
						onChange={handleInputs}
						placeholder="firstname"
						className="input"
					/>
					<br />
					<input
						type="text"
						name="lastname"
						defaultValue={props.value.lastname}
						onChange={handleInputs}
						placeholder="lastname"
						className="input"
					/>
					<br />
					<input
						type="text"
						name="email"
						defaultValue={props.value.email}
						placeholder="Email"
						onChange={handleInputs}
						className="input"
					/>
					<br />
					<input
						type="text"
						name="password"
						defaultValue={props.value.password}
						placeholder="password"
						onChange={handleInputs}
						className="input"
					/>
					<br />
					<button onClick={() => edituser(props.value.id)}>Update</button>
				</form>
			</div>
		</div>
	);
}

export default UpdatingList;
