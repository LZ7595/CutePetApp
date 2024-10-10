import { useParams, useNavigate } from "react-router-dom";
import { LocationO } from "@react-vant/icons";
import { Typography , SubmitBar } from "react-vant";
import Nav from "@/components/navbar";
import DateSelection from "@/components/dateSelection";
import AnimalItem from "@/components/animalItem";
import InputComponent from "@/components/inputComment";
import "@/scss/order.scss";

const order = () => {
    const { orderId } = useParams();
    const order = {
        orderId: '10001',
        status: '待付款',
        serviceFee: 10,
        totalPrice: 150,
        finalTotalPrice: 160,
        paymentMethod: null,
        store: {
            id: '2',
            storeName: '淘气联盟宠物店',
            address: '丰台长丰园和顺家园底商 B23 - 89',
            phone: '13987654321'
        },
        details: {
            "animal": {
                "animalId": 1,
                "animalImg": "/src/assets/椭圆形.jpg",
                "animalName": "赖小赖",
                "animalAge": "1 个月",
                "animalGender": "公",
                "animalDescribe": "非常可爱，喜欢玩球",
                "animalOwner": "测试号 1",
                "animalType": {
                    "breed": "伯恩山犬",
                    "type": "dog",
                    "size": "大型犬"
                }
            },
            "contactName": "sa",
            "phoneNumber": "1555555554",
            "reservationDates": [
                "2024/10/24",
                "2024/10/26"
            ],
            "days": "5",
            "remark": "54fsdafsaf",
            "pricePerDay": "50 元/天"
        }
    };
    return (
        <div className="order">
            <div className="orderTop">
                <Nav title="订单详情" showLeftArrow={true} clickLeft />
                <div className="orderStore">
                    <div className="orderStoreIcon"><LocationO fontSize="4vw" /></div>
                    <div className="orderStoreInfo">
                        <div className="orderStoreRow">
                            <div className="orderStoreName">{order.store.storeName}</div>
                            <div className="orderStorePhone">{order.store.phone}</div>
                        </div>
                        <div className="orderStoreAddress"><Typography.Text ellipsis={{ rows: 2 }}>收货地址：{order.store.address}68333333333333333333333333333333333333333333333333335555555</Typography.Text></div>
                    </div>
                </div>
            </div>
            <div className="orderDetails">
                {/* 确保这里处于展示模式 */}
                <DateSelection title="寄养时间" isLink={false} reservationDates={order.details.reservationDates} odays={order.details.days} />
                <div className="orderAnimalDetails">
                    <div className="orderDetailsTitle">寄养宠物</div>
                    <AnimalItem animal={order.details.animal} />
                </div>
                <InputComponent title="备注信息" placeholder={order.details.remark} inputType="textarea" maxLength="80" disabled={true} />
                <div className="orderPriceDetails">
                    <div className="orderDetailsTitle">
                        <div className="title-left">应付金额</div>
                        <div className="title-right">￥{order.finalTotalPrice}</div>
                    </div>
                    <div className="orderPriceDiv">
                        <div className="orderPriceRow">
                            <div className="orderPriceLeft">寄养费用</div>
                            <div className="orderPriceRight">￥{order.totalPrice}</div>
                        </div>
                        <div className="orderPriceRow">
                            <div className="orderPriceLeft">服务费</div>
                            <div className="orderPriceRight">￥{order.serviceFee}</div>
                        </div>
                    </div>
                </div>
            </div>
            <SubmitBar textAlign="left" price={order.finalTotalPrice * 100} label='' buttonColor='#FCCB30' buttonText="提交订单" />
        </div>
    );
};

export default order;