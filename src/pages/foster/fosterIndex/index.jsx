import { Swiper , Space , Divider } from 'react-vant'
import Nav from '@/components/navbar'
import DataShow from '@/components/dataShow'

const fosterIndex = () => {
    const img = ['/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg']
    const items = img.map((imgUrl, index) => (
        <Swiper.Item key={index}>
            <img src={imgUrl} alt={index} />
        </Swiper.Item>))
        const dataShowItems = Array(5).fill(null).map((_, i) => <DataShow key={i} />);
    return (
        <div>
            <div className="banner">
                <Swiper autoplay={5000}>{items}</Swiper>
            </div>
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