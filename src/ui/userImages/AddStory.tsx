import addImgStory from '../../assets/FirstMan.png';
import plusImg from '../../assets/Plusicon.svg';
import scss from './Style.module.scss';
const AddStory = () => {
	return (
		<>
			<img src={addImgStory} alt="addImgStory" />
			<img className={scss.plus_img} src={plusImg} alt="plus" />
		</>
	);
};

export default AddStory;
