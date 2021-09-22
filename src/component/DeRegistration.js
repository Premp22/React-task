import React from "react";

function Delete(props) {
	function deleteUser(id) {
		fetch(`https://api-task-rest.herokuapp.com/users/${id}`, {
			method: "DELETE",
		}).then((result) => {
			props.userList();
			result.json().then((resp) => {
				console.log(resp);
			});
		});
	}
	return (
		<div>
			<button
				style={{
					color: "white",
					backgroundColor: "red",
					fontWeight: 400,
					fontSize: "0.8rem",
				}}
				onClick={() => deleteUser(props.item.id)}>
				Delete
			</button>
		</div>
	);
}

export default Delete;
