import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography, Radio, Button, Loading, Cell } from "react-vant";
import axios from "axios";
import Nav from "@/components/navbar";
import "@/scss/pay.scss";

const pay = () => {
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
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [orderInfo, setOrderInfo] = useState(order);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(900); // 假设倒计时 10 分钟（600 秒）

    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                // 倒计时结束，处理超时逻辑
                setPaymentStatus("timeout");
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);

    const handlePaymentSuccess = (responseData) => {
        setPaymentStatus("success");
        navigate("/payment-success", { state: { orderId, responseData } });
    };

    const handlePaymentFailure = (error) => {
        setPaymentStatus("failure");
        console.error("支付失败：", error);
        if (error.response && error.response.data && error.response.data.message) {
            alert(`支付失败：${error.response.data.message}`);
        } else {
            alert("支付失败，请重试。");
        }
    };

    const startPayment = async () => {
        setIsLoading(true);
        try {
            let response;
            if (selectedPaymentMethod === "wechat") {
                response = await axios.post(`/api/pay/wechat/${orderId}`);
            } else if (selectedPaymentMethod === "alipay") {
                response = await axios.post(`/api/pay/alipay/${orderId}`);
            }
            if (response.data.paymentUrl) {
                window.location.href = response.data.paymentUrl;
            }
        } catch (error) {
            handlePaymentFailure(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pay-page">
            {isLoading ? (
                <Loading>正在加载订单信息...</Loading>
            ) : orderInfo ? (
                <div className="pay-orderInfo">
                    <Nav title="付款" showLeftArrow={true} clickLeft />
                    <div className="pay-time">支付剩余时间：{Math.floor(countdown / 60)}:
                        {countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}</div>
                    <div className="pay-finalTotalPrice"><span className="pay-finalTotalPrice-sign">￥</span>{orderInfo.finalTotalPrice}</div>
                    <div className="pay-type-title">支付方式</div>
                    <Radio.Group value={selectedPaymentMethod}>
                        <Cell.Group>
                            <Cell
                                border={false}
                                clickable
                                title='微信支付'
                                icon={
                                    <span className="pay-icon">
                                        <svg t="1728617149377" class="icon" viewBox="0 0 1144 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4324" width="200" height="200">
                                            <path d="M436.314353 632.771765c-68.517647 36.321882-78.667294-20.389647-78.667294-20.389647l-85.835294-190.524236c-33.039059-90.533647 28.581647-40.839529 28.581647-40.839529s52.856471 38.038588 93.003294 61.229176c40.086588 23.190588 85.835294 6.806588 85.835294 6.806589l561.212235-246.362353C936.899765 80.112941 765.891765 0 572.235294 0 256.180706 0 0 213.232941 0 476.310588c0 151.311059 84.811294 285.967059 216.937412 373.248l-23.792941 130.288941s-11.625412 38.038588 28.611764 20.389647c27.437176-12.047059 97.370353-55.115294 138.992941-81.347764 65.445647 21.684706 136.734118 33.731765 211.486118 33.731764 316.024471 0 572.235294-213.232941 572.235294-476.310588 0-76.197647-21.594353-148.178824-59.843764-212.028235-178.808471 102.309647-594.733176 340.118588-648.312471 368.489412z" fill="#43C93E" p-id="4325"></path>
                                        </svg></span>}
                                onClick={() => setSelectedPaymentMethod("wechat")}
                                rightIcon={<Radio name="wechat" checkedColor="#FCCB30" />}
                            />
                            <Cell
                                border={false}
                                clickable
                                title='支付宝支付'
                                icon={
                                    <span className="pay-icon">
                                        <svg t="1728617306131" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5314" width="200" height="200">
                                            <path d="M1024.0512 701.0304V196.864A196.9664 196.9664 0 0 0 827.136 0H196.864A196.9664 196.9664 0 0 0 0 196.864v630.272A196.9152 196.9152 0 0 0 196.864 1024h630.272a197.12 197.12 0 0 0 193.8432-162.0992c-52.224-22.6304-278.528-120.32-396.4416-176.64-89.7024 108.6976-183.7056 173.9264-325.3248 173.9264s-236.1856-87.2448-224.8192-194.048c7.4752-70.0416 55.552-184.576 264.2944-164.9664 110.08 10.3424 160.4096 30.8736 250.1632 60.5184 23.1936-42.5984 42.496-89.4464 57.1392-139.264H248.064v-39.424h196.9152V311.1424H204.8V267.776h240.128V165.632s2.1504-15.9744 19.8144-15.9744h98.4576V267.776h256v43.4176h-256V381.952h208.8448a805.9904 805.9904 0 0 1-84.8384 212.6848c60.672 22.016 336.7936 106.3936 336.7936 106.3936zM283.5456 791.6032c-149.6576 0-173.312-94.464-165.376-133.9392 7.8336-39.3216 51.2-90.624 134.4-90.624 95.5904 0 181.248 24.4736 284.0576 74.5472-72.192 94.0032-160.9216 150.016-253.0816 150.016z" fill="#009FE8" p-id="5315"></path>
                                        </svg></span>}
                                onClick={() => setSelectedPaymentMethod("alipay")}
                                rightIcon={<Radio name="alipay" checkedColor="#FCCB30" />}
                            />
                        </Cell.Group>
                    </Radio.Group>
                    <div className="pay-btn">
                    <Button color="#FCCB30" round type="primary" onClick={startPayment} disabled={!Boolean(selectedPaymentMethod)}>
                        确认支付
                    </Button></div>
                    {paymentStatus === "failure" && (
                        <Typography.Text style={{ color: 'red' }}>支付失败，请重试。</Typography.Text>
                    )}
                    {paymentStatus === "timeout" && (
                        <Typography.Text style={{ color: 'red' }}>支付超时，请重新下单。</Typography.Text>
                    )}
                </div>
            ) : (
                <Typography.Text>无法加载订单信息，请稍后重试。</Typography.Text>
            )}
        </div>
    );
};

export default pay;