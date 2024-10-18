import Nav from '@/components/navbar';
import './index.scss'
import { Divider, Space } from 'react-vant';
import { useParams } from 'react-router-dom';
const symptomDetails = () => {
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
    const { symptomId } = useParams();
    const currentSymptom = someSymptoms.find(item => item.id === parseInt(symptomId));
    console.log(currentSymptom);
    return (
        <div className='symptomDetails'>
            <div className='symptomDetails-top'>
                <Nav title="疾病简介" showLeftArrow={true} />
            </div>
            <div className="symptomDetails-content">
                <div className='symptomDetails-content-info'>
                    <Space direction='vertical' divider={<Divider />} >
                        <div className="symptomDetails-content-title"><div className='title-chi'>{currentSymptom?.name}</div><div className='title-eng'>{currentSymptom?.englishName}</div></div>
                        <div className='symptomDetails-content-text'>{currentSymptom?.introduction}</div>
                    </Space>
                </div>
            </div>
            <div className='symptomDetails-bottom'>
                <span className='title'>相关文章</span>
            </div>
        </div>
    );
}
export default symptomDetails;