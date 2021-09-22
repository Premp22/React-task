import React from "react";

function Delete(props) {
	function deleteUser(id) {
		fetch(`http://localhost:5000/users/${id}`, {
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
			<button onClick={() => deleteUser(props.item.id)}>Delete</button>
		</div>
	);
}

export default Delete;
