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
    const data = [
        {
            id: '1',
            storeName: '爱心宠物医院',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            phone: '13812345678',
            businessHours: '周一至周五：9:00 - 18:00；周六至周日：10:00 - 17:00',
            hospitalOverview: '爱心宠物医院拥有专业的医疗团队和先进的设备，致力于为宠物提供优质的医疗服务。',
            comments: [
                {
                    commenter: '周八',
                    score: 4,
                    img: [],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-10',
                    commentText: '这家医院的医生很专业，服务也很周到。'
                }
            ]
        },
        {
            id: '2',
            storeName: '温馨宠物医院',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            phone: '13987654321',
            businessHours: '周一至周六：8:30 - 17:30；周日：9:00 - 16:00',
            hospitalOverview: '温馨宠物医院环境整洁，医生经验丰富，对宠物充满爱心。',
            comments: [
                {
                    commenter: '张三',
                    score: 3,
                    img: [],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-11',
                    commentText: '医院的设施很齐全，医生也很耐心。'
                }
            ]
        },
        {
            id: '3',
            storeName: '友好宠物医院',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            phone: '13612345678',
            businessHours: '周一至周日：9:00 - 18:00',
            hospitalOverview: '友好宠物医院以优质的服务和合理的价格赢得了众多宠物主人的信赖。',
            comments: [
                {
                    commenter: '李四',
                    score: 4,
                    img: [],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-12',
                    commentText: '在这里给宠物看病很放心，医生很负责。'
                }
            ]
        },
        {
            id: '4',
            storeName: '关爱宠物医院',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            phone: '13387654321',
            businessHours: '周一至周五：8:00 - 17:00；周六至周日：9:00 - 16:00',
            hospitalOverview: '关爱宠物医院注重医疗质量，为宠物的健康保驾护航。',
            comments: [
                {
                    commenter: '王五',
                    score: 3.5,
                    img: [],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-13',
                    commentText: '医院的环境不错，医生也很专业。'
                }
            ]
        },
        {
            id: '5',
            storeName: '贴心宠物医院',
            rating: 3.5,
            address: '丰台长丰园和顺家园底商 B23 - 89',
            distance: 3.55,
            img: '/src/assets/6.jpg',
            phone: '13112345678',
            businessHours: '周一至周日：9:00 - 17:00',
            hospitalOverview: '贴心宠物医院以贴心的服务和精湛的医术受到宠物主人的好评。',
            comments: [
                {
                    commenter: '赵六',
                    score: 4.5,
                    img: [],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-14',
                    commentText: '这家医院真的很不错，医生很有爱心。'
                }
            ]
        }
    ];
    const dataShowItems = data.map((item, i) => <FosterDataShow key={i} data={item} btnShow={false} onClick={() => navigate(`/medical/hospitalDetail/${item.id}`)} />);
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