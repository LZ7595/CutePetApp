import { useBeautyStore } from "@/store/beautyStore"
import './index.scss'
const selectNurse = () => {
    const data = [
        {
            "id": 1,
            "imgUrl": "/src/assets/7.jpg",
            "name": "朱小亮",
            "office": "专家医师/经理",
            "workYear": 3,
            "praiseCount": 20,
            "introduction": "朱小亮医师毕业于知名医学院，擅长各类宠物常见疾病的诊断与治疗，在宠物医疗领域有着丰富的经验。",
            "works": [
                "发表过《宠物常见疾病预防方法》论文",
                "参与编写《宠物医疗手册》"
            ],
            "comments": [
                "医术精湛，对宠物很有耐心。",
                "我的宠物在朱医生这里得到了很好的治疗。"
            ]
        },
        {
            "id": 2,
            "imgUrl": "/src/assets/2.jpg",
            "name": "高小峰",
            "office": "主治医师/院长",
            "workYear": 5,
            "praiseCount": 30,
            "introduction": "高小峰医生从事宠物医疗多年，拥有卓越的手术技能，曾成功完成多例高难度宠物手术。",
            "works": [
                "研发了一种新的宠物伤口护理方法",
                "主导了医院的多个重要医疗项目"
            ],
            "comments": [
                "院长很专业，给了很多有用的建议。",
                "感谢高医生救了我家宝贝的命。"
            ]
        },
        {
            "id": 3,
            "imgUrl": "/src/assets/4.jpg",
            "name": "朱小小",
            "office": "高级医师",
            "workYear": 2,
            "praiseCount": 15,
            "introduction": "朱小小医师专注于宠物内科疾病，对宠物的生理结构有深入研究。",
            "works": [
                "在医学杂志上发表过关于宠物营养的文章"
            ],
            "comments": [
                "朱医生讲解很详细，对宠物主人很负责。",
                "找朱小小医生看病很放心。"
            ]
        },
        {
            "id": 4,
            "imgUrl": "/src/assets/8.jpg",
            "name": "王小样",
            "office": "高级医师",
            "workYear": 4,
            "praiseCount": 25,
            "introduction": "王小样医生在宠物康复治疗方面经验丰富，帮助众多宠物恢复健康。",
            "works": [
                "建立了一套宠物康复训练流程"
            ],
            "comments": [
                "王医生很贴心，宠物恢复得很快。",
                "专业又有爱心的医生。"
            ]
        }
    ];
    const { selectedNurse,setSelectedNurse } = useBeautyStore();
    const handleClick = (nurse) => {
        if (selectedNurse && selectedNurse.name === nurse.name) {
            setSelectedNurse({});
        } else {
            setSelectedNurse(nurse);
        }
    };
    const isHighlighted = (item) => {
        return selectedNurse && selectedNurse.name === item.name;
    };

    return (
        <div className="selectNurse-items">
            {data.map((item, index) => (
                <div key={index} className={`selectNurse-item ${isHighlighted(item)? 'highlighted' : ''}`} onClick={() => handleClick(item)}>
                    <img src={item.imgUrl} alt="" />
                    <div className="selectNurse-item-info">
                        <div className="selectNurse-item-info-name">{item.name}</div>
                        <div className="selectNurse-item-info-office">{item.office}</div>
                        <div className="selectNurse-item-info-praiseCount">好评 {item.praiseCount}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default selectNurse;