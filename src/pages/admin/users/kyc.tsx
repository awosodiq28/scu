import AuthContext from '@/components/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import styles from '@/styles/Dashboard.module.css';
import AdminLayout from '@/components/admin/AdminLayout';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/components/Modal';

const Kyc = () => {
	const { users, getAllUsers }: any = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [docImg, setDocImg] = useState('');

	// const [kycList, setKycList] = useState([]);
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const getAllKYCs = async () => {
	// 		console.log('effect');
	// 		const res = await fetch(
	// 			'https://somercu.onrender.com/admin/get-kycs',
	// 			{
	// 				method: 'GET',
	// 				credentials: 'include'
	// 			}
	// 		);
	// 		const data = await res.json();
	// 		console.log('🚀 ~ file: AuthContext.tsx:56 ~ data:', data);
	// 		if (res.ok) {
	// 			setKycList(data);
	// 		} else {
	// 			setKycList([]);
	// 		}
	// 	};
	// 	getAllKYCs();
	// }, []);

	const handleImgView = (displayImg: string) => {
		setDocImg(displayImg);
		setOpenModal(true);
	};

	const verify = async (
		// e: React.MouseEvent<HTMLButtonElement, MouseEvent>
		e: any
	) => {
		console.log(e.target.value);
		const account_no = e.target.value;
		setLoading(true);
		const res = await fetch(
			'https://somercu.onrender.com/admin/verify-doc',
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({
					account_no
				})
			}
		);
		const data = await res.json();
		console.log(data);
		setLoading(false);
		if (res.ok) {
			alert('User verified successfully');
			getAllUsers();
			console.log(data);
		} else {
			alert('unsuccessful');
		}
	};

	return (
		<AdminLayout>
			<div className={styles.details}>
				<div className={`${styles['con']} ${styles['over']}`}>
					<p>Users Documents</p>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>AC Number</th>
								<th>Name</th>
								<th>Email</th>
								<th>ID Doc</th>
								<th>Address Doc</th>
								<th>Action</th>
							</tr>
						</thead>
						{users ? (
							// let kycList = users.filter((e: any) => {
							// 	return e.verification;
							// });

							// console.log(kycList);
							<tbody>
								{users.map(
									(user: any, i: any) =>
										user.verification && (
											<tr key={i}>
												<td></td>
												<td>{+user.account_no}</td>
												<td>{user.fullName}</td>
												<td>{user.email}</td>
												<td>
													{' '}
													<button
														onClick={() =>
															handleImgView(
																user
																	?.verification
																	?.identity_doc
															)
														}>
														Click here
													</button>
												</td>
												<td>
													<button
														onClick={() =>
															handleImgView(
																user
																	?.verification
																	?.address_doc
															)
														}>
														Click here
													</button>
												</td>
												<td>
													{user.verified ? (
														'Verified'
													) : (
														<button
															onClick={verify}
															value={
																user.account_no
															}
															disabled={loading}>
															Verify
														</button>
													)}
												</td>
											</tr>
										)
								)}
							</tbody>
						) : (
							''
						)}
					</table>
				</div>
				<Modal openModal={openModal}>
					<div className={styles.editTransactionModal}>
						<button
							className={styles.transactionModalCancel}
							onClick={() => setOpenModal(false)}>
							X
						</button>
						<Image src={docImg} alt='Verification document' fill />
					</div>
				</Modal>
			</div>
		</AdminLayout>
	);
};

export default Kyc;
