import React from 'react';
import UserLayout from '@/components/dashboard/UserLayout';
import Details from '@/components/dashboard/Details';
import Transactions from '@/components/dashboard/Transactions';

const dashboard = () => {
	return (
		<UserLayout>
			<Details />
			{/* <Transactions /> */}
		</UserLayout>
	);
};

export default dashboard;
