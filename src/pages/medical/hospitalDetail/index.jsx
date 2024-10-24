import './index.scss'
import Nav from '@/components/navbar';
import Review from '@/components/review';
import { useParams, useNavigate } from 'react-router-dom';
import FosterDataShow from "@/components/fosterDataShow";
import { Rate, Space, Typography, Divider, Cell } from "react-vant"
import { GuideO, PhoneO } from "@react-vant/icons"
import NurseInfo from '../../../components/nurseInfo';


const hospitalDetail = () => {
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
                    img: ["/src/assets/矩形.png","/src/assets/矩形.png","/src/assets/矩形.png"],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-10',
                    commentText: '这家医院的医生很专业，服务也很周到。'
                },
                {
                    commenter: '周八',
                    score: 4,
                    img: ["/src/assets/矩形.png","/src/assets/矩形.png"],
                    commenterAvatar: '/src/assets/avatar6.jpg',
                    publishDate: '2024-10-10',
                    commentText: '这家医院的医生很专业，服务也很周到。'
                },
                {
                    commenter: '周八',
                    score: 4,
                    img: ["/src/assets/矩形.png","/src/assets/矩形.png","/src/assets/矩形.png","/src/assets/矩形.png"],
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
    const { hospitalId } = useParams();
    const hospitaltext = data.find(item => item.id === hospitalId);
    return (
        <div className='hospitalDetail'>
            <div className="hospitalDetail-top">
                <Nav title="医院详情" showLeftArrow={true} clickLeft />
            </div>
            <div className="hospitalDetail-content">
                <div className='hospitalDetail-content-info'>
                    <FosterDataShow data={hospitaltext} btnShow={false} description={<div className='hospitalDetail-content-info-description'><div>排名</div><Rate allowHalf value={hospitaltext.rating} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' /></div>} />
                    <div className='hospitalDetail-content-info-detail'>
                        <div className='hospitalDetail-content-info-detail-workTime'>营业时间：{hospitaltext.businessHours}</div>
                        <div className='hospitalDetail-content-info-detail-hospitalOverview'>医院概况：<Typography ellipsis={3}>{hospitaltext.hospitalOverview}</Typography></div>
                    </div>
                    <div className='hospitalDetail-content-info-order'>
                        <div className='hospitalDetail-content-info-order-left'>
                            <div className='order-distance'>距您{hospitaltext.distance}km</div>
                            <div className='order-address'>{hospitaltext.address}</div>
                        </div>
                        <div className='hospitalDetail-content-info-order-right'>
                            <Space gap={'1.33vw'} divider={<Divider type='vertical' />}>
                                <div className='icon-btn'><GuideO /><span>导航</span></div>
                                <div className='icon-btn'><PhoneO /><span>致电</span></div>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hospitalDetail-doctor'>
                <Cell title="认证医师"  />
                <div className='hospitalDetail-doctor-list'><NurseInfo/></div>
            </div>
            <div className='hospitalDetail-comment'>
                    <Cell isLink title="热门评论" value="查看全部" />
                    <Space direction="vertical" divider={<Divider />}>
                        {hospitaltext.comments.map((item, index) => (
                            <Review data={item} key={index} />
                        ))}
                    </Space>
            </div>
        </div>
    )
}
export default hospitalDetail;