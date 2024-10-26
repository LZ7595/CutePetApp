import { Cell, Image, Button, Typography } from 'react-vant';
import ImageLayout from '@/components/ImageLayout';
import InteractionBar from '@/components/InteractionBar';
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
    , textAboveImage = true, showType = 'LocationTimeBtn', ImgShowType = 'grid' }) => {
    // 创建一个类名，根据textAboveImage的值来决定是否添加text - below - image类名
    const contentClass = textAboveImage ? '' : 'text-below-image';
    const { dynamicId, author, publishTime, publishLocation, mediaList, textContent, likeCount, forwardCount, commentCount, likeList } = data;
    function getRelativeTime(publishTimeStamp) {
        const currentTimeStamp = Date.now();
        const oneHourInMillis = 60 * 60 * 1000;
        const oneDayInMillis = 24 * 60 * 60 * 1000;
        const oneWeekInMillis = 7 * oneDayInMillis;

        const diffInMillis = currentTimeStamp - publishTimeStamp;

        if (diffInMillis < oneHourInMillis) {
            const minutes = Math.floor(diffInMillis / (60 * 1000));
            return `${minutes}分钟前`;
        } else if (diffInMillis < oneDayInMillis) {
            const hours = Math.floor(diffInMillis / (60 * 60 * 1000));
            return `${hours}小时前`;
        } else if (diffInMillis < oneWeekInMillis) {
            const days = Math.floor(diffInMillis / oneDayInMillis);
            return `${days}天前`;
        } else {
            const publishDate = new Date(publishTimeStamp);
            const year = publishDate.getFullYear();
            const month = String(publishDate.getMonth() + 1).padStart(2, '0');
            const day = String(publishDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    }
    const relativeTime = getRelativeTime(publishTime);
    return (
        <>
            <div className="user-tab">
                <Cell
                    center
                    title={author.userName}
                    label={showType === 'LocationTimeBtn' ? `${publishLocation} ${relativeTime}` : showType === 'animalTypeBtn' || showType === 'animalTypeTime' ? '不拉多尔-泡芙' : ''}
                    icon={<Image src={author.avatarUrl} round />}
                    value={showType === 'LocationTimeBtn' || showType === 'animalTypeBtn' ? <Button round>关注</Button> : showType === 'animalTypeTime' ? <span className='user-tab-time'>{relativeTime}</span> : ''}
                />
                <div className={`user-content ${contentClass}`}>
                    <ImageLayout showType={ImgShowType} imageUrls={mediaList} />
                    <div className='user-content-text'>
                        <Typography.Text>
                            {textContent}
                        </Typography.Text>
                    </div>
                </div>
                <div className="user-bar">
                    <InteractionBar data={{ likeCount, forwardCount, commentCount, likeList }} />
                </div>
            </div>
        </>
    );
};

export default usertab;