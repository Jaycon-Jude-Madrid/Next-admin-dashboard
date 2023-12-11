import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const UsersPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder="Search user ..." />
				<Link href={"/dashboard/users/add"}>
					{" "}
					<button className={styles.addButton}>Add new</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Name</td>
						<td>Email</td>
						<td>Created At</td>
						<td>Role</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.user}>
								<Image
									src="/noavatar.png"
									alt=""
									width={40}
									height={40}
									className={styles.image}
								/>{" "}
								John Doe
							</div>
						</td>
						<td>john@test.com</td>
						<td>13/01/2022</td>
						<td>Admin</td>
						<td>Active</td>
						<td>
							<div className={styles.btnContainer}>
								<Link href={""}>
									<button className={`${styles.button} ${styles.view}`}>
										View{" "}
									</button>
								</Link>
								<Link href={""}>
									<button className={`${styles.button} ${styles.delete}`}>
										Delete{" "}
									</button>{" "}
								</Link>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<Pagination count={10} />
		</div>
	);
};

export default UsersPage;
