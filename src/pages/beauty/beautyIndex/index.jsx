import { Space, Divider } from 'react-vant'
import Nav from '@/components/navbar'
import Banner from '@/components/banner'
import ProductDataShow from '@/components/productDataShow'

const fosterIndex = () => {
    const img = ['/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg', '/src/assets/img.jpg']
    const data = [
        {
            "product_id": 1,
            "product_name": "宠物基础美容套餐",
            "description": "基础护理，让宠物焕然一新。",
            "original_price": 150,
            "discounted_price": 120,
            "image_url": "/src/assets/6.jpg",
            "is_active": true,
            "merchant_name": "萌宠乐园美容店",
            "rating": 4.2
        },
        {
            "product_id": 2,
            "product_name": "宠物精致美容套餐",
            "description": "全方位精致呵护，宠物更可爱。",
            "original_price": 300,
            "discounted_price": 240,
            "image_url": "/src/assets/6.jpg",
            "is_active": true,
            "merchant_name": "宠物时尚馆",
            "rating": 4.5
        },
        {
            "product_id": 3,
            "product_name": "猫咪专属美容服务",
            "description": "专为猫咪设计的美容方案。",
            "original_price": 120,
            "discounted_price": 90,
            "image_url": "/src/assets/6.jpg",
            "is_active": true,
            "merchant_name": "喵星人美容屋",
            "rating": 4.3
        },
        {
            "product_id": 4,
            "product_name": "宠物高级 SPA 套餐",
            "description": "奢华 SPA，宠物享受极致放松。",
            "original_price": 500,
            "discounted_price": 400,
            "image_url": "/src/assets/6.jpg",
            "is_active": true,
            "merchant_name": "宠物贵族会所",
            "rating": 4.6
        },
        {
            "product_id": 5,
            "product_name": "宠物创意造型服务",
            "description": "独特造型，让宠物与众不同。",
            "original_price": 200,
            "discounted_price": 160,
            "image_url": "/src/assets/6.jpg",
            "is_active": true,
            "merchant_name": "宠物创意工坊",
            "rating": 4.4
        }
    ]
    const dataShowItems = data.map((item, i) => <ProductDataShow key={i} data={item} />);

    return (
        <div className="container">
            <Banner img={img} />
            <div className="content">
                <Nav leftText="美容服务" />
                <Space direction="vertical" gap='0.27vw' divider={<Divider />}>
                    {dataShowItems}
                </Space>
            </div>
        </div>
    );
}
export default fosterIndex;