import { Swiper } from "react-vant"
import './index.scss'

const banner = ({img}) => {
    const items = img.map((imgUrl, index) => (
        <Swiper.Item key={index}>
            <img src={imgUrl} alt={index} />
        </Swiper.Item>))
  return (
    <div className="banner">
                <Swiper autoplay={5000}>{items}</Swiper>
            </div>
  )
}
export default banner