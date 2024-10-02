import { Rate } from 'react-vant';
import { LocationO } from '@react-vant/icons'
import '@/scss/dataShow.scss'

const dataShow = ( {data = {storeName:'淘气联盟宠物店', Rate:3.5, address:'丰台长丰园和顺家园底商B23-89', distance:3.55, img:'/src/assets/6.jpg'} }) => {
    return (
        <div className="dataShow-item">
            <img src={data.img} alt="" />
            <div className="dataShow__text">
                <div className='dataShow__title_flex'>
                    <div className='dataShow__title_flexLeft'>
                        <div className='dataShow__title'>{data.storeName}</div>
                        <Rate allowHalf value={data.Rate} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' />
                    </div>
                    <button>咨询</button>
                </div>
                <div className='dataShow__content'>
                    <div className='dataShow__content_text'>{data.address}</div>
                    <div className='dataShow__content_text'><div className='dataShow__content_text_div'><LocationO fontSize='4vw'  />3.55km</div></div>
                    </div>
            </div>
        </div>
    )
}
export default dataShow;