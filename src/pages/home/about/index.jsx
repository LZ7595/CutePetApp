import { Search, Divider, Space } from "react-vant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Usertab from "@/components/usertab";
import FollowButton from "@/components/followButton";
import "./index.scss";

const about = () => {
    const navigate = useNavigate();
    const options = ['关注', '推荐'];
    const items = Array.from({ length: 10 });
    const recommend = [{ userId: "5562", avatarUrl: "/src/assets/椭圆形.png", userName: "王泡芙", label: "知名萌宠博主" }, { userId: "5872", avatarUrl: "/src/assets/椭圆形-2.png", userName: "奥利奥", label: "知名萌宠博主" }, { userId: "5743", avatarUrl: "/src/assets/椭圆形-1.png", userName: "赖小来", label: "知名萌宠博主" }, { userId: "5552", avatarUrl: "/src/assets/椭圆形-5.jpg", userName: "魏晓理", label: "知名摄像博主" }];

    const [value, setValue] = useState('');
    const [activeSpan, setActiveSpan] = useState(0);

    const AboutOptionsContent0 = () => {
        return (
            <>
                <div className="about-barContent0">
                    {items.map((_, i) => (
                        <div key={i} className="about-barContent-item">
                            <img src="/src/assets/cd.png" alt="" />
                        </div>
                    ))}
                </div>
                <div className="about-barContent-Divider"><Divider /></div>
                <div className="about-content">
                    <Space divider={<Divider />} gap={0} direction="vertical">
                        <Usertab showType='animalTypeTime' ImgShowType="straight" dynamicLink />
                        <Usertab showType='animalTypeTime' ImgShowType="straight" dynamicLink />
                        <Usertab showType='animalTypeTime' ImgShowType="straight" dynamicLink />
                    </Space>
                </div>
            </>
        )
    }

    const AboutOptionsContent1 = () => {
        return (
            <>
                <div className="about-barContent1">
                    {recommend.map(({ userId, avatarUrl, userName, label }, index) => (
                        <div key={`${index}-${userId}`} className="about-barContent-item">
                            <img src={avatarUrl} alt="" />
                            <div className="about-barContent-item-content">
                                <div className="about-barContent-item-content-name">{userName}</div>
                                <div className="about-barContent-item-content-label">{label}</div>
                                <FollowButton userId={userId} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="about-barContent-Divider"><Divider /></div>
                <div className="about-content">
                    <Space divider={<Divider />} gap={0} direction="vertical">
                        <Usertab showType='animalTypeBtn' ImgShowType="straight" dynamicLink />
                        <Usertab showType='animalTypeBtn' ImgShowType="straight" dynamicLink />
                        <Usertab showType='animalTypeBtn' ImgShowType="straight" dynamicLink />
                    </Space>
                </div>
            </>
        )
    }

    const handleSpanClick = (index) => {
        setActiveSpan(index);
    };

    // Search组件获取焦点时调用的方法
    const handleSearchFocus = () => { navigate('/about/search') };

    return (
        <div className="about">
            <Search
                value={value}
                onChange={setValue}
                placeholder="请输入搜索关键词"
                action={<button onClick={() => navigate('/about/publish')}>
                    <svg t="1727848165303" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2484" width="200" height="200"><path d="M269.44 256l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56 256H821.333333c64.8 0 117.333333 52.533333 117.333333 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333z m23.605333 64H202.666667a53.33 33.33 0 0 0-53.33 53.33v426.666667a53.33 33.33 0 0 0 53.33 53.33h618.666666a53.33 33.33 0 0 0 53.33 -53.33V373.333333a53.33 33.33 0 0 0-53.33 -53.33h-90.378666a32 32 0 0 1-30.570667 -22.549333l-30.272 -97.930667a10.666667 10.666667 0 0 0-10.186667 -7.52H364.074667a10.666667 10.666667 0 0 0-10.186667 7.52l-30.272 97.92A32 32 0 0 1 293.045333 320zM512 725.333333c-88.362667 0-160 -71.637333 -160 -160 0 -88.362667 71.637333 -160 160 -160 88.362667 0 160 71.637333 160 160 0 88.362667 -71.637333 160 -160 160z m0 -64a96 96 0 1 0 0 -192 96 96 0 0 0 0 192z" fill="#000000" p-id="2485"></path></svg>
                </button>}
                onFocus={handleSearchFocus}
            />
            <div className="about-content">
                <div className="about-bar">
                    {options.map((option, index) => (
                        <div key={index} className="about-bar-title">
                            <span
                                className={activeSpan == index ? 'active' : ''}
                                onClick={() => handleSpanClick(index)}
                            >
                                {option}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="about-options-Content">
                    {activeSpan == 0 && <AboutOptionsContent0 />}
                    {activeSpan == 1 && <AboutOptionsContent1 />}
                </div>
            </div>
        </div>
    )
}

export default about;