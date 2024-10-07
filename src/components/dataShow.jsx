import { Rate } from 'react-vant';
import { LocationO } from '@react-vant/icons'
import { useNavigate } from 'react-router-dom';
import '@/scss/dataShow.scss'

const dataShow = ({ data, imgShow = true, btnShow = true, textType = 'mix' }) => {
    const navigate = useNavigate();
    return (
        <div className="dataShow-item">
            {imgShow ? <img src={data.img} alt="" /> : ''}
            <div className="dataShow__text">
                <div className='dataShow__title_flex'>
                    <div className='dataShow__title_flexLeft'>
                        <div className='dataShow__title'>{data.storeName}</div>
                        <Rate allowHalf value={data.rating} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' />
                    </div>
                    {btnShow ? <button onClick={() => navigate(`/foster/storeDetails/${data.id}`)}>咨询</button> : ''}
                </div>
                <div className='dataShow__content'>
                    {textType === 'mix' ? <>
                    <div className='dataShow__content_text'>{data.address}</div>
                        <div className='dataShow__content_text'>
                            <div className='dataShow__content_text_div'><LocationO fontSize='4vw' />3.55km</div>
                            </div></> : textType === "address" ? <div className='dataShow__content_text'><LocationO fontSize='3vw' />{data.address}</div> : ''}
                </div>
            </div>
        </div>
    )
}
export default dataShow;