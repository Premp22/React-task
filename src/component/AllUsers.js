import React from "react";
import Delete from "./DeRegistration";
import { Link } from "react-router-dom";

function Users(props) {
	return (
		<div>
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
								<th>Delete</th>
								<th>Update</th>
							</tr>
							{props.Users.map((item) => {
								return (
									<tr>
										<td>{item.id}</td>
										<td>{item.firstname}</td>
										<td>{item.lastname}</td>
										<td>{item.email}</td>
										<td>{item.password}</td>
										<td>
											<Delete item={item} userList={props.userList}></Delete>
										</td>
										<td>
											<Link to={"/update/" + item.id}>
												<button
													style={{
														color: "white",
														backgroundColor: "green",
														fontWeight: 400,
														fontSize: "0.8rem",
													}}
													className="upb">
													update
												</button>
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Users;
