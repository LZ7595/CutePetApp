import { Outlet, useMatch } from "react-router-dom";
import { StarO } from "@react-vant/icons";
import Share from "@/components/share";
import Nav from "@/components/navbar";
import "@/scss/foster.scss";
import { useState, useEffect } from "react";

const foster = () => {
    const reservationMatch = useMatch("/foster/reservation/:storeId");
    const storeDetailsMatch = useMatch("/foster/storeDetails/:storeId");
    let [iconWhiteCssx, setIconWhiteCssx] = useState(true);
    const StoreStar = () => {
        console.log("收藏");
    }
    const rightActionBtn = (<div className="right-action-btn"><button onClick={StoreStar}><StarO /></button><Share/></div>)
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

    let title = "寄养";
    let rightText = "";
    let fiexd = false;
    let iconWhiteCss = false;
    let backgroundWhite = false;
    if (storeDetailsMatch) {
        title = "";
        rightText = rightActionBtn;
        fiexd = true;
        iconWhiteCss = true;
    } else if (reservationMatch) {
        title = "预约寄养";
        iconWhiteCss = false;
        fiexd = true;
        backgroundWhite = true;
    }

    return (
        <div className="foster">
            <div className={(iconWhiteCss && iconWhiteCssx ? "icon-white" : "") + (backgroundWhite ? " background-white" : "")}>
                <Nav title={title} showLeftArrow={true} rightText={rightText} clickLeft fiexd={fiexd} />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default foster;
