import { Rate } from 'react-vant';
import { LocationO } from '@react-vant/icons';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const getContentBasedOnTextType = (data, textType) => {
    if (textType === 'mix') {
        return (
            <>
                <div className='fosterDataShow__content_text'>{data.address}</div>
                <div className='fosterDataShow__content_text'>
                    <div className='fosterDataShow__content_text_div'><LocationO fontSize='4vw' />3.55km</div>
                </div>
            </>
        );
    } else if (textType === "address") {
        return <div className='fosterDataShow__content_text'><LocationO fontSize='3vw' />{data.address}</div>;
    } else {
        return null;
    }
};

const fosterDataShow = ({ data, imgShow = true, btnShow = true, textType = 'mix', description, onClick }) => {
    const navigate = useNavigate();
    return (
        <div className="fosterDataShow-item" onClick={onClick || undefined}>
            {imgShow? <img src={data.img} alt="" /> : ''}
            <div className="fosterDataShow__text">
                <div className='fosterDataShow__title_flex'>
                    <div className='fosterDataShow__title_flexLeft'>
                        <div className='fosterDataShow__title'>{data.storeName}</div>
                        {description? '' : <Rate allowHalf value={data.rating} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' />}
                    </div>
                    {btnShow? <button onClick={() => navigate(`/foster/storeDetails/${data.id}`)}>咨询</button> : ''}
                </div>
                <div className='fosterDataShow__content'>
                    {description? description : getContentBasedOnTextType(data, textType)}
                </div>
            </div>
        </div>
    );
};

export default fosterDataShow;