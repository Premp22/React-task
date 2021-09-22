import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../style/Updation.css";
function Registration() {
	let history = useHistory();
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
	const postdata = async (e) => {
		e.preventDefault();
		const { id, firstname, lastname, email, password } = user;
		const response = await fetch("https://api-task-rest.herokuapp.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
				firstname,
				lastname,
				email,
				password,
			}),
		});

		history.push("/get");
	};
	return (
		<div className="man">
			<div className="box">
				<div className="lsection">
					<form action="">
						<h1>Add User</h1>
						<input
							type="text"
							name="id"
							value={user.name}
							placeholder="id"
							onChange={handleInputs}
							className="input"
						/>
						<br />
						<input
							type="text"
							name="firstname"
							value={user.name}
							onChange={handleInputs}
							placeholder="firstname"
							className="input"
						/>
						<br />
						<input
							type="text"
							name="lastname"
							value={user.name}
							onChange={handleInputs}
							placeholder="lastname"
							className="input"
						/>
						<br />
						<input
							type="text"
							name="email"
							value={user.name}
							placeholder="Email"
							onChange={handleInputs}
							className="input"
						/>
						<br />
						<input
							type="password"
							name="password"
							value={user.name}
							placeholder="password"
							onChange={handleInputs}
							className="input"
						/>
						<br />
						<input
							style={{ cursor: "pointer" }}
							type="submit"
							name="button"
							class="btn"
							onClick={postdata}
						/>
					</form>
				</div>
				<div className="rsection">
					<h2>User Details</h2>
					<p>From Here You can Get the Users Detalis</p>
					<button
						className="btn1"
						onClick={() => {
							history.push("/get");
						}}>
						GetUsers
					</button>
				</div>
			</div>
		</div>
	);
}

export default Registration;
