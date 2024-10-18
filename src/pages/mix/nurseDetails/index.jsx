import { useParams , useNavigate } from "react-router-dom";
import Nav from "@/components/navbar";
import { useState } from "react";
import "./index.scss";
import { ShareO, ChatO, PhoneO } from "@react-vant/icons"
import { ShareSheet, Cell, Typography, Space, Rate, Divider, ActionBar } from "react-vant";
import Review from "@/components/review";

const nurseDetails = () => {
    const { nurseId } = useParams();
    const navigate = useNavigate();
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
                {
                    "id": 1,
                    "name": "宠物常见疾病预防方法",
                    "img": "/src/assets/6.jpg"
                },
                {
                    "id": 2,
                    "name": "宠物医疗手册",
                    "img": "/src/assets/6.jpg"
                }
            ],
            "comments": [
                {
                    "commenter": "张三",
                    "score": 5,
                    "img": ["/src/assets/矩形.png", "/src/assets/矩形备份 2.png", "/src/assets/矩形备份.png"],
                    "commenterAvatar": "/src/assets/矩形备份 2.png",
                    "publishDate": "2024-10-01",
                    "commentText": "朱医生医术高超，对宠物非常负责。"
                },
                {
                    "commenter": "李四",
                    "score": 4,
                    "img": [],
                    "commenterAvatar": "/src/assets/avatar2.jpg",
                    "publishDate": "2024-10-05",
                    "commentText": "我的宠物在朱医生这里得到了很好的治疗。"
                }
            ],
            "merchant": {
                "merchantId": 101,
                "merchantName": "萌宠乐园美容店",
                "address": "北京市朝阳区萌宠街 12 号",
                "rating": 4.2,
                "imgUrl": "/src/assets/矩形.png"
            },
            "phoneNumber": "1234567890"
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
                {
                    "id": 1,
                    "name": "研发了一种新的宠物伤口护理方法",
                    "img": "/src/assets/6.jpg"
                },
                {
                    "id": 2,
                    "name": "主导了医院的多个重要医疗项目",
                    "img": "/src/assets/6.jpg"
                }
            ],
            "comments": [
                {
                    "commenter": "王五",
                    "score": 4,
                    "img": ["/src/assets/commentImg1.jpg"],
                    "commenterAvatar": "/src/assets/avatar3.jpg",
                    "publishDate": "2024-09-15",
                    "commentText": "高医生很专业，给了很多有用的建议。"
                },
                {
                    "commenter": "赵六",
                    "score": 5,
                    "img": [],
                    "commenterAvatar": "/src/assets/avatar4.jpg",
                    "publishDate": "2024-09-20",
                    "commentText": "感谢高医生救了我家宝贝的命。"
                }
            ],
            "merchant": {
                "merchantId": 102,
                "merchantName": "宠物时尚馆",
                "address": "上海市黄浦区时尚大道 55 号",
                "rating": 4.5,
                "imgUrl": "/src/assets/矩形.png"
            },
            "phoneNumber": "9876543210"
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
                {
                    "id": 1,
                    "name": "在医学杂志上发表过关于宠物营养的文章",
                    "img": "/src/assets/6.jpg"
                }
            ],
            "comments": [
                {
                    "commenter": "孙七",
                    "score": 3,
                    "img": [],
                    "commenterAvatar": "/src/assets/avatar5.jpg",
                    "publishDate": "2024-08-22",
                    "commentText": "朱医生讲解很详细，对宠物主人很负责。"
                }
            ],
            "merchant": {
                "merchantId": 103,
                "merchantName": "喵星人美容屋",
                "address": "广州市天河区喵星路 66 号",
                "rating": 4.3,
                "imgUrl": "/src/assets/矩形.png"
            },
            "phoneNumber": "5555555555"
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
                {
                    "id": 1,
                    "name": "建立了一套宠物康复训练流程",
                    "img": "/src/assets/6.jpg"
                }
            ],
            "comments": [
                {
                    "commenter": "周八",
                    "score": 4,
                    "img": [],
                    "commenterAvatar": "/src/assets/avatar6.jpg",
                    "publishDate": "2024-10-10",
                    "commentText": "王医生很贴心，宠物恢复得很快。"
                }
            ],
            "merchant": {
                "merchantId": 104,
                "merchantName": "宠物贵族会所",
                "address": "深圳市福田区贵族街 88 号",
                "rating": 4.6,
                "imgUrl": "/src/assets/矩形.png"
            },
            "phoneNumber": "4444444444"
        }
    ];
    const [shareShow, setShareShow] = useState(false)

    const nurse = data.find(item => item.id === parseInt(nurseId));
    const StoreShare = () => {
        setShareShow(true)
    }
    const options = [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
    ]
    const rightActionBtn = (<div className="right-action-btn"><button onClick={StoreShare}><ShareO /></button></div>)

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            console.log('链接已复制到剪贴板');
        } catch (err) {
            console.error('复制链接失败:', err);
        }
    };

    return (
        <div className="nurseDetails">
            <Nav showLeftArrow={true} title="医生详情" rightText={rightActionBtn} />
            <div className="nurseDetails-content">
                <div className="nurseDetails-content-top">
                    <div className="nurseDetails-content-topDiv">
                        <img src={nurse.imgUrl} alt="" />

                        <span className="nurseDetails-content-topNurseName">{nurse.name}</span>
                        <div className="nurseDetails-content-topInfo">
                            <span>{nurse.office}</span>
                            <span>/从业{nurse.workYear}年</span>
                        </div>
                    </div>
                </div>
                <div className="nurseDetails-content-center">
                    <div className="nurseDetails-content-centerDiv">
                        <span className="nurseDetails-content-centerTitle">老师简介</span>
                        <div className="nurseDetails-content-centerInfo">
                            {nurse.introduction}
                        </div>
                    </div>
                </div>
                <div className="nurseDetails-content-bottom">
                    <Space direction="vertical" divider={<div className="nurseDetails-content-bottomDivider"></div>}>
                        <div className="nurseDetails-content-bottomDiv">
                            <Cell isLink title="作品" value="查看全部" />
                            <div className="nurseDetails-content-bottomInfo">
                                {nurse.works.map((item, index) => (
                                    <div className="nurseDetails-content-bottomInfoDiv" key={index}>
                                        <img src={item.img} alt="" />
                                        <span><Typography ellipsis>{item.name}</Typography></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="nurseDetails-content-bottomDiv2">
                            <span className="title">所在商户</span>
                            <div className="nurseDetails-content-bottomDiv2-Info">
                                <img src={nurse.merchant.imgUrl} alt="" />
                                <div className="nurseDetails-content-bottomDiv2-InfoDiv">
                                    <span className="name">{nurse.merchant.merchantName}</span>
                                    <Rate allowHalf value={nurse.merchant.rating} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' />
                                    <span className="address">{nurse.merchant.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="nurseDetails-content-bottomDiv3">
                            <Cell isLink title="热门评论" value="查看全部" />
                            <Space direction="vertical" divider={<Divider />}>
                                {nurse.comments.map((item, index) => (

                                    <Review data={item} key={index} />
                                ))}
                            </Space>
                        </div>
                    </Space>
                </div>
            </div>
            <ActionBar>
                <ActionBar.Icon
                    icon={<ChatO />}
                    text='咨询'
                    onClick={() => console.log('chat click')}
                />
                <ActionBar.Icon
                    icon={<PhoneO />}
                    text='电话'
                    onClick={() => window.location.href = `tel:${nurse.phoneNumber}`}
                />
                <ActionBar.Button
                    color='#FCCB30'
                    text='立即预约'
                    onClick={() => navigate(`/foster/reservation/${nurse.merchant.merchantId}`)}
                />
            </ActionBar>
            <ShareSheet
                overlay={true}
                visible={shareShow}
                options={options}
                title='分享到'
                cancelText=''
                onCancel={() => setShareShow(false)}
                onSelect={(option, index) => {
                    copyLink()
                    console.log('option', option)
                    console.log('index', index)
                    setShareShow(false)
                }}
            />
        </div>
    );
}
export default nurseDetails;