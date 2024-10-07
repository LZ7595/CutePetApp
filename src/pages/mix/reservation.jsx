import { useNavigate } from "react-router-dom";
import { Plus } from "@react-vant/icons";
import { Cell, Popup, Space, Divider, SubmitBar } from "react-vant";
import { useState } from "react";
import DateSelect from "@/components/dateSelect";
import "@/scss/reservation.scss";

const reservation = ({ serviceType }) => {
    const navigate = useNavigate();
    const reservationType = serviceType === 'foster' ? true : false;
    const [showDateSelect, setShowDateSelect] = useState(false);
    const [selectedDates, setSelectedDates] = useState('');
    const [days, setDays] = useState(null);
    const animalData = [
        {
            "animalId": 1,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "赖小赖",
            "animalType": "伯恩山犬",
            "animalAge": "1个月",
            "animalGender": "公",
            "animalDescribe": "非常可爱，喜欢玩球",
            "animalOwner": "测试号1"
        },
        {
            "animalId": 2,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "旺小旺",
            "animalType": "金毛寻回犬",
            "animalAge": "2个月",
            "animalGender": "公",
            "animalDescribe": "聪明伶俐，对人友善",
            "animalOwner": "测试号1"
        },
        {
            "animalId": 3,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "豆小逗",
            "animalType": "博美犬",
            "animalAge": "3个月",
            "animalGender": "母",
            "animalDescribe": "体型小巧，活泼好动",
            "animalOwner": "测试号1"
        },
        {
            "animalId": 4,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "喵小喵",
            "animalType": "布偶猫",
            "animalAge": "2个月",
            "animalGender": "母",
            "animalDescribe": "性格温顺，爱撒娇",
            "animalOwner": "测试号1"
        },
        {
            "animalId": 5,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "咪小咪",
            "animalType": "中华田园猫",
            "animalAge": "3个月",
            "animalGender": "公",
            "animalDescribe": "适应能力强，捕鼠小能手",
            "animalOwner": "测试号1"
        },
        {
            "animalId": 6,
            "animalImg": "/src/assets/椭圆形.jpg",
            "animalName": "绒小绒",
            "animalType": "英国短毛猫",
            "animalAge": "4个月",
            "animalGender": "母",
            "animalDescribe": "圆润可爱，毛发柔软",
            "animalOwner": "测试号1"
        }
    ];
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleAnimalSelect = (animal) => {
        setSelectedAnimal(animal);
    };
    const addAnimal = () => {
        // 跳转到添加宠物页面
        navigate('/addAnimal')
    }
    const handleDatesSelected = (dates) => {
        setSelectedDates(dates);
        const start = new Date(dates[0]);
        const end = new Date(dates[1]);
        const oneDay = 24 * 60 * 60 * 1000;
        setDays(Math.round((end - start) / oneDay) + 1)
    };


    return (
        <>
            <div className="container">
                <div className="animal-select">
                    <span className="animal-select-title">请选择宠物</span>
                    <div className="animal-select-mix">
                        <div className="animal-select-add" onClick={addAnimal}><Plus /></div>
                        <div className="animal-select-content">
                            {animalData.map((item) => {
                                return (
                                    <div
                                        className="animal-select-content-item"
                                        key={item.animalId}
                                        onClick={() => handleAnimalSelect(item)}
                                        style={selectedAnimal && selectedAnimal.animalId === item.animalId ? { border: '1px solid #FCCB30' } : {}}
                                    >
                                        <img src={item.animalImg} alt="" />
                                        <div className="animal-select-content-item-info">
                                            <div className="animal-select-content-item-info-name">{item.animalName}</div>
                                            <div className="animal-select-content-item-info-type">{item.animalType}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="data-select">
                    <Cell
                        isLink
                        title='请选择寄养时间'
                        titleStyle={{ flex: 'none' }}
                        value={
                            days ? <div style={{ color: '#FCCB30' }}>共{days}天</div> : ''
                        }
                        onClick={() => setShowDateSelect(true)}
                    />
                    <div className="data-select-view">

                        {selectedDates.length == 2 ? (
                            <Space divider={<Divider type="vertical" />} gap={"5.87vw"}>
                                <div className="data-select-view-item">
                                    <div className="data-select-view-item-date">{selectedDates[0]}</div>
                                    <div className="data-select-view-item-time">9:00后入住</div>
                                </div>
                                <div className="data-select-view-item">
                                    <div className="data-select-view-item-date">{selectedDates[1]}</div>
                                    <div className="data-select-view-item-time">18:00前结束</div>
                                </div>
                            </Space>

                        ) : <div className="selectNull">请选择寄养时间</div>}

                    </div>
                </div>
                <div className="information-filling">
                    <Space direction="vertical" gap={"2.67vw"}>
                        <div className="information-filling-item">
                            <span className="information-filling-title">联系人</span>
                            <input className="information-filling-input" placeholder="请输入宠物主人姓名" />
                        </div>
                        <div className="information-filling-item">
                            <span className="information-filling-title">手机号</span>
                            <input className="information-filling-input" placeholder="请输入宠物主人电话" />
                        </div>
                        <div className="information-filling-item">
                            <span className="information-filling-title">添加备注信息</span>
                            <textarea className="information-filling-input-big" placeholder="请输入备注信息，入籍样式宠物所需用品等" />
                        </div>
                    </Space>
                </div>
            </div>
            <div className="resSubmit">
                <SubmitBar textAlign="left" price={days * 100} buttonText="立即下单" label={" "} buttonColor="#FCCB30" />
            </div>
            <Popup
                visible={showDateSelect}
                style={{ width: '100%', height: '100%' }}
                description={<DateSelect setShowDateSelect={setShowDateSelect} onDatesSelected={handleDatesSelected} />}
                position='right'
            />
        </>
    );
};

export default reservation;
