import Nav from '@/components/navbar';
import './index.scss'
import { Divider, Space, Typography } from 'react-vant';
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
    const relatedArticles = [
        {
            id: 1,
            title: '幼犬为什么容易感染犬瘟热和细小病毒？',
            imgUrl: '/src/assets/矩形备份.png',
            content: '幼犬由于免疫系统尚未发育完全，所以更容易感染犬瘟热和细小病毒。此外，不良的生活环境、未及时接种疫苗等因素也会增加幼犬患病的风险。',
            author: {
                authorId: 101,
                authorName: '张三',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 50
        },
        {
            id: 2,
            title: '了解幼犬常见疾病',
            imgUrl: '/src/assets/矩形备份.png',
            content: '本文探讨了幼犬经常遇到的常见疾病及其背后的原因。包括寄生虫感染、消化系统问题等。',
            author: {
                authorId: 102,
                authorName: '李四',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 35
        },
        {
            id: 3,
            title: '预防幼犬疾病的方法和策略',
            imgUrl: '/src/assets/矩形备份.png',
            content: '了解如何采取预防措施，让你的幼犬保持健康，远离疾病。如定期驱虫、合理饮食、及时接种疫苗等。',
            author: {
                authorId: 103,
                authorName: '王五',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 42
        },
        {
            id: 4,
            title: '如何照顾新生幼犬？',
            imgUrl: '/src/assets/矩形备份.png',
            content: '新生幼犬需要特别的照顾，包括保持温暖、适时喂食、关注健康状况等。本文详细介绍了照顾新生幼犬的方法和注意事项。',
            author: {
                authorId: 104,
                authorName: '赵六',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 38
        },
        {
            id: 5,
            title: '幼犬的营养需求与饮食选择',
            imgUrl: '/src/assets/矩形备份.png',
            content: '了解幼犬的营养需求对于它们的健康成长至关重要。本文讨论了幼犬的饮食选择，包括合适的狗粮、自制食物的注意事项等。',
            author: {
                authorId: 105,
                authorName: '孙七',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 45
        },
        {
            id: 6,
            title: '幼犬训练的关键时期与方法',
            imgUrl: '/src/assets/矩形备份.png',
            content: '幼犬时期是进行训练的关键时期。本文介绍了有效的幼犬训练方法，如定点排便训练、基本指令训练等。',
            author: {
                authorId: 106,
                authorName: '周八',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 40
        },
        {
            id: 7,
            title: '常见的幼犬行为问题及解决办法',
            imgUrl: '/src/assets/矩形备份.png',
            content: '幼犬可能会出现一些行为问题，如咬东西、过度兴奋等。本文提供了解决这些问题的方法和建议。',
            author: {
                authorId: 107,
                authorName: '吴九',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 36
        },
        {
            id: 8,
            title: '带幼犬去看兽医的重要性',
            imgUrl: '/src/assets/矩形备份.png',
            content: '定期带幼犬去看兽医可以及时发现潜在的健康问题，并采取相应的治疗措施。本文强调了带幼犬看兽医的重要性和注意事项。',
            author: {
                authorId: 108,
                authorName: '郑十',
                authorAvatar: '/src/assets/椭圆形-6.jpg'
            },
            likeCount: 41
        }
    ];
    const { symptomId } = useParams();
    const currentSymptom = someSymptoms.find(item => item.id === parseInt(symptomId));
    console.log(currentSymptom);
    return (
        <div className='symptomDetails'>
            <div className='symptomDetails-top'>
                <Nav title="疾病简介" showLeftArrow={true} clickLeft />
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
                <div className="relatedArticles">
                    <Space direction='vertical' gap="0.27vw" divider={<Divider />} >
                        {relatedArticles.splice(0, 4).map(item => {
                            return (
                                <div className="relatedArticles-item" key={item.id}>
                                    <img src={item.imgUrl} alt="" className='relatedArticles-item-img' />
                                    <div className="relatedArticles-item-info">
                                        <div className="relatedArticles-item-info-title"><Typography ellipsis={2}>{item.title}</Typography></div>
                                        <div className="relatedArticles-item-info-order">
                                            <div className="relatedArticles-item-info-order-author">
                                                <img src={item.author.authorAvatar} alt="" className='relatedArticles-item-info-order-author-img' />
                                                <span>{item.author.authorName}</span>
                                            </div>
                                            <div className="relatedArticles-item-info-order-like">
                                                {item.likeCount}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Space>
                </div>
            </div>
        </div>
    );
}
export default symptomDetails;