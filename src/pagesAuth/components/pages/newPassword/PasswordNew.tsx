// @ts-nocheck
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useCreatePasswordMutation } from '@/src/redux/api/auth';
import CustomButtonBold from '@/src/ui/customButton/CustomButtonBold';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import scss from './NewPassword.module.scss';
import { Input } from 'antd';
import CustomButton from '@/src/ui/customButton/CustomButton';

interface ErrorProps {
	password: string;
	confirm: string;
	uuid: string;
}

const PasswordNew = () => {
	const [postRequest] = useCreatePasswordMutation();
	const [showPassword] = useState(false);
	const navigate = useNavigate();
	const { uuid } = useParams();

	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ErrorProps>({ mode: 'onBlur' });

	const onSubmit = async (data: ErrorProps) => {
		const newData = {
			password: data.password,
			confirm: data.confirm,
			uuid
		};
		const response = await postRequest(newData);

		if ('data' in response) {
			const { token }: any = response.data;
			localStorage.setItem('auth_token', token);
			localStorage.setItem('isAuth', 'true');
			navigate('/', { replace: true });
			reset();
		}

		reset();
		if (data.password !== data.confirm) {
			alert('Пароли не совпадают');
			return;
		}
	};

	const navigateToBack = () => {
		navigate(-1);
	};

	return (
		<div className={scss.PasswordNew}>
			<div className={scss.bar}>
				<p>Создайте новый пароль</p>
				<form onSubmit={handleSubmit(onSubmit)} className={scss.content}>
					<Controller
						{...register('password')}
						control={control}
						defaultValue=""
						rules={{ required: 'Пароль обязателен к заполнению' }}
						render={({ field }) => (
							<Input.Password
								{...field}
								iconRender={(visible) =>
									visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
								}
								placeholder="Пароль"
								className={scss.input_password}
								visibilityToggle
								type={showPassword ? 'text' : 'password'}
								style={{
									borderColor: errors.password ? 'red' : '',
									backgroundColor: errors.password
										? 'rgba(255, 0, 0, 0.122)'
										: '',
									outline: 'none'
								}}
								onFocus={(e) => {
									e.target.style.borderColor = '';
									e.target.style.backgroundColor = '';
								}}
							/>
						)}
					/>
					{errors.password && (
						<span className={scss.error_password}>
							{errors.password.message}
						</span>
					)}

					<Controller
						{...register('confirm')}
						control={control}
						defaultValue=""
						rules={{
							required: 'Подтверждение пароля '
						}}
						render={({ field }) => (
							<Input.Password
								{...field}
								iconRender={(visible) =>
									visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
								}
								placeholder="Подтвердите Пароль"
								className={scss.input_password}
								visibilityToggle
								type={showPassword ? 'text' : 'password'}
								style={{
									borderColor: errors.confirm ? 'red' : '',
									backgroundColor: errors.confirm
										? 'rgba(255, 0, 0, 0.122)'
										: '',
									outline: 'none'
								}}
								onFocus={(e) => {
									e.target.style.borderColor = '';
									e.target.style.backgroundColor = '';
								}}
							/>
						)}
					/>
					{errors.confirm && (
						<span className={scss.error_confirm}>{errors.confirm.message}</span>
					)}

					<CustomButtonBold
						children={'сохранить'}
						type={'submit'}
						disabled={false}
					/>
					<CustomButton children={'cancel'} onClick={() => console.log()} />
				</form>
			</div>
		</div>
	);
};

export default PasswordNew;
