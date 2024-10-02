import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Tabbar } from 'react-vant';
import '@/scss/tabbar.scss';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const defaultValue = location.pathname;
    const handleChange = (value) => {
        navigate(value);
    };
    const tabbarIcons = [
        {
            text: '首页',
            path: "/home",
            icon: "/public/icons/首页.png",
            activeIcon: "/public/icons/首页-1.png"
        },
        {
            text: '萌友圈',
            path: "/home/about",
            icon: "/public/icons/萌友圈.png",
            activeIcon: "/public/icons/萌友圈-1.png"
        },
        {
            text: '我的',
            path: "/home/mine",
            icon: "/public/icons/我的.png",
            activeIcon: "/public/icons/我的-1.png"
        },
    ];
    return (
        <>
            <div className='content-container'>
                <Outlet />
            </div>
            <Tabbar safeAreaInsetBottom fixed onChange={handleChange} activeColor="#080808" inactiveColor="#858585" defaultValue={defaultValue}>
                {tabbarIcons.map((item, index) => {
                    return (
                        <Tabbar.Item
                            key={index}
                            name={item.path}
                            icon={(active) => (
                                <img alt="tab" src={active? item.activeIcon : item.icon} />
                            )}>
                            {item.text}
                        </Tabbar.Item>
                    );
                })}
            </Tabbar>
        </>
    );
};

export default Home;