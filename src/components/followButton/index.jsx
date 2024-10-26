import './index.scss';
import { useState } from 'react';

const followButton = ({ userId }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <div className="followButton">
            <button
                className={`followButton__button ${isFollowed? 'followed' : ''}`}
                onClick={handleFollowClick}
            >
                {isFollowed? <svg t="1729956666970" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5230"><path d="M384 768c-12.8 0-21.333333-4.266667-29.866667-12.8l-213.333333-213.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0L384 665.6 823.466667 226.133333c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334l-469.333333 469.333333c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z" p-id="5231"></path></svg>
                :<svg t="1729955943459" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4255"><path d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z" p-id="4256"></path></svg>
                }
                {isFollowed? '已关注' : '关注'}
            </button>
        </div>
    );
};

export default followButton;