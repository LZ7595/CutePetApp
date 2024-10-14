import { Outlet, useLocation, useMatch } from "react-router-dom";
import { ShareSheet } from 'react-vant'
import { StarO, ShareO } from "@react-vant/icons";
import Nav from "@/components/navbar";
import "@/scss/beauty.scss";
import { useState, useEffect } from "react";

const beauty = () => {
    const location = useLocation();
    const reservationMatch = useMatch("/beauty/reservation/:storeId");
    const storeDetailsMatch = useMatch("/beauty/productDetails/:productId");
    let [iconWhiteCssx, setIconWhiteCssx] = useState(true);
    const [shareShow, setShareShow] = useState(false)
    const StoreStar = () => {
        console.log("收藏");
    }
    const StoreShare = () => {
        setShareShow(true)
    }
    const options = [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
    ]
    const rightActionBtn = (<div className="right-action-btn"><button onClick={StoreStar}><StarO /></button><button onClick={StoreShare}><ShareO /></button></div>)
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
    if (storeDetailsMatch) {
        title = "";
        rightText = rightActionBtn;
        fiexd = true;
        backgroundWhite = true;
    } else if (reservationMatch) {
        title = "预约寄养";
        iconWhiteCss = false;
        fiexd = true;
        backgroundWhite = true;
    }
    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            console.log('链接已复制到剪贴板');
        } catch (err) {
            console.error('复制链接失败:', err);
        }
    };

    return (
        <div className="beauty">
            <div className={(iconWhiteCss && iconWhiteCssx ? "icon-white" : "") + (backgroundWhite ? " background-white" : "")}>
                <Nav title={title} showLeftArrow={true} rightText={rightText} clickLeft fiexd={fiexd} />
            </div>
            <div>
                <Outlet />
            </div>
            <ShareSheet
                overlay={true}
                visible={shareShow}
                options={options}
                title='分享到'
                cancelText=''
                onCancel={() => setShareShow(false)}
                onSelect={(option, index) => {
                    copyLink()
                    console.log('option', option)
                    console.log('index', index)
                    setShareShow(false)
                }}
            />
        </div>
    );
};

export default beauty;
