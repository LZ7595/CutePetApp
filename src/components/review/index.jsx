import { Rate, ImagePreview } from "react-vant"
import "./index.scss"

const review = ({ data }) => {
    return (
        <div className="review-item">
            <div className="review-item__top">
                <img className="review-item__img" src={data.commenterAvatar} />
                <div className="review-item__top--info">
                    <div className="review-item__top--info--top">
                        <div className="review-item__top--info--name">{data.commenter}</div>
                        <div className="review-item__top--info--date">{data.publishDate}</div>
                    </div>
                    <div className="review-item__top--info--bottom">
                        <Rate allowHalf value={data.score} size='2.66667vw' gutter='0.53vw' readOnly voidColor='#FCCB30' color='#FCCB30' />
                    </div>
                </div>
            </div>
            <div className="review-item__content">
                <div className="review-item__content--img">
                    {data.img && data.img.length > 0 && data.img.map((item, index) => {
                        return (
                            <img key={index} src={item} onClick={() =>
                                ImagePreview.open({
                                    lazyload: true,
                                    images: data.img
                                })} />
                        )
                    })
                    }
                </div>
                <div className="review-item__content--text">
                    {data.commentText}
                </div>
            </div>
        </div>
    )
}
export default review