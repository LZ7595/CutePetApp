import Banner from "@/components/banner";
import { Space, Divider } from "react-vant";
import { Arrow } from "@react-vant/icons";
import FosterDataShow from "@/components/fosterDataShow";
import { useNavigate } from "react-router-dom";
import './index.scss'

const medicalIndex = () => {
    const navigate = useNavigate();
    const img = ["/src/assets/cd.png", "/src/assets/cd.png", "/src/assets/cd.png", "/src/assets/cd.png"]
    const someSymptoms = [
        {
            id: 1,
            name: "犬细小",
            imgUrl: "/src/assets/犬细小.png",
            englishName: "Canine Parvovirus",
            introduction: "犬细小是一种由犬细小病毒引起的高度接触性传染病，以急性出血性肠炎和心肌炎为特征。"
        },
        {
            id: 2,
            name: "猫传腹",
            imgUrl: "/src/assets/猫传腹.png",
            englishName: "Feline Infectious Peritonitis",
            introduction: "猫传染性腹膜炎是一种由猫冠状病毒变异引起的致命性疾病，主要表现为腹水、胸水、黄疸等症状。"
        },
        {
            id: 3,
            name: "莱姆症",
            imgUrl: "/src/assets/莱姆症.png",
            englishName: "Lyme disease",
            introduction: "莱姆病是一种由伯氏疏螺旋体引起的以蜱为传播媒介的自然疫源性疾病，可引起皮肤、心脏、神经等多系统损害。"
        },
        {
            id: 4,
            name: "关节脱位",
            imgUrl: "/src/assets/关节脱位.png",
            englishName: "Joint dislocation",
            introduction: "关节脱位是指关节面失去正常的对合关系，多由外力作用引起，可导致疼痛、肿胀、活动受限等症状。"
        },
        {
            id: 5,
            name: "角膜溃疡",
            imgUrl: "/src/assets/角膜溃疡.png",
            englishName: "Corneal ulcer",
            introduction: "角膜溃疡是一种常见的眼科疾病，通常由感染、外伤、营养不良等因素引起，可导致视力下降、疼痛、畏光等症状。"
        }
    ];
    const medicalFunction = [{ title: "快速问诊", color: "#E6F4FF", imgUrl: "/src/assets/闪电.png", content: "实时在线 60秒接诊" }, { title: "症状自查", color: "#E4F7F1", imgUrl: "/src/assets/搜索.png", content: "症状自查 实时搜索" }]
    const data = [{
        id: '1',
        storeName: '淘气联盟宠物店',
        rating: 3.5,
        address: '丰台长丰园和顺家园底商B23 - 89',
        distance: 3.55,
        img: '/src/assets/6.jpg',
        room_type: '单间',
        area: '20平方米',
        foster_animal_type: ['小型犬', '中型犬', '大型犬', '喵星人'],
        price: {
            '小型犬': '20元/天',
            '中型犬': '30元/天',
            '大型犬': '50元/天',
            '喵星人': '25元/天'
        },
        phone: '13812345678',
        other_services: {
            '宠物洗澡': '30元/次',
            '宠物美容': '80元/次',
            '宠物医疗咨询': '50元/30分钟'
        }
    },
    {
        id: '2',
        storeName: '淘气联盟宠物店',
        rating: 3.5,
        address: '丰台长丰园和顺家园底商B23 - 89',
        distance: 3.55,
        img: '/src/assets/6.jpg',
        room_type: '套间',
        area: '30平方米',
        foster_animal_type: ['小型犬', '中型犬', '大型犬', '喵星人'],
        price: {
            '小型犬': '25元/天',
            '中型犬': '35元/天',
            '大型犬': '60元/天',
            '喵星人': '30元/天'
        },
        phone: '13987654321',
        other_services: {
            '宠物洗澡': '35元/次',
            '宠物美容': '90元/次',
            '宠物寄养期间的视频监控': '10元/天'
        }
    },
    {
        id: '3',
        storeName: '淘气联盟宠物店',
        rating: 3.5,
        address: '丰台长丰园和顺家园底商B23 - 89',
        distance: 3.55,
        img: '/src/assets/6.jpg',
        room_type: '大通铺',
        area: '40平方米',
        foster_animal_type: ['小型犬', '中型犬', '大型犬'],
        price: {
            '小型犬': '18元/天',
            '中型犬': '28元/天',
            '大型犬': '45元/天'
        },
        phone: '13612345678',
        other_services: {
            '宠物训练课程': '200元/5课时',
            '宠物医疗咨询': '60元/30分钟'
        }
    },
    {
        id: '4',
        storeName: '淘气联盟宠物店',
        rating: 3.5,
        address: '丰台长丰园和顺家园底商B23 - 89',
        distance: 3.55,
        img: '/src/assets/6.jpg',
        room_type: '双层笼舍',
        area: '15平方米',
        foster_animal_type: ['喵星人'],
        price: {
            '喵星人': '30元/天'
        },
        phone: '13387654321',
        other_services: {
            '宠物寄养期间的视频监控': '15元/天',
            '宠物医疗咨询': '40元/30分钟'
        }
    },
    {
        id: '5',
        storeName: '淘气联盟宠物店',
        rating: 3.5,
        address: '丰台长丰园和顺家园底商B23 - 89',
        distance: 3.55,
        img: '/src/assets/6.jpg',
        room_type: '独立小院',
        area: '50平方米',
        foster_animal_type: ['大型犬'],
        price: {
            '大型犬': '70元/天'
        },
        phone: '13112345678',
        other_services: {
            '户外遛狗服务': '20元/次',
            '宠物医疗咨询': '70元/30分钟'
        }
    }]
    const dataShowItems = data.map((item, i) => <FosterDataShow key={i} data={item} btnShow={false} />);
    return (
        <div className="medicalIndex">
            <Banner img={img} />
            <div className="some-symptoms">
                {
                    someSymptoms.map((item, index) => {
                        return (
                            <div className="some-symptoms-item" key={index} onClick={()=>navigate(`/medical/symptom/${item.id}`)}>
                                <img src={item.imgUrl} alt="" />
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="medical-function">
                {
                    medicalFunction.map((item, index) => {
                        return (
                            <div className="medical-function-item" key={index} style={{ backgroundColor: item.color }}>
                                <div className="medical-function-item-info">
                                    <p>{item.title} <Arrow /></p>
                                    <span>{item.content}</span>
                                </div>
                                <img src={item.imgUrl} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="medical-hospitals">
                <div className="medical-hospitals-title">
                    <p>周边医院</p>
                </div>
                <div className="medical-hospitals-content">
                    <Space direction="vertical" gap='0.27vw' divider={<Divider />}>
                        {dataShowItems}
                    </Space>
                </div>
            </div>
        </div>
    );
}
export default medicalIndex;