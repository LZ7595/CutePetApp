import { Outlet, useLocation, useMatch } from "react-router-dom";
import Nav from "@/components/navbar";
import "@/scss/foster.scss";

const foster = () => {
    const location = useLocation();
    const reservationMatch = useMatch("/foster/reservation");
    const payMatch = useMatch("/foster/pay");
    let title = "寄养";
    if (location.pathname === "/foster/storeDetails") {
        title = "";
    } else if (reservationMatch) {
        title = "预约";
    } else if (location.pathname === "/foster/addAnimal") {
        title = "添加宠物";
    } else if (location.pathname === "/foster/selectAnimalType") {
        title = "宠物品类选择";
    } else if (location.pathname === "/foster/selectTime") {
        title = "选择时间";
    } else if (location.pathname === "/foster/confirmOrder") {
        title = "确认订单";
    } else if (payMatch) {
        title = "付款";
    }

    return (
        <div className="foster">
            <Nav title={title} showLeftArrow={true} clickLeft />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default foster;