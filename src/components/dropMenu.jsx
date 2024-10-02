import React, { useState, useEffect } from "react";
import { IndexBar, Cell, Search, Button , Empty } from 'react-vant';
import { areaList } from '@vant/area-data';
import { pinyin } from "pinyin-pro";
import '@/scss/dropmenu.scss';

const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];
const recommendedCities = [{ code: '110100', name: '北京市' }, { code: '310100', name: '上海市' }, { code: '440100', name: '广州市' }, { code: '440300', name: '深圳市' }, { code: '510100', name: '成都市' }];

const DropMenu = ({ onSelectCity }) => {
    const [activeIndex, setActiveIndex] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [indexList, setIndexList] = useState(alphabetArray.map(letter => ({
        title: letter,
        data: []
    })));
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const newIndexList = alphabetArray.map(letter => ({
            title: letter,
            data: []
        }));
        Object.keys(areaList.city_list).forEach((code) => {
            const cityName = areaList.city_list[code];
            const firstLetter = cityName.charAt(0);
            const pinyinLetter = pinyin(firstLetter, { pattern: 'first', toneType: 'none' }).toUpperCase();
            const indexItem = newIndexList.find(item => item.title === pinyinLetter || (firstLetter === '#' && item.title === '#'));
            if (indexItem) {
                indexItem.data.push({ code, name: cityName });
            }
        });
        setIndexList(newIndexList);
    }, []);

    const handleCityClick = (city) => {
        setSelectedCity(city.name);
        if (onSelectCity) {
            onSelectCity(city.name);
        }
    };

    const handleSearch = (value) => {
        const newResults = [];
        if (value) {
            Object.keys(areaList.city_list).forEach((code) => {
                const cityName = areaList.city_list[code];
                if (cityName.includes(value)) {
                    newResults.push({ code, name: cityName });
                }
            });
            setSearchResults(newResults);
            setShowSearch(true); // 显示搜索结果
        }
    };

    return (
        <div className="dropmenu">
            <div className="dropmenuTop">
                <Search
                    showAction
                    label="地区"
                    actionText={<div onClick={() => handleSearch(searchValue)}>搜索</div>}
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="请输入搜索关键词"
                />
            </div>
            {showSearch ? (
                <div className="searchRes">
                    <h3 className="searchResTitle">搜索结果<button onClick={() => setShowSearch(false)}>取消</button></h3>
                    <div className="search - results">
                        {searchResults.length <= 0 ? (
                            <Empty image="search" description="暂无搜索结果" />
                        ) : (
                            searchResults.map(city => (
                                <Cell key={city.code} title={city.name} onClick={() => handleCityClick(city)}>
                                </Cell>
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <div className="recommend">
                        <h3>推荐地区</h3>
                        <div className="recommendCityBtns">
                            {recommendedCities.map(city => (
                                <Button plain hairline className="recommendedSelectbtn" key={city.code} onClick={() => handleCityClick(city)}>
                                    {city.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <IndexBar indexList={alphabetArray} activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}>
                        {indexList.map(item => (
                            <>
                                <IndexBar.Anchor index={item.title} key={item.title} />
                                {item.data.map(city => (
                                    <Cell key={city.code} title={city.name} onClick={() => handleCityClick(city)}>
                                    </Cell>
                                ))}
                            </>
                        ))}
                    </IndexBar>
                </>
            )}
        </div>
    );
};

export default DropMenu;