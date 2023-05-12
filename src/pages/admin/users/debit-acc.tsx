import UpdateBal from '@/components/UpdateBal';
import AdminLayout from '@/components/admin/AdminLayout';
import React from 'react';

const debitAcc = () => {
	return (
		<AdminLayout>
			<UpdateBal api='debit-acc' CROrDR='Debit' />
		</AdminLayout>
	);
};

export default debitAcc;
