import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Getuser.css";
function Getuser() {
	const [state, setState] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/users").then((res) => {
			setState(res.data);
			console.log(res.data);
		});
	}, []);
	return (
		<div className="container">
			<div className="table">
				<table>
					<tbody className="tables">
						<tr className="header">
							<th>Id</th>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Email</th>
							<th>Password</th>
						</tr>
						{state.map((item) => {
							return (
								<tr>
									<td>{item.id}</td>
									<td>{item.firstname}</td>
									<td>{item.lastname}</td>
									<td>{item.email}</td>
									<td>{item.password}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Getuser;
