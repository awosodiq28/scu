import AuthContext from '@/components/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Dashboard.module.css';

const AllTransactions = () => {
	// const { users }: any = useContext(AuthContext);
	// const transactions = users[0]?.transactions;
	const [transactions, setTransactions] = useState([]);
	console.log(transactions);

	useEffect(() => {
		getAllUsers();
	}, []);

	const getAllUsers = async () => {
		const res = await fetch(
			'https://somercu.onrender.com/admin/all-transactions',
			{
				method: 'GET',
				credentials: 'include'
			}
		);
		const data = await res.json();
		console.log('🚀 ~ file: AuthContext.tsx:56 ~ data:', data);
		if (res.ok) {
			setTransactions(data);
		} else {
			setTransactions([]);
		}
	};

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles['con']} ${styles['over']}`}>
					<p>All Transactions</p>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Date</th>
								<th>User</th>
								<th>AC Number</th>
								<th>Currency</th>
								<th>DR/CR</th>
								<th>Type</th>
								<th>Method</th>
								<th>Amount</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						{transactions ? (
							<tbody>
								{transactions.map(
									(transaction: any, i: any) => (
										<tr key={i}>
											<td>{i + 1}</td>
											{transaction.created_at.substring(
												0,
												10
											)}

											<td>{transaction.to}</td>
											<td>
												{+transaction.userAccount_no +
													1002784563}
											</td>
											<td>{transaction.currency}</td>
											<td>{transaction.cr_or_dr}</td>
											<td>{transaction.type}</td>
											<td>Manual</td>
											<td>{transaction.amount}</td>
											<td>{transaction.condition}</td>
											<td>cation</td>
										</tr>
									)
								)}
							</tbody>
						) : (
							''
						)}
					</table>
				</div>
			</div>
		</AdminLayout>
	);
};

export default AllTransactions;
