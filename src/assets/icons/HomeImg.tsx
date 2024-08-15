import { FC } from 'react';

interface HomeImgProps {
	className: string;
}

const HomeImg: FC<HomeImgProps> = ({ className }) => {
	return (
		<>
			<svg
				className={className}
				width="20"
				height="21"
				viewBox="0 0 20 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 9V16C2 17.8856 2 18.8284 2.58579 19.4142C3.17157 20 4.11438 20 6 20H14C15.8856 20 16.8284 20 17.4142 19.4142C18 18.8284 18 17.8856 18 16V9"
					stroke="currentColor"
					stroke-opacity="0.7"
					stroke-width="2"
				/>
				<path
					d="M1 10L7.17158 3.82842C8.50491 2.49509 9.17157 1.82843 10 1.82843C10.8284 1.82843 11.4951 2.49509 12.8284 3.82843L19 10"
					stroke="currentColor"
					stroke-opacity="0.7"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M7 16C7 15.0681 7 14.6022 7.15224 14.2346C7.35523 13.7446 7.74458 13.3552 8.23463 13.1522C8.60218 13 9.06812 13 10 13C10.9319 13 11.3978 13 11.7654 13.1522C12.2554 13.3552 12.6448 13.7446 12.8478 14.2346C13 14.6022 13 15.0681 13 16V20H7V16Z"
					fill="currentColor"
					fill-opacity="0.7"
				/>
				<path
					d="M14 3.5C14 3.03406 14 2.80109 14.0761 2.61732C14.1776 2.37229 14.3723 2.17761 14.6173 2.07612C14.8011 2 15.0341 2 15.5 2C15.9659 2 16.1989 2 16.3827 2.07612C16.6277 2.17761 16.8224 2.37229 16.9239 2.61732C17 2.80109 17 3.03406 17 3.5V9L14 5.5V3.5Z"
					fill="currentColor"
					fill-opacity="0.7"
				/>
			</svg>
		</>
	);
};

export default HomeImg;
