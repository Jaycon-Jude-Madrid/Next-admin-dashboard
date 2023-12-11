import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const ProductsPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<Search placeholder="Search user ..." />
				<Link href={"/dashboard/products/add"}>
					{" "}
					<button className={styles.addButton}>Add new</button>
				</Link>
			</div>
			<table className={styles.table}>
				<thead>
					<tr>
						<td>Title</td>
						<td>Price</td>
						<td>Description</td>
						<td>Created At</td>
						<td>Stock </td>

						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className={styles.product}>
								<Image
									src="/noproduct.jpg"
									alt=""
									width={40}
									height={40}
									className={styles.image}
								/>{" "}
								Iphone 15
							</div>
						</td>
						<td>$999</td>

						<td>Lorem ipsum dolor sit amet c</td>
						<td>13/01/2022</td>
						<td>999</td>
						<td>Active</td>
						<td>
							<div className={styles.btnContainer}>
								<Link href={`dashboard/users/2`}>
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

export default ProductsPage;
