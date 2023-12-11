import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/adduser.module.css";

const AddUserPage = () => {
	return (
		<div className={styles.container}>
			<form action={""} className={styles.form}>
				<input type="text" placeholder="Usernamae" name="username" required />
				<input type="email" placeholder="Email" name="email" required />
				<input
					type="password"
					placeholder="Password"
					name="password"
					required
				/>
				<input type="phone" placeholder="Phone" name="phone" />
				<select name="isAdmin" id="isAdmin">
					<option value={false}>Is Admin?</option>
					<option value={true}>Yes</option>
					<option value={false}>No</option>
				</select>
				<select name="isActive" id="isActive">
					<option value={true}>Is Active?</option>
					<option value={true}>Yes</option>
					<option value={false}>No</option>
				</select>
				<textarea
					name="address"
					id="address"
					rows="16"
					placeholder="Address"
				></textarea>
				<div className={styles.btnContainer}>
					<button type="submit">Submit</button>
				</div>{" "}
			</form>
		</div>
	);
};

export default AddUserPage;
