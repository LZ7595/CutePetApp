import { useNavigate } from "react-router-dom"
import { ShopO } from '@react-vant/icons';
import { Typography } from 'react-vant';
import './index.scss'

const productDataShow = ({ data, showType = "LinkShow" }) => {
    const navigate = useNavigate()
    return (
        <div className="productDataShow-item">
            <img src={data.image_url} alt="" />
            <div className="item-text">
                <div className="item-title">
                    {data.product_name}
                    {showType==="LinkShow" && data.discounted_price !== null && data.discounted_price < data.original_price &&
                        <div className="discount-icon">惠</div>}
                </div>
                {showType === "LinkShow" ? <>
                    <Typography.Text ellipsis>{data.description}</Typography.Text>
                    <div className="priceAndBtn">
                        <div className="price">
                            <span className="price-text">￥</span>
                            <span className="price-num">{data.discounted_price}</span>
                        </div>
                        <button onClick={() => navigate(`/beauty/productDetails/${data.product_id}`)}>购买</button>
                    </div>
                </> : showType === "details" ? <>
                <div className="storeName"><div className="icon"><ShopO  /></div>{data.merchant_name}</div>
                
                <div className="productInfo"><Typography.Text ellipsis>{data.description}</Typography.Text></div>
                <div className="soldCount">总售出 {data.sold_count}</div>
                </> : ''}
            </div>
        </div>
    )
}
export default productDataShow