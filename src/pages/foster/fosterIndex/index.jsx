import { Space, Divider } from 'react-vant'
import Nav from '@/components/navbar'
import FosterDataShow from '@/components/fosterDataShow'
import Banner from '@/components/banner'

const fosterIndex = () => {
    const img = ['/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg']
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
    const dataShowItems = data.map((item, i) => <FosterDataShow key={i} data={item} />);
    return (
        <div className="container">
            <Banner img={img} />
            <div className="content">
                <Nav leftText="推荐门店" />
                <Space direction="vertical" gap='0.27vw' divider={<Divider />}>
                    {dataShowItems}
                </Space>
            </div>
        </div>
    );
}
export default fosterIndex;