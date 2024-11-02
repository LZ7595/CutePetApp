import { Search, Popup } from "react-vant";
import { useNavigate } from "react-router-dom";
import { DeleteO, Cross } from "@react-vant/icons";
import { useState, useEffect } from "react";
import Usertab from "@/components/usertab";
import FollowButton from "@/components/followButton";
import "./index.scss";

const search = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    // 新增状态变量，表示是否处于搜索模式
    const [searchHistory, setSearchHistory] = useState([]);
    const [visible, setVisible] = useState(false)
    const [recommendedData, setRecommendedData] = useState(['推荐数据1', '推荐数据2', '推荐数据3', '推荐数据4', '推荐数据5']);
    // 新增状态变量，表示是否处于删除模式
    const [isDeleteMode, setIsDeleteMode] = useState(false);

    // 从localStorage中获取搜索历史数据并设置到状态中
    useEffect(() => {
        const storedHistory = localStorage.getItem('searchHistory');
        if (storedHistory) {
            setSearchHistory(JSON.parse(storedHistory));
        }
    }, []);

    // 当搜索历史数据有变化时，更新localStorage
    useEffect(() => {
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    useEffect(() => {
        // 模拟从后端获取推荐数据
        const fetchRecommendedData = async () => {
            try {
                const response = await fetch('/api/recommended-data');
                const data = await response.json();
                setRecommendedData(data);
            } catch (error) {
                console.error('获取推荐数据失败:', error);
            }
        };
        fetchRecommendedData();
    });
    const MAX_LENGTH = 10; // 设置显示的最大字数，可根据需求调整


    const handleSearchSearch = (value) => {
        // 如果searchHistory中有value，先去掉该值
        const updatedHistory = searchHistory.filter(item => item !== value);

        // 添加新值
        updatedHistory.push(value);

        // 如果长度超过10，删除最早的值
        if (updatedHistory.length > 10) {
            updatedHistory.shift();
        }

        setSearchHistory(updatedHistory);
    };

    const handleToggleDeleteMode = () => {
        setIsDeleteMode(!isDeleteMode);
    };

    const handleDeleteSearchHistoryItem = (event, itemToDelete) => {
        event.stopPropagation(); // 阻止事件冒泡
        const updatedHistory = searchHistory.filter(item => item !== itemToDelete);
        setSearchHistory(updatedHistory);
    };

    const getTruncatedText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="about-search">
            <Search
                value={value}
                onChange={setValue}
                placeholder="请输入搜索关键词"
                action={<button onClick={() => navigate('/home/about')}>取消</button>}
                onSearch={handleSearchSearch}
            />
            <div className="about-content">
                <div className="search-mode-about-content">
                    {searchHistory?.length ? <div className="search-mode-about-content-history">
                        <div className="search-mode-about-content-title">
                            <p>搜索历史</p>
                            {isDeleteMode ? <div className="delete-btn"><button onClick={() => setVisible(true)}>全部删除</button> <button onClick={() => handleToggleDeleteMode()}>完成</button></div> : <button className="deleteBtn" onClick={() => handleToggleDeleteMode()}><DeleteO /></button>}
                        </div>
                        <ul>
                            {searchHistory.slice().reverse().map((historyItem, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSearchSearch(historyItem)}
                                >
                                    {getTruncatedText(historyItem, MAX_LENGTH)}
                                    {isDeleteMode && (
                                        <button
                                            className="delete-button"
                                            onClick={(event) => handleDeleteSearchHistoryItem(event, historyItem)}
                                        >
                                            <Cross />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div> : ''}
                    <div className="search-mode-about-content-recommend">
                        <div className="search-mode-about-content-title">
                            <p>热门搜索</p>
                        </div>
                        <ul>
                            {recommendedData.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSearchSearch(item)}
                                >
                                    {getTruncatedText(item, MAX_LENGTH)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="publish-btn">
                        <button onClick={() => navigate('/about/publish')}>立即发布</button>
                    </div>
                    <Popup visible={visible} onClose={() => setVisible(false)} round>
                        <div className="popup-content">
                            <p>确定要删除全部搜索历史吗？</p>
                            <div className="popup-buttons">
                                <button onClick={() => setVisible(false)}>取消</button>
                                <button onClick={() => {
                                    setSearchHistory([]);
                                    setVisible(false);
                                }}>确定</button>
                            </div>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default search;