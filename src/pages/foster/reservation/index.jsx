import { useNavigate, useParams } from "react-router-dom";
import { Plus } from "@react-vant/icons";
import { Space, SubmitBar } from "react-vant";
import React ,{ useState } from "react";
import AnimalItem from "@/components/animalItem";
import DateSelection from "@/components/dateSelection";
import InputComponent from "@/components/InputComponent";
import "@/scss/fosterReservation.scss";

const fosterReservation = () => {

    const navigate = useNavigate();
    const { storeId } = useParams();
    const data = [
        {
            id: '1',
            storeName: '淘气联盟宠物店',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            room_type: '单间',
            area: '20 平方米',
            foster_animal_type: ['小型犬', '中型犬', '大型犬', '喵星人'],
            price: {
                '小型犬': '20 元/天',
                '中型犬': '30 元/天',
                '大型犬': '50 元/天',
                '喵星人': '25 元/天'
            },
            phone: '13812345678',
            other_services: {
                '宠物洗澡': '30 元/次',
                '宠物美容': '80 元/次',
                '宠物医疗咨询': '50 元/30 分钟'
            }
        },
        {
            id: '2',
            storeName: '淘气联盟宠物店',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            room_type: '套间',
            area: '30 平方米',
            foster_animal_type: ['小型犬', '中型犬', '大型犬', '喵星人'],
            price: {
                '小型犬': '25 元/天',
                '中型犬': '35 元/天',
                '大型犬': '60 元/天',
                '喵星人': '30 元/天'
            },
            phone: '13987654321',
            other_services: {
                '宠物洗澡': '35 元/次',
                '宠物美容': '90 元/次',
                '宠物寄养期间的视频监控': '10 元/天'
            }
        },
        {
            id: '3',
            storeName: '淘气联盟宠物店',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            room_type: '大通铺',
            area: '40 平方米',
            foster_animal_type: ['小型犬', '中型犬', '大型犬'],
            price: {
                '小型犬': '18 元/天',
                '中型犬': '28 元/天',
                '大型犬': '45 元/天'
            },
            phone: '13612345678',
            other_services: {
                '宠物训练课程': '200 元/5 课时',
                '宠物医疗咨询': '60 元/30 分钟'
            }
        },
        {
            id: '4',
            storeName: '淘气联盟宠物店',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            room_type: '双层笼舍',
            area: '15 平方米',
            foster_animal_type: ['喵星人'],
            price: {
                '喵星人': '30 元/天'
            },
            phone: '13387654321',
            other_services: {
                '宠物寄养期间的视频监控': '15 元/天',
                '宠物医疗咨询': '40 元/30 分钟'
            }
        },
        {
            id: '5',
            storeName: '淘气联盟宠物店',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            room_type: '独立小院',
            area: '50 平方米',
            foster_animal_type: ['大型犬'],
            price: {
                '大型犬': '70 元/天'
            },
            phone: '13112345678',
            other_services: {
                '户外遛狗服务': '20 元/次',
                '宠物医疗咨询': '70 元/30 分钟'
            }
        }
    ];
    let store = null;
    if (storeId) {
        store = data.find((item) => item.id === storeId);
    }

    const [days, setDays] = useState(null);
    const [selectedDates, setSelectedDates] = useState('');
    const handleDaysUpdate = (newDays, selectedDates) => {
        setDays(newDays);
        setSelectedDates(selectedDates);
    };

    const animalData = [
        {
            "animalId": 1,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "赖小赖",
            "animalAge": "1 个月",
            "animalGender": "公",
            "animalDescribe": "非常可爱，喜欢玩球",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "伯恩山犬",
                "type": "dog",
                "size": "大型犬"
            }
        },
        {
            "animalId": 2,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "旺小旺",
            "animalAge": "2 个月",
            "animalGender": "公",
            "animalDescribe": "聪明伶俐，对人友善",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "金毛寻回犬",
                "type": "dog",
                "size": "大型犬"
            }
        },
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
            "animalName": "喵小喵",
            "animalAge": "2 个月",
            "animalGender": "母",
            "animalDescribe": "性格温顺，爱撒娇",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "布偶猫",
                "type": "cat",
                "size": "喵星人"
            }
        },
        {
            "animalId": 5,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "咪小咪",
            "animalAge": "3 个月",
            "animalGender": "公",
            "animalDescribe": "适应能力强，捕鼠小能手",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "中华田园猫",
                "type": "cat",
                "size": "喵星人"
            }
        },
        {
            "animalId": 6,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "绒小绒",
            "animalAge": "4 个月",
            "animalGender": "母",
            "animalDescribe": "圆润可爱，毛发柔软",
            "animalOwner": "测试号 1",
            "animalType": {
                "breed": "英国短毛猫",
                "type": "cat",
                "size": "喵星人"
            }
        }
    ];
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [contactName, setContactName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [remark, setRemark] = useState('');

    const handleAnimalSelect = (animal) => {
        setSelectedAnimal(animal);
    };
    const addAnimal = () => {
        // 跳转到添加宠物页面
        navigate('/addAnimal');
    };

    const getFosterPrice = (animalType) => {
        if (!store) return null;
        const size = animalType.size;
        if (animalType.type === 'cat') {
            return store.price['喵星人'];
        }
        return store.price[size];
    };

    const isAnimalAllowed = (animal) => {
        if (!store) return false;
        const animalSize = animal.animalType.size;
        return store.foster_animal_type.includes(animalSize);
    };

    const handleSubmit = () => {
        if (!selectedAnimal) {
            alert('请选择宠物');
            return;
        }
        if (!contactName) {
            alert('请输入联系人姓名');
            return;
        }
        if (!phoneNumber) {
            alert('请输入联系人电话');
            return;
        } else if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
            alert('请输入正确的手机号');
            return;
        }
        if (!selectedDates || selectedDates.length!== 2) {
            alert('请选择寄养时间');
            return;
        }
        if (!isAnimalAllowed(selectedAnimal)) {
            alert('该店铺不接受此类型宠物寄养');
            return;
        }
        const price = getFosterPrice(selectedAnimal.animalType);
        if (!price) {
            alert('无法确定寄养价格');
            return;
        }
        const totalPrice = days * parseInt(price.split('/')[0]);
        const orderObject = {
            animal: selectedAnimal,
            contactName: contactName,
            phoneNumber: phoneNumber,
            reservationDates: selectedDates,
            days: days,
            remark: remark,
            pricePerDay: price,
            totalPrice: totalPrice
        };
        console.log('下单信息:', orderObject);
        // 这里可以添加发送订单信息到服务器的逻辑
    };

    return (
        <>
            <div className="container">
                <div className="animal-select">
                    <span className="animal-select-title">请选择宠物</span>
                    <div className="animal-select-mix">
                        <div className="animal-select-add" onClick={addAnimal}><Plus /></div>
                        <div className="animal-select-content">
                            {animalData.map((item) => (
                                isAnimalAllowed(item)? (
                                    <React.Fragment key={item.animalId}>
                                        <AnimalItem
                                            animal={item}
                                            selectedAnimal={selectedAnimal}
                                            handleAnimalSelect={handleAnimalSelect}
                                        />
                                    </React.Fragment>
                                ) : null
                            ))}
                        </div>
                    </div>
                </div>
                <DateSelection onDaysChange={handleDaysUpdate} />
                <div className="information-filling">
                    <Space direction="vertical" gap={"2.67vw"}>
                        <InputComponent title="联系人" placeholder="请输入宠物主人姓名" valueSetter={setContactName} maxLength="16" />
                        <InputComponent title="手机号" placeholder="请输入宠物主人电话" valueSetter={setPhoneNumber} maxLength="11" />
                        <InputComponent title="添加备注信息" placeholder="请输入备注信息，入籍样式宠物所需用品等" valueSetter={setRemark} inputType="textarea" maxLength="80" />
                    </Space>
                </div>
            </div>
            <div className="resSubmit">
                {days && selectedAnimal && store && getFosterPrice(selectedAnimal.animalType)? (
                    <SubmitBar
                        textAlign="left"
                        price={days * parseInt(getFosterPrice(selectedAnimal.animalType).split('/')[0]) * 100}
                        buttonText="立即下单"
                        label={" "}
                        buttonColor="#FCCB30"
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <SubmitBar
                        textAlign="left"
                        price={0}
                        buttonText="立即下单"
                        label={" "}
                        buttonColor="#FCCB30"
                        onSubmit={handleSubmit}
                    />
                )}
            </div>
        </>
    );
};

export default fosterReservation;