import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Getuser.css";
import Users from "./AllUsers";

function RegisterUser() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		userList();
	}, []);
	function userList() {
		axios
			.get("http://localhost:5000/users")
			.then((result) => {
				setUsers(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return <Users Users={users} userList={userList}></Users>;
}

export default RegisterUser;
