import { useParams , useNavigate } from 'react-router-dom';
import { Space, ActionBar } from 'react-vant';
import { ChatO, PhoneO } from '@react-vant/icons'
import FosterDataShow from '@/components/fosterDataShow';
import "@/scss/StoreDetails.scss"

const StoreDetails = () => {
    const { storeId } = useParams();
    const navigate = useNavigate();
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
    const store = data.find((item) => item.id === storeId);
    return (
        <>
            <div className='store-details'>
                <img src={store.img} alt="store" className="store-img" />
                <div className='store-details-info '>
                    <Space direction="vertical" gap='1.33vw'>
                        <div className="store-details-item container border-round">
                            <FosterDataShow data={store} imgShow={false} btnShow={false} textType="address" />
                            <div className='store-details-info-other'>
                                <div className='store-details-info-other-item'>
                                    <div className='store-details-info-other-item-top'>{store.room_type}</div>
                                    <div className='store-details-info-other-item-bottom'>房间类型</div>
                                </div>
                                <div className='store-details-info-other-item'>
                                    <div className='store-details-info-other-item-top'>{store.area}</div>
                                    <div className='store-details-info-other-item-bottom'>房屋面积</div>
                                </div>
                                <div className='store-details-info-other-item'>
                                    <div className='store-details-info-other-item-top'>2只</div>
                                    <div className='store-details-info-other-item-bottom'>待寄养宠物</div>
                                </div>
                            </div>
                        </div>
                        <div className='store-details-item store-price'>
                            <div className='store-details-title'>寄养价格</div>
                            <div className='store-details-content'>
                                <Space direction="vertical" gap='1.1vw'>
                                    {Object.keys(store.price).map((key) => (
                                        <div className='store-details-content-item' key={key}>
                                            <div className="store-details-content-item-left">{key}</div>
                                            <div className="store-details-content-item-right">￥{store.price[key]}</div>
                                        </div>
                                    ))}
                                </Space>
                            </div>
                        </div>
                        <div className='store-details-item store-price'>
                            <div className='store-details-title'>其他服务</div>
                            <div className='store-details-content'>
                                <Space direction="vertical" gap='1.1vw'>

                                    {Object.keys(store.other_services).map((key) => (
                                        <div className='store-details-content-item' key={key}>
                                            <div className="store-details-content-item-left">{key}</div>
                                            <div className="store-details-content-item-right">￥{store.other_services[key]}</div>
                                        </div>
                                    ))}
                                </Space>
                            </div>
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
                    onClick={() => window.location.href = `tel:${store.phone}`}
                />
                <ActionBar.Button
                    color='#FCCB30'
                    text='立即预约'
                    onClick={() => navigate(`/foster/reservation/${store.id}`)}
                />
            </ActionBar>
        </>
    );
}
export default StoreDetails;