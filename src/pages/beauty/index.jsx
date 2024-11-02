import { Outlet, useLocation, useMatch, useNavigate } from "react-router-dom";
import { StarO } from "@react-vant/icons";
import { useBeautyStore } from "@/store/beautyStore";
import Nav from "@/components/navbar";
import "@/scss/beauty.scss";
import { useState, useEffect } from "react";
import Share from "@/components/share";

const beauty = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { resetState,setSelectedNurse,selectedNurse } = useBeautyStore();
    const reservationMatch = useMatch("/beauty/reservation/:storeId");
    const storeDetailsMatch = useMatch("/beauty/productDetails/:productId");
    let [iconWhiteCssx, setIconWhiteCssx] = useState(true);
    const StoreStar = () => {
        console.log("收藏");
    }
    
    const rightActionBtn = (<div className="right-action-btn"><button onClick={StoreStar}><StarO /></button><Share /></div>)
    useEffect(() => {
        const handleScroll = () => {
            let scrollYInVW = (window.scrollY / window.innerWidth) * 100;
            if (scrollYInVW > 65) {
                setIconWhiteCssx(false);
            } else {
                setIconWhiteCssx(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let title = "美容";
    let rightText = "";
    let fiexd = false;
    let iconWhiteCss = false;
    let backgroundWhite = false;
    let onClickLeft = () => {
        resetState()
        navigate(-1)
    };
    
    if (storeDetailsMatch) {
        title = "";
        rightText = rightActionBtn;
        fiexd = true;
        backgroundWhite = true;
    } else if (reservationMatch) {
        title = "预约美容";
        iconWhiteCss = false;
        fiexd = true;
        backgroundWhite = true;
    }else if(location.pathname === "/beauty/selectNurse"){
        title = "选择护理师";
        iconWhiteCss = false;
        fiexd = true;
        backgroundWhite = true;
        onClickLeft = () => {
            setSelectedNurse({})
            navigate(-1)
        }
        rightText = <button className="btn-selectedNurse" disabled={!selectedNurse.name} onClick={() => navigate(-1)}>预约</button>;
    }

    return (
        <div className="beauty">
            <div className={(iconWhiteCss && iconWhiteCssx ? "icon-white" : "") + (backgroundWhite ? " background-white" : "")}>
                <Nav title={title} showLeftArrow={true} rightText={rightText} clickLeft={onClickLeft} fiexd={fiexd} />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default beauty;
