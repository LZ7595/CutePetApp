import './index.scss'

const wikiItem = ({ item, onClick, showType = "list" }) => {
    return (
        <div key={item.id} className="wikiIndex__content__item" onClick={onClick}>
            {showType === "list" ? <img src={item.imgSrc} alt="" /> : ''}
            <div className="wikiIndex__content__item__info">
                <div className="wikiIndex__content__item__info__title">
                    {item.title}
                </div>
                <div className="wikiIndex__content__item__info__desc">
                    <div className="wikiIndex__content__item__info__desc__left">
                        <img src={item.avatarSrc} alt="" />
                        <div>{item.author}</div>
                    </div>
                    <div className="wikiIndex__content__item__info__desc__right">
                        <div>{showType === "list" ? item.count : item.publishDate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default wikiItem