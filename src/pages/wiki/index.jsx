import { Outlet, useLocation, useMatch } from "react-router-dom";
import { ShareSheet } from 'react-vant'
import { StarO, ShareO, Search } from "@react-vant/icons";
import Nav from "@/components/navbar";
import { useState, useEffect } from "react";
import './index.scss'

const wiki = () => {
  const DetailsMatch = useMatch("/wiki/wikiDetails/:wikiId");
  const [iconWhiteCssx, setIconWhiteCssx] = useState(true);
  const [shareShow, setShareShow] = useState(false);

  const StoreStar = () => {
    console.log("收藏");
  };
  const StoreShare = () => {
    setShareShow(true);
  };
  const rightActionBtn = (
    <div className="right-action-btn">
      <button onClick={StoreStar}>
        <StarO />
      </button>
      <button onClick={StoreShare}>
        <ShareO />
      </button>
    </div>
  );

  let iconWhiteCss = false;
  let backgroundWhite = false;
  let title = "百科"
  let fiexd = false;
  const onSearch = () => {
    console.log("搜索");
  }
  const rightSearchBtn = <button onClick={onSearch}>
    <Search />
  </button>
  let rightText = rightSearchBtn;
  if (DetailsMatch) {
    title = "";
    rightText = rightActionBtn;
    iconWhiteCss = true;
    backgroundWhite = true;
    fiexd = true;
  }

  const options = [
    { name: "微信", icon: "wechat" },
    { name: "微博", icon: "weibo" },
    { name: "复制链接", icon: "link" },
  ];
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
  return (
    <div className="wiki">
      <div className={(iconWhiteCss && iconWhiteCssx ? "icon-white" : "") + (backgroundWhite && !iconWhiteCssx ? " background-white" : "")}>
        <Nav title={title} showLeftArrow={true} rightText={rightText} clickLeft fiexd={fiexd} />
      </div>
      <Outlet />
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
export default wiki;
