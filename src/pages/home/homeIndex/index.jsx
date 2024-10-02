import Nav from "@/components/navbar";
import '@/scss/home.scss'
import '@/scss/banner.scss'
import { ArrowDown, Arrow } from '@react-vant/icons'
import { Swiper, Popup } from 'react-vant';
import { useState } from 'react';
import UserTab from '@/components/usertab';
import DropMenu from "@/components/dropMenu";
import NurseInfo from "@/components/nurseInfo";
import { Link } from "react-router-dom";

const homeIndex = () => {
  const [showCustomIconPosition, setShowCustomIconPosition] = useState(false)
  const [selectedArea, setSelectedArea] = useState('北京市');
  const banners = [{ img: '/src/assets/banner.png', color: '#FFBBA5' }, { img: '/src/assets/banner.png', color: '#FFBBA5' }, { img: '/src/assets/banner.png', color: '#FFBBA5' }, { img: '/src/assets/banner.png', color: '#FFBBA5' }]
  const typeSels = [{ img: '/src/assets/寄养.png', word: '我要寄养', width: '40px', height: '36px' , url:'/foster' }, { img: '/src/assets/美容.png', word: '宠物美容', width: '33px', height: '35px' }, { img: '/src/assets/医疗.png', word: '宠物医疗', width: '37px', height: '34px' }, { img: '/src/assets/百科.png', word: '知识百科', width: '30px', height: '36px' }]
  const items = banners.map((item, index) => (
    <Swiper.Item key={index} style={{ background: item.color }}>
      <img src={item.img} alt="" />
    </Swiper.Item>))

  const typeItems = typeSels.map(({ img, word, url }, index) => (
    <Link to={url}>
    <div key={index} className="typeItem">
      <img src={img} alt={word} />
      <span>{word}</span>
    </div>
    </Link>
  ))

  return (
    <div className="homeIndex">
      <Nav leftText={<><span>{selectedArea}</span><ArrowDown /></>} clickLeft={() => setShowCustomIconPosition(true)} />
      <div className="demo-swiper">
        <Swiper slideSize={93} trackOffset={3.5} >
          {items}
        </Swiper>
      </div>
      <div className="typeSelect">
        {typeItems}
      </div>
      <div className="everydaySuggestion homeNav">
        <Nav leftText="每日推荐" rightText={<><span className="lookMore">查看更多</span><Arrow /></>} />
        <UserTab />
      </div>
      <div className="popularPetCaregiver homeNav">
        <Nav leftText="热门宠物护理师" rightText={<><span className="lookMore">查看更多</span><Arrow /></>} />
        <div className="nurseList">
          <NurseInfo />
        </div>
      </div>

      <Popup
        visible={showCustomIconPosition}
        closeable
        description={<DropMenu onSelectCity={(city) => { setSelectedArea(city); setShowCustomIconPosition(false) }} />}
        style={{ height: '100%' }}
        position='bottom'
        closeIconPosition='top-left'
        onClose={() => setShowCustomIconPosition(false)}
      />
    </div>

  );
}
export default homeIndex;