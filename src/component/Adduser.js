import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../style/Adduser.css";
function Adduser() {
	let history = useHistory();
	const [user, setUser] = useState({
		id: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	let name, value;
	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;
		setUser({ ...user, [name]: value });
		console.log(user);
	};
	const postdata = async (e) => {
		e.preventDefault();
		const { id, firstname, lastname, email, password } = user;
		const res = await fetch("http://localhost:5000/users", {
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
		const data = await res.json();
	};
	return (
		<div className="ma">
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
							type="text"
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
					<p>From Here You can Get Users Detalis</p>
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

export default Adduser;
