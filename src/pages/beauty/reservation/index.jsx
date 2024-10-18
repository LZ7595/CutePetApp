import { useNavigate, useParams } from "react-router-dom";
import { useBeautyStore } from "@/store/beautyStore";
import { useEffect, useState } from "react";
import InputComponent from "@/components/InputComponent";
import { Cell, DatetimePicker, SubmitBar, Badge  } from "react-vant";
import {ShoppingCart} from "@react-vant/icons"
import '@/scss/beautyReservation.scss';

const beautyReservation = () => {
    const data = [
        {
            "product_id": 1,
            "product_name": "宠物基础美容套餐",
            "description": "这个宠物基础美容套餐包含专业的洗澡服务，使用温和的宠物专用沐浴产品，确保宠物毛发清洁柔顺。同时，还包括修剪指甲，防止指甲过长影响宠物行动和健康。此外，清洁耳朵可以有效预防耳部感染。我们的专业美容师会用心为您的宠物提供基础护理，让宠物焕然一新。",
            "original_price": 150,
            "discounted_price": 120,
            "image_url": "/src/assets/6.jpg",
            "stock": 20,
            "sold_count": 10,
            "is_active": true,
            "merchant_id": 101,
            "merchant_name": "萌宠乐园美容店",
            "address": "北京市朝阳区萌宠街 12 号",
            "phone_number": "138XXXX1111",
            "rating": 4.2,
            "review_count": 15,
            "valid_from": "2024-10-05",
            "valid_to": "2025-01-05",
            "usage_hours": "09:00 - 18:00",
            "reservation_required": false,
            "refund_policy": "购买后 24 小时内可无条件退款，超过 24 小时不可退款但可转让。",
            "rating": 4.0,
            "review_text": "基础美容套餐很实惠，宠物洗完澡后特别干净。"
        },
        {
            "product_id": 2,
            "product_name": "宠物精致美容套餐",
            "description": "宠物精致美容套餐提供全方位的呵护。专业的洗澡服务使用高品质的沐浴产品，让宠物毛发柔顺亮泽。精细的毛发修剪根据宠物的品种和特点进行造型设计，使其更加可爱迷人。皮毛护理采用专业的护理产品，滋养宠物的皮肤和毛发。如果您希望宠物更加独特，还可以选择染色服务，我们有多种安全环保的染色剂可供选择。",
            "original_price": 300,
            "discounted_price": 240,
            "image_url": "/src/assets/6.jpg",
            "stock": 15,
            "sold_count": 8,
            "is_active": true,
            "merchant_id": 102,
            "merchant_name": "宠物时尚馆",
            "address": "上海市黄浦区时尚大道 55 号",
            "phone_number": "139XXXX8888",
            "rating": 4.5,
            "review_count": 20,
            "valid_from": "2024-10-15",
            "valid_to": "2025-02-15",
            "usage_hours": "10:00 - 17:00",
            "reservation_required": true,
            "refund_policy": "提前 48 小时可全额退款，24 - 48 小时内退款 50%，小于 24 小时不可退款。",
            "rating": 4.8,
            "review_text": "这个套餐真的太棒了！宠物美容后像换了个新宠物一样，非常满意。"
        },
        {
            "product_id": 3,
            "product_name": "猫咪专属美容服务",
            "description": "猫咪专属美容服务专注于为猫咪提供贴心的护理。洗澡过程中，我们使用温和无刺激的沐浴产品，呵护猫咪敏感的皮肤。梳理毛发可以去除杂毛，防止打结，让猫咪的毛发更加顺滑。修剪爪子不仅能保持猫咪的爪子整洁，还能预防抓伤。清洁口腔有助于猫咪的口腔健康，减少口臭和牙齿问题。",
            "original_price": 120,
            "discounted_price": 90,
            "image_url": "/src/assets/6.jpg",
            "stock": 18,
            "sold_count": 12,
            "is_active": true,
            "merchant_id": 103,
            "merchant_name": "喵星人美容屋",
            "address": "广州市天河区喵星路 66 号",
            "phone_number": "136XXXX6666",
            "rating": 4.3,
            "review_count": 18,
            "valid_from": "2024-09-20",
            "valid_to": "2024-12-20",
            "usage_hours": "13:00 - 20:00",
            "reservation_required": false,
            "refund_policy": "未使用随时可退，使用后不可退。",
            "rating": 4.5,
            "review_text": "猫咪很享受这个美容服务，工作人员也很专业。"
        },
        {
            "product_id": 4,
            "product_name": "宠物高级 SPA 套餐",
            "description": "宠物高级 SPA 套餐为您的宠物带来极致的放松体验。全身 SPA 包括按摩、舒缓浴和香薰护理，让宠物放松身心。毛发深度护理使用专业的护理产品，修复受损毛发，使其更加亮丽。按摩服务由专业的按摩师进行，可以缓解宠物的肌肉紧张，促进血液循环。这个套餐适合所有宠物类型，让您的宠物享受贵族般的待遇。",
            "original_price": 500,
            "discounted_price": 400,
            "image_url": "/src/assets/6.jpg",
            "stock": 12,
            "sold_count": 6,
            "is_active": true,
            "merchant_id": 104,
            "merchant_name": "宠物贵族会所",
            "address": "深圳市福田区贵族街 88 号",
            "phone_number": "137XXXX8888",
            "rating": 4.6,
            "review_count": 22,
            "valid_from": "2024-11-01",
            "valid_to": "2025-03-01",
            "usage_hours": "08:30 - 19:30",
            "reservation_required": true,
            "refund_policy": "购买 7 天内可退，之后不可退但可更换服务时间一次。",
            "rating": 4.7,
            "review_text": "宠物做完 SPA 后状态非常好，很满意这个套餐。"
        },
        {
            "product_id": 5,
            "product_name": "宠物创意造型服务",
            "description": "宠物创意造型服务让您的宠物与众不同。我们的专业美容师可以根据您的要求为宠物设计独特的造型，如扎小辫子、佩戴饰品等。无论是可爱风、时尚风还是酷炫风，我们都能满足您的需求。让您的宠物成为众人瞩目的焦点，展现个性魅力。",
            "original_price": 200,
            "discounted_price": 160,
            "image_url": "/src/assets/6.jpg",
            "stock": 10,
            "sold_count": 5,
            "is_active": true,
            "merchant_id": 105,
            "merchant_name": "宠物创意工坊",
            "address": "成都市锦江区创意巷 77 号",
            "phone_number": "135XXXX7777",
            "rating": 4.4,
            "review_count": 16,
            "valid_from": "2024-10-08",
            "valid_to": "2025-01-08",
            "usage_hours": "11:00 - 16:00",
            "reservation_required": false,
            "refund_policy": "下单后不可退款，可在有效期限内更改服务宠物类型一次。",
            "rating": 4.6,
            "review_text": "创意造型非常棒，宠物变得超级可爱。"
        }
    ];
    const iproduct = [
        {
            iproduct_id: 1,
            product_name: '毛皮护理',
            price: 9
        },
        {
            iproduct_id: 2,
            product_name: '口腔护理',
            price: 9
        },
        {
            iproduct_id: 3,
            product_name: '头部护理',
            price: 9
        },
        {
            iproduct_id: 4,
            product_name: '健康体检',
            price: 9
        },
        {
            iproduct_id: 5,
            product_name: '洗澡',
            price: 9
        },
    ]
    const navigate = useNavigate();
    const { productId } = useParams();
    const dataItem = data.find(item => item.product_id === parseInt(productId));
    const {
        selectedProduct,
        selectedDatetime,
        setSelectedProduct,
        addSelectedIProduct,
        removeSelectedIProduct,
        selectedIProducts,
        selectedNurse,
        setRemarkInStore,
        setSelectedDatetimeInStore,
        resetState
    } = useBeautyStore();
    const [remark, setRemark] = useState('');

    useEffect(() => {
        if (!dataItem ||!selectedProduct || dataItem.product_id!== selectedProduct.product_id) {
            console.log(666);
            console.log(dataItem, selectedProduct);
            navigate(-1);
        }
    }, [dataItem, selectedProduct]);

    const [showDatetimePicker, setShowDatetimePicker] = useState(false);
    const totalPriceOfSelectedIProducts = selectedIProducts.length > 0
      ? selectedIProducts.reduce((total, item) => total + item.price, 0)
        : 0;

    const handleDatetimeChange = (datetime) => {
        setSelectedDatetimeInStore(datetime);
        setShowDatetimePicker(false);
    };

    const openDatetimePicker = () => {
        setShowDatetimePicker(true);
    };

    const closeDatetimePicker = () => {
        setShowDatetimePicker(false);
    };

    const handleSubmit = () => {
        const { selectedProduct, selectedNurse, selectedAddress, selectedStore } = useBeautyStore.getState();
        if (!selectedProduct ||!selectedNurse ||!selectedAddress ||!selectedStore.storeId ||!selectedStore.storeName ||!selectedNurse.name || !selectedDatetime ) {
            console.log('有必填项未填写，不能提交');
            return;
        }
        console.log('提交表单');
    };

    const formatDate = (dateObj) => {
        if (!dateObj) return "请选择服务时间";
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const handleItemClick = (item) => {
        addSelectedIProduct(item);
        console.log(selectedIProducts);
    };
    const isHighlighted = (item) => {
        return selectedIProducts && selectedIProducts.some(product => product.product_name === item.product_name);
    };

    const handleRemarkChange = (newRemark) => {
        setRemark(newRemark);
        setRemarkInStore(newRemark);
    };

    return (
        <div className="beauty-reservation">
            <div className="reservation-select">
                <span className="reservation-selectTitle">单项服务</span>
                <div className="reservation-selectItems">
                    {iproduct.map((item, index) => (
                        <div
                            className={`reservation-selectItem ${isHighlighted(item)? 'highlighted' : ''}`}
                            key={index}
                            onClick={() => handleItemClick(item)}
                        >
                            <div className="reservation-selectItemTitle">{item.product_name}</div>
                            <div className="reservation-selectItemPrice">￥{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="reservation-InputItem">
                <span className="reservation-InputTitle">服务时间</span>
                <Cell onClick={openDatetimePicker} value={selectedDatetime? formatDate(selectedDatetime) : "请选择服务时间"} isLink />
                <DatetimePicker
                    visible={showDatetimePicker}
                    onConfirm={handleDatetimeChange}
                    onCancel={closeDatetimePicker}
                    popup={{
                        round: true,
                    }}
                />
            </div>
            <div className="reservation-InputItem">
                <span className="reservation-InputTitle">美容师</span>
                <Cell value={selectedNurse.name? selectedNurse.name :"请选择美容师"} isLink onClick={() => navigate('/beauty/selectNurse')} />
            </div>
            <div className="reservation-InputItem">
                <InputComponent title="备注信息" placeholder="请输入备注信息，入籍样式宠物所需用品等" valueSetter={handleRemarkChange} inputType="textarea" maxLength="80" />
            </div>
            <div className="resSubmit">
                <SubmitBar
                    textAlign="left"
                    price={(selectedProduct.discounted_price + totalPriceOfSelectedIProducts) * 100}
                    buttonText="立即抢购"
                    label={<div className="resSubmitLabel"><Badge content={1 + selectedIProducts.length}><ShoppingCart /></Badge></div>}
                    buttonColor="#FCCB30"
                    onSubmit={handleSubmit}
                /></div>
        </div>
    );
};

export default beautyReservation;