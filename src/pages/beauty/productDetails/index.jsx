import { useParams, useNavigate } from "react-router-dom";
import { Cell, SubmitBar, Popup } from "react-vant";
import { useEffect, useState } from "react";
import "@/scss/productDetails.scss";
import ProductDataShow from "@/components/productDataShow";
import AnimalSelect from "../animalSelect";
import { useBeautyStore } from "@/store/beautyStore";

const productDetails = () => {
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
    const navigate = useNavigate();
    const { productId } = useParams();
    const [animalSelectVisible, setAnimalSelectVisible] = useState(false);
    const dataItem = data.find(item => item.product_id === parseInt(productId));
    const { selectedAnimal, selectedAddress, selectedStore, setSelectedAnimal, setSelectedAddress, setSelectedStore, setSelectedProduct } = useBeautyStore();
    const buildRuleContent = () => {
        if (dataItem) {
            const ruleList = [];

            if (dataItem.reservation_required) {
                ruleList.push(<p>预约规则：{dataItem.reservation_required === true ? "需要预约" : "无需预约"}</p>);
            }

            ruleList.push(<p>有效期：从 {dataItem.valid_from} 至 {dataItem.valid_to}</p>);

            if (dataItem.usage_hours) {
                ruleList.push(<p>使用时间：{dataItem.usage_hours}</p>);
            }

            if (dataItem.refund_policy) {
                ruleList.push(<p>退款政策：{dataItem.refund_policy}</p>);
            }

            return ruleList;
        }
        return null;
    };
    useEffect(() => {
        if (!selectedStore.storeName && dataItem) {
            setSelectedStore({ storeId: dataItem.merchant_id, storeName: dataItem.merchant_name });
        }
    }, [dataItem, setSelectedStore]);

    const handleSubmit = () => {


        if (!selectedAnimal || !selectedAddress || !selectedStore) {
            alert("请选择宠物、地址和门店");
            return;
        }
        // 这里可以添加提交后的实际逻辑，比如向后端发送请求等
        console.log("提交成功，选中的宠物：", selectedAnimal, "地址：", selectedAddress, "门店：", selectedStore);
        setSelectedProduct(dataItem);
        navigate(`/beauty/reservation/${productId}`)
    };


    return (
        <div className="product-details">
            <div className="container">
                <div className="productDataItem">
                    <ProductDataShow data={dataItem} showType="details" />
                </div>
            </div>
            <div className="item-bottom"></div>
            <div className="select">
                <Cell
                    isLink
                    title="宠物"
                    value={selectedAnimal ? <div className="black">{selectedAnimal.animalName}</div> : "请选择宠物"}
                    onClick={() => setAnimalSelectVisible(true)}
                />
                <Cell
                    isLink
                    title="地址"
                    value={selectedAddress ? "已选地址" : "请选择地址"}
                    onClick={() => {
                        // 添加选择地址的逻辑，调用 setSelectedAddress
                    }}
                />
                <Cell
                    isLink
                    title="门店"
                    value={selectedStore ? <div className="black">{selectedStore.storeName}</div> : "请选择门店"}
                    onClick={() => {
                        // 添加选择门店的逻辑，调用 setSelectedStore
                    }}
                />
            </div>
            <div className="product-details-info">
                <div className="product-details-infoItem">
                    <div className="title">服务介绍</div>
                    <div className="content">
                        {dataItem.description}
                    </div>
                </div>
                <div className="product-details-infoItem">
                    <div className="title">规则</div>
                    <div className="content">
                        {buildRuleContent()}
                    </div>
                </div>
            </div>
            <div className="resSubmit">
                <SubmitBar
                    textAlign="left"
                    price={dataItem.discounted_price * 100}
                    suffixLabel={<div className="discount">优惠已减{dataItem.original_price - dataItem.discounted_price}</div>}
                    buttonText="立即抢购"
                    label={" "}
                    buttonColor="#FCCB30"
                    onSubmit={handleSubmit}
                /></div>
            <Popup
                visible={animalSelectVisible}
                description={<AnimalSelect setAnimalSelectVisible={setAnimalSelectVisible} setSelectedAnimal={setSelectedAnimal} />}
                style={{ height: '100%', width: '100%' }}
                position="bottom"
            />
        </div>
    );
};

export default productDetails;