/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react';
import {
	useGetPublicVideoQuery,
	usePostUserPublicMutation
} from '@/src/redux/api/userPublic';
import ModalTs from '@/src/ui/modal/Modal';

import { IconCirclePlus, IconDots, IconHeartFilled } from '@tabler/icons-react';

import scss from './Style.module.scss';

const PublicVideo = () => {
	const { data, isLoading } = useGetPublicVideoQuery();
	const [, setHidePhoto] = useState(false);
	const [image, setImage] = useState<string>('');
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [postRequest] = usePostUserPublicMutation();

	const [isModal, setIsModal] = useState(false);

	const openModal = () => {
		setIsModal(true);
	};
	const closeModal = () => {
		setIsModal(false);
	};

	const [showMessage, setShowMessage] = useState<any>({});
	const ShowMessageAgain = (id: any) => {
		setShowMessage((prevState: { [x: string]: string }) => ({
			...prevState,
			[id]: !prevState[id]
		}));
	};

	const handleButtonClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			setHidePhoto(true);
			reader.onload = (e) => {
				if (e.target) {
					setImage(e.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleAddPhoto = async () => {
		try {
			let newData;
			if (
				fileInputRef.current &&
				fileInputRef.current.files &&
				fileInputRef.current.files.length > 0
			) {
				const file = fileInputRef.current.files[0];
				const reader = new FileReader();
				reader.onload = (e) => {
					if (e.target) {
						setImage(e.target.result as string);
					}
				};
				reader.readAsDataURL(file);
				newData = {
					img: image
				};
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				await postRequest(newData as any).unwrap();
			} else {
				return;
			}
			setImage('');
		} catch (error) {
			console.error('Error adding photo:', error);
		}
	};
	return (
		<div className={scss.content}>
			{isLoading ? (
				<h1>Loading . . .</h1>
			) : (
				<>
					<div className={scss.bar}>
						<div onClick={handleButtonClick}>
							<IconCirclePlus color=" #000000B2" stroke={1} />
							<p style={{ textAlign: 'center' }}>
								Добавить <br /> фото
							</p>
						</div>
					</div>
					{data?.map((item) => (
						<div className={scss.section} key={item.id}>
							<img
								onClick={openModal}
								src={item.img}
								alt="photo"
								className={scss.image}
							/>
							<button onClick={() => ShowMessageAgain(item.id)}>
								<IconDots />
							</button>
							<div
								className={
									showMessage[item.id] ? scss.showMessage : scss.isNotMessage
								}
								onClick={() => ShowMessageAgain(item.id)}
							>
								<h4>заблокировать пользователя</h4>
								<span></span>
								<p>удалить пользователя</p>
								<span></span>
								<p>удалить фото</p>
							</div>

							<ModalTs open={isModal} onCancel={closeModal}>
								<div className={scss.widget}>
									{data.map((item) => (
										<div key={item.id}>
											<img src={item.img} alt="photo" />
										</div>
									))}
								</div>
								<IconHeartFilled color="white" />
							</ModalTs>
						</div>
					))}
				</>
			)}

			<input
				placeholder="text"
				type="file"
				ref={fileInputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>

			<button onClick={handleAddPhoto}>Добавить фото</button>
		</div>
	);
};

export default PublicVideo;
