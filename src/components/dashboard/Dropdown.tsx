import Link from 'next/link';
import { Children, useState } from 'react';
import styles from '@/styles/DashboardNav.module.css';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ children, categories }: any) => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<div
				className={styles.flexSB}
				onClick={() => setDropdown(!dropdown)}>
				<div className={styles.flex}>
					{children}
					<p>{top}</p>
				</div>
				<div>{dropdown ? <FaAngleDown /> : <FaAngleRight />}</div>
			</div>
			<div
				className={
					dropdown ? styles.dropdownContent : styles.displayNone
				}>
				{categories.map((item, i) => (
					<div key={i}>
						<Link href={item}>{item}</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Dropdown;
