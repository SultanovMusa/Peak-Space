import { FC } from 'react';

interface NotificationsIgmProps {
	className: string;
}

const NotificationsIgm: FC<NotificationsIgmProps> = ({ className }) => {
	return (
		<>
			<svg
				className={className}
				width="23"
				height="23"
				viewBox="0 0 23 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_247_1506)">
					<path
						d="M5.99999 8.49999C6 5.18628 8.68629 2.5 12 2.5V2.5C15.3137 2.5 18 5.1863 18 8.50001V10.7756C18 10.9234 18.0321 11.0695 18.094 11.2037L19.238 13.6824C19.637 14.5467 19.8364 14.9789 19.8667 15.3267C19.9453 16.2307 19.4055 17.0743 18.5518 17.3817C18.2233 17.5 17.7474 17.5 16.7954 17.5H12H7.20458C6.25263 17.5 5.77666 17.5 5.44816 17.3817C4.59448 17.0743 4.05473 16.2307 4.13333 15.3267C4.16357 14.9789 4.36303 14.5467 4.76195 13.6824L5.90594 11.2037C5.9679 11.0695 5.99998 10.9234 5.99998 10.7756L5.99999 8.49999Z"
						stroke="currentColor"
						stroke-opacity="0.7"
						stroke-width="2"
					/>
					<path
						d="M9 21L9.69841 21.1164C11.2223 21.3704 12.7777 21.3704 14.3016 21.1164L15 21"
						stroke="currentColor"
						stroke-opacity="0.7"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_247_1506">
						<rect width="23" height="23" fill="currentColor" />
					</clipPath>
				</defs>
			</svg>
		</>
	);
};

export default NotificationsIgm;
