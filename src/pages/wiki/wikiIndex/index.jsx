import { useState } from 'react';
import Masonry from 'react-masonry-css';
import WikiItem from '@/components/wikiItem';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const options = ['推荐', '养犬宝典', '行为运动', '健康百科', '推荐'];

const contentItems = [
    {
        id: 1,
        imgSrc: '/src/assets/cd.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
    {
        id: 2,
        imgSrc: '/src/assets/矩形备份 2.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
    {
        id: 3,
        imgSrc: '/src/assets/矩形备份 2.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
    {
        id: 4,
        imgSrc: '/src/assets/矩形备份 2.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
    {
        id: 5,
        imgSrc: '/src/assets/矩形备份 2.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
    {
        id: 6,
        imgSrc: '/src/assets/cd.png',
        title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
        author: '小黑',
        count: '100',
        avatarSrc: '/src/assets/矩形备份 2.png',
    },
];

const WikiIndex = () => {
    const navigate = useNavigate();

    const [activeSpan, setActiveSpan] = useState(0);

    const handleSpanClick = (index) => {
        setActiveSpan(index === activeSpan ? null : index);
    };

    return (
        <div className="wikiIndex">
            <div className="wikiIndex__bar">
                {options.map((option, index) => (
                    <div key={index} className="wikiIndex__bar__title">
                        <span
                            className={activeSpan === index ? 'active' : ''}
                            onClick={() => handleSpanClick(index)}
                        >
                            {option}
                        </span>
                    </div>
                ))}
            </div>
            <div className="wikiIndex__content">
                <Masonry
                    breakpointCols={2}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {contentItems.map(item => (
                        <WikiItem item={item} onClick={() => navigate(`/wiki/wikiDetails/${item.id}`)} />
                    ))}
                </Masonry>
            </div>
        </div>
    );
};

export default WikiIndex;