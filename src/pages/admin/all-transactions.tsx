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
								<th>DR/CR</th>
								<th>Type</th>
								<th>Method</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>
						{transactions ? (
							<tbody>
								{transactions.map(
									(transaction: any, i: any) => (
										<tr key={i}>
											<td>{i + 1}</td>
											<td>
												{' '}
												{transaction.created_at.substring(
													0,
													10
												)}
											</td>
											<td>{transaction.to}</td>
											<td>
												{+transaction.userAccount_no +
													1002784563}
											</td>

											<td>{transaction.cr_or_dr}</td>
											<td>{transaction.type}</td>
											<td>Manual</td>
											<td>
												<p
													style={
														transaction.cr_or_dr ==
														'CR'
															? {
																	color: '#08e308'
															  }
															: { color: 'red' }
													}>
													{transaction.currency}
													{transaction.amount}
												</p>
												<td></td>
											</td>
											<td>{transaction.condition}</td>
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
