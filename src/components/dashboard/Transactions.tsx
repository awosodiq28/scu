import AuthContext from '@/components/AuthContext';
import React, { useContext, useState } from 'react';
// import styles from '@/styles/Dashboard.module.css';

const Transactions = () => {
	const { user }: any = useContext(AuthContext);
	const transactions = user?.transactions;
	console.log(transactions);

	return (
		<>
			<p>Recent Transactions</p>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Currency</th>
						<th>Amount</th>
						<th>Charge</th>
						<th>Grand Total</th>
						<th>DR/CR</th>
						<th>Type</th>
						<th>Method</th>
						<th>Status</th>
					</tr>
				</thead>
				{transactions ? (
					<tbody>
						{transactions.map((transaction: any, i: any) => (
							<tr key={i}>
								<td>{transaction.created_at}</td>

								<td>{transaction.currency}</td>
								<td>{transaction.amount}</td>
								<td>-{transaction.currency}0.00</td>
								<td>
									{transaction.cr_or_dr == 'CR' ? (
										<p style={{ color: '#08e308' }}>
											+{transaction.amount}
										</p>
									) : (
										<p style={{ color: 'red' }}>
											-{transaction.amount}
										</p>
									)}
								</td>
								<td>{transaction.cr_or_dr}</td>
								<td>{transaction.type}</td>
								<td>Manual</td>
								<td>{transaction.condition}</td>
							</tr>
						))}
					</tbody>
				) : (
					''
				)}
			</table>
		</>
	);
};

export default Transactions;
