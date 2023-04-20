import { useState } from 'react';
import styles from '@/styles/Dashboard.module.css';
import AdminLayout from '@/components/admin/AdminLayout';

const SendMoney = () => {
	const [account_no, setAccount_no] = useState('');
	const [amount, setAmount] = useState('');
	const [note, setNote] = useState('');
	const [pin, setPin] = useState('');
	const [error, setError] = useState('');

	const sendMoney = (e: any) => {
		e.preventDefault();
		setError('The pin you entered is incorrect');
	};

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles.con} ${styles.over}`}>
					<p style={{ color: 'red' }}>{error && error}</p>
					<h6 className='tac'>SEND MONEY</h6>
					<form onSubmit={sendMoney}>
						<label>
							<p>Account Number:</p>
							<input
								required
								type='number'
								value={account_no}
								onChange={(e) => setAccount_no(e.target.value)}
							/>
						</label>
						<label>
							<p>Amount:</p>
							<input
								required
								type='number'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</label>
						<label>
							<p>Pin:</p>
							<input
								required
								type='number'
								value={pin}
								onChange={(e) => setPin(e.target.value)}
							/>
						</label>
						<label>
							<p>Note:</p>
							<textarea
								value={note}
								required
								onChange={(e) =>
									setNote(e.target.value)
								}></textarea>
						</label>
						<button type='submit' className={styles.btn}>
							Submit
						</button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};
export default SendMoney;
