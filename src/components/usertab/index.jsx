import { Cell, Image, Typography } from 'react-vant';
import { useNavigate } from 'react-router-dom';
import ImageLayout from '@/components/ImageLayout';
import InteractionBar from '@/components/InteractionBar';
import FollowButton from '@/components/followButton';
import { getRelativeTime } from '@/utils/date';
import './index.scss';

const usertab = ({ data = {
    "dynamicId": "123456",
    "author": {
        "userId": "7890",
        "userName": "小明",
        "avatarUrl": "/src/assets/椭圆形-5.jpg"
    },
    "publishTime": 1620000000000,
    "publishLocation": "三亚市",
    "textContent": "今天去了美丽的海边，心情超好~",
    "mediaList": [
        {
            "mediaId": "img123",
            "mediaType": "image",
            "mediaUrl": "/src/assets/2323.jpg",
            "mediaDescription": "海边的日落"
        },
        {
            "mediaId": "img456",
            "mediaType": "image",
            "mediaUrl": "/src/assets/6.jpg",
            "mediaDescription": "沙滩上的脚印"
        },
        {
            "mediaId": "img456",
            "mediaType": "image",
            "mediaUrl": "/src/assets/6.jpg",
            "mediaDescription": "沙滩上的脚印"
        }
    ],
    "likeCount": 5, // 点赞数
    "forwardCount": 2, // 转发数
    "commentCount": 3, // 评论数
    "likeList": [
        {
            "userId": "1111",
            "likeTime": 1620000100000,
            "avatarUrl": "/src/assets/椭圆形.jpg"
        },
        {
            "userId": "2222",
            "likeTime": 1620000200000,
            "avatarUrl": "/src/assets/椭圆形-2.jpg"
        },
        {
            "userId": "3333",
            "likeTime": 1620000300000,
            "avatarUrl": "/src/assets/椭圆形-3.jpg"
        },
        // 假设这里还有其他点赞用户信息，但只取前三个展示头像
    ]
}
    , textAboveImage = true, showType = 'LocationTimeBtn', ImgShowType = 'grid', dynamicLink }) => {
    // 创建一个类名，根据textAboveImage的值来决定是否添加text - below - image类名
    const contentClass = textAboveImage ? '' : 'text-below-image';
    const { dynamicId, author, publishTime, publishLocation, mediaList, textContent, likeCount, forwardCount, commentCount, likeList } = data;
    const relativeTime = getRelativeTime(publishTime);
    const relativeTimeFull = getRelativeTime(publishTime, 'full');
    const navigate = useNavigate();

    return (
        <>
            <div className="user-tab">
                <Cell
                    center
                    title={author.userName}
                    label={showType === 'LocationTimeBtn' ? `${publishLocation} ${relativeTime}` : showType === 'animalTypeBtn' || showType === 'animalTypeTime' || showType === 'animalTypeBtnTime' ? '不拉多尔-泡芙' : ''}
                    icon={<Image src={author.avatarUrl} round />}
                    value={showType === 'LocationTimeBtn' || showType === 'animalTypeBtn' || showType === 'animalTypeBtnTime' ? <FollowButton/> : showType === 'animalTypeTime' ? <span className='user-tab-time'>{relativeTime}</span> : ''}
                />
                <div className={`user-content ${contentClass}`} onClick={() => {
                        if (dynamicLink) {
                            navigate(`/about/dynamic/${dynamicId}`);
                        }
                    }}>
                    <ImageLayout showType={ImgShowType} imageUrls={mediaList} />
                    <div className='user-content-text'>
                        <Typography.Text>
                            {textContent}
                        </Typography.Text>
                    </div>
                </div>
                <div className="user-bar">
                    {showType === 'animalTypeBtnTime' ?  <span className='user-tab-time'>{relativeTimeFull}</span> :<InteractionBar data={{ likeCount, forwardCount, commentCount, likeList }} />}
                </div>
            </div>
        </>
    );
};

export default usertab;