import { NavBar } from 'react-vant';
import { ArrowLeft } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';

const Nav = ({ title = "", leftText = "", rightText = "", clickLeft, clickRight, showLeftArrow = false }) => {
  let navigate = useNavigate();

  const handleClickLeft = () => {
    if (clickLeft && typeof clickLeft === 'function') {
      clickLeft(); // 调用传入的函数（如果有的话）  
    } else if (!clickLeft) {
      // 如果没有传入 clickLeft 且不是函数，不执行任何操作
      return;
    }
    else {
      navigate(-1); // 如果没有传入，则默认导航回上一个页面  
    }
  };

  const handleClickRight = () => {
    if (typeof clickRight === 'function') {
      clickRight(); // 调用传入的函数（如果有的话）  
    }
    // 注意：这里没有对 right 按钮的默认行为做处理，因为它可能是多样的  
  };
  const leftArrowContent = showLeftArrow ? <ArrowLeft /> : null;

  return (
    <NavBar
      safeAreaInsetTop
      leftArrow={leftArrowContent}
      className='navbar'
      title={title}
      leftText={leftText}
      rightText={rightText}
      onClickLeft={handleClickLeft}
      onClickRight={handleClickRight}
    />
  );
};

export default Nav;