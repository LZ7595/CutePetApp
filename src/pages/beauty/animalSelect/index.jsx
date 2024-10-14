import Nav from '@/components/navbar';
import { useNavigate } from 'react-router-dom';
import '@/scss/animalSelect.scss';

const animalSelect = ({ setAnimalSelectVisible, setSelectedAnimal }) => {
    const data = [
        {
            "animalId": 3,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "豆小逗",
            "animalAge": "3 个月",
            "animalGender": "母",
            "animalDescribe": "体型小巧，活泼好动",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "博美犬",
                "type": "dog",
                "size": "小型犬"
            }
        },
        {
            "animalId": 4,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "牛小马",
            "animalAge": "3 个月",
            "animalGender": "母",
            "animalDescribe": "体型小巧，活泼好动",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "博美犬",
                "type": "dog",
                "size": "小型犬"
            }
        },
    ];

    const navigate = useNavigate();
    const handleClose = () => {
        if (setAnimalSelectVisible) {
            setAnimalSelectVisible(false);
        }
    };

    // 处理点击事件委托
    const handleContentItemClick = (event, item) => {
        const radio = event.target.closest('.animal-select-contentItem').querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
            setSelectedAnimal(item);
        }
    };

    const handleConfirm = () => {
        const selectedRadio = document.querySelector('input[type="radio"]:checked');
        if (selectedRadio) {
            const selectedAnimalId = selectedRadio.value;
            const selectedAnimal = data.find(item => item.animalId === parseInt(selectedAnimalId));
            setSelectedAnimal(selectedAnimal);
            setAnimalSelectVisible(false);
        } else {
            alert('请先选择一个宠物');
        }
    };

    return (
        <div className="animal-select">
            <Nav title={'选择宠物'} showLeftArrow={true} clickLeft={handleClose} clickRight={() => navigate('/addAnimal')} rightText={"添加"} />
            <div className={`animal-select-content  ${data?.length? '' : 'no-data'}`}>
                {data?.length?
                    data.map((item, index) => (
                        <div className='animal-select-contentItem' key={index} onClick={(e) => handleContentItemClick(e, item)}>
                            <img src={item.animalImg} alt="" />
                            <div className="animal-select-contentItem-info">
                                <div className='info-top'>
                                    <div className="top-title">{item.animalName}</div>
                                    <div className='top-animalAge'>{item.animalAge}</div>
                                </div>
                                <div className='info-center'>
                                    {item.animalType.breed}
                                </div>
                                <div className='info-bottom'>{item.animalDescribe}</div>
                            </div>
                            <input type='radio' name='animal' value={item.animalId} />
                        </div>
                    ))
                    : <div className='no-data-info'><img src='/src/assets/illustration.png' /><div className='no-data-info-text'>没有看到你的宠物</div></div>}
            </div>
            <div className='animal-select-bottom'>
                <button className='animal-select-bottom-btn' onClick={handleConfirm}>确定</button>
            </div>
        </div>
    );
};

export default animalSelect;