import { IndexBar, Cell, Search, Empty, Image } from "react-vant"
import { useState, useEffect } from "react";
import { pinyin } from "pinyin-pro";
import Nav from "@/components/navbar"
import PetSwitch from "@/components/PetSwitch";
import "@/scss/animalTypeSelect.scss"

const animalTypeSelect = ({ onSelect, setShowAnimalTypeSelect, form }) => {
    const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const dogBreeds = [
        {
            "breed": "拉布拉多寻回犬",
            "description": "拉布拉多寻回犬个性忠诚、大气、憨厚、温和、阳光、开朗、活泼，智商极高，也对人很友善，是非常适合被选作经常出入公共场合的导盲犬或地铁警犬及搜救犬和其他工作犬的狗品种。",
            "origin": "加拿大纽芬兰与拉布拉多省",
            "size": "大型犬",
            "temperament": ["友善", "温和", "聪明", "活泼"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "边境牧羊犬",
            "description": "边境牧羊犬具有强烈的牧羊本能，天性聪颖、善于察言观色，能准确明白主人的指示，可借由眼神的注视而驱动羊群移动或旋转，被当成牧羊犬已有多年的历史，在世界犬种智商排行第一名。",
            "origin": "英国",
            "size": "中型犬",
            "temperament": ["聪明", "警觉", "热情", "好动"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "德国牧羊犬",
            "description": "德国牧羊犬体型高大，外观威猛，且具备极强的工作能力。它们经常被部署各种任务，例如警用犬、搜救犬、导盲犬等，性格坚强，神经稳定，不胆怯，在没有刺激的情况下很温顺、警惕而且驯服。",
            "origin": "德国",
            "size": "大型犬",
            "temperament": ["勇敢", "忠诚", "顺从", "警惕"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "贵宾犬",
            "description": "贵宾犬也称“贵妇犬”，是一种非常聪明且喜欢狩猎的犬种，据猜测贵妇犬起源于德国，在那儿它以水中捕猎犬而著称。贵宾犬根据体型大小被AKC标准分为标准型、迷你型、玩具型。贵宾犬气质独特，造型多变，赢得了许多人的欢心。",
            "origin": "德国（有争议）",
            "size": "有多种体型（标准型、迷你型、玩具型）",
            "temperament": ["聪明", "活泼", "性情优良", "极易近人"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "博美犬",
            "description": "博美犬是一种紧凑、短背、活跃的玩赏犬，学名哈多利系博美犬（俗称英系博美犬），是德国狐狸犬的一种，原产德国。它拥有柔软、浓密的底毛和粗硬的皮毛。尾根位置很高，长有浓密饰毛的尾巴卷放在背上。它具有警惕的性格、聪明的表情、轻快的举止和好奇的天性。",
            "origin": "德国",
            "size": "小型犬",
            "temperament": ["警惕", "聪明", "活泼", "好奇"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "柴犬",
            "description": "柴犬是体型中等并且又最古老的日本犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动；对自己喜欢的玩具、会一天到晚的把玩。对外有极强的攻击性：特别是对大型同类，并且不服输。",
            "origin": "日本",
            "size": "中型犬",
            "temperament": ["活泼", "好动", "忠诚", "固执"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "萨摩耶犬",
            "description": "萨摩耶犬原是西伯利亚的原住民萨摩耶族培育出的犬种，它机警、强壮、灵活、美丽、高贵优雅、乖巧可爱，有着非常引人注目的外表，有“微笑天使”的称号，也有着“捣蛋魔鬼”的内心。萨摩耶犬的颜色为白色，部分带有很浅的浅棕色、奶酪色、浅棕色。",
            "origin": "西伯利亚",
            "size": "中型犬",
            "temperament": ["温和", "友善", "忠诚", "活泼"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        }
    ];
    const catBreeds = [
        {
            "breed": "波斯猫",
            "description": "波斯猫是以阿富汗的土种长毛猫和土耳其的安哥拉长毛猫为基础，在英国经过100多年的选种繁殖，于1860年诞生的一个品种。它有一张讨人喜欢的面庞，长而华丽的被毛，优雅的举止，故有“猫中王子”、“王妃”之称，是世界上爱猫者最喜欢的纯种猫之一，占有极其重要的地位。",
            "origin": "英国（由阿富汗和土耳其猫培育而来）",
            "size": "喵星人",
            "temperament": ["安静", "温柔", "慵懒", "亲人"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "暹罗猫",
            "description": "暹罗猫是世界著名的短毛猫，也是短毛猫的代表品种。暹罗猫最早被认可的毛色为海豹重点色，之后又有蓝色重点色、巧克力重点色、淡紫重点色等毛色被认可。这种猫性格刚烈好动，机智灵活，好奇心特强，善解人意。",
            "origin": "泰国（旧称暹罗）",
            "size": "喵星人",
            "temperament": ["聪明", "好动", "好奇", "忠诚"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "缅因猫",
            "description": "缅因猫因原产于美国缅因州而得名，是北美自然产生的第一个长毛猫品种。缅因猫体格强壮，被毛厚密，长像与西伯利亚森林猫相似，在猫类中亦属大体型的品种。缅因猫性情温顺，对人亲近，聪明独立，善解人意，是良好的宠物。",
            "origin": "美国缅因州",
            "size": "喵星人",
            "temperament": ["温顺", "亲近人", "聪明", "独立"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "布偶猫",
            "description": "布偶猫，又称“布拉多尔猫”，是一种杂交品种。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。布偶猫较为温顺好静，对人友善。",
            "origin": "美国",
            "size": "喵星人",
            "temperament": ["温顺", "好静", "友善", "宽容"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "英国短毛猫",
            "description": "英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫。",
            "origin": "英国",
            "size": "喵星人",
            "temperament": ["温柔", "平静", "友善", "易饲养"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "中华田园猫",
            "description": "中华田园猫是对中国本土家猫类的统称。其中又有狸花猫、橘猫（黄狸）、四川简州猫（四耳猫）、三花猫、白猫、黑猫（玄猫）等多个品种。它们适应能力强，体质好，性格独立，捕猎能力佳，是非常优秀的家猫品种。",
            "origin": "中国",
            "size": "喵星人",
            "temperament": ["独立", "适应力强", "聪明", "活泼"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        },
        {
            "breed": "斯芬克斯无毛猫",
            "description": "斯芬克斯无毛猫是加拿大安大略省多伦多市养猫爱好者在1966年从一窝几乎是无毛的猫仔中，经过近交选育，特意为对猫毛过敏的爱猫者培育成的。这种猫除了在耳、口、鼻、尾前段、脚等部位有些又薄又软的胎毛外，其它全身部分均无毛，皮肤多皱有弹性。斯芬克斯无毛猫性情温顺，聪明可爱，表情丰富。",
            "origin": "加拿大",
            "size": "喵星人",
            "temperament": ["温顺", "聪明", "好奇", "亲人"],
            "imgUrl": "/src/assets/椭圆形-3.jpg"
        }
    ];
    const [activeIndex, setActiveIndex] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [selectedPetType, setSelectedPetType] = useState(null);
    const [selectedPet, setSelectedPet] = useState('dog');
    const [indexList, setIndexList] = useState(alphabetArray.map(letter => ({
        title: letter,
        data: []
    })));
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const newIndexList = alphabetArray.map(letter => ({
        title: letter,
        data: []
    }));

    const handleClose = () => {
        if (setShowAnimalTypeSelect) {
            setShowAnimalTypeSelect(false);
        }
    };

    const handlePetSelected = (pet) => {
        setSelectedPet(pet);
        setShowSearch(false);
        setSearchValue('');
    };
    const handlePetTypeClick = (breed, petType, size) => {
        setSelectedPetType(breed);

        // 构造一个对象来传递宠物品种和类型  
        const selectedPetInfo = {
            breed: breed,
            type: petType,
            size: size
        };

        if (onSelect) {
            onSelect(selectedPetInfo); // 传递包含品种和类型的对象  
        }

        if (form) {
            form.setFieldsValue({ animalType: selectedPetInfo });
        }

        handleClose();
    };

    const handleSearch = (value) => {
        const newResults = [];
        if (value) {
            let searchBreed = selectedPet === 'dog' ? dogBreeds : selectedPet === 'cat' ? catBreeds : '';
            searchBreed.map(({ breed, imgUrl }) => {
                if (breed.includes(value)) {
                    newResults.push({ breed, imgUrl });
                }
            })
            setSearchResults(newResults);
            setShowSearch(true); // 显示搜索结果
        }
    }

    useEffect(() => {

        let selectedBreed = selectedPet === 'dog' ? dogBreeds : selectedPet === 'cat' ? catBreeds : '';
        selectedBreed.map(({ breed, imgUrl, size }) => {
            const firstLetter = breed.charAt(0);
            const pinyinLetter = pinyin(firstLetter, { pattern: 'first', toneType: 'none' }).toUpperCase();
            const indexItem = newIndexList.find(item => item.title === pinyinLetter);
            if (indexItem) {
                indexItem.data.push({ breed, imgUrl, size });
            }
        })
        setIndexList(newIndexList);
    }, [selectedPet]);
    return (
        <div className="animal-type-select-container">
            <Nav showLeftArrow={true} clickLeft={handleClose} title={<PetSwitch onPetSelected={handlePetSelected} />} />
            <Search value={searchValue} onChange={setSearchValue} clearable placeholder="请输入爱宠类型" onSearch={() => handleSearch(searchValue)} />
            <div className="animal-type-select">
                {showSearch ? (
                    <div className="searchRes">
                        <h3 className="searchResTitle">搜索结果<button onClick={() => setShowSearch(false)}>取消</button></h3>
                        <div className="search-results">
                            {searchResults.length <= 0 ? (
                                <Empty image="search" description="暂无搜索结果" />
                            ) : (
                                searchResults.map(({ breed, imgUrl, size }) => (
                                    <Cell
                                        key={breed}
                                        title={breed}
                                        icon={<Image width="13.33vw" height="13.33vw" src={imgUrl} round />}
                                        onClick={() => handlePetTypeClick(breed, selectedPet, size)} />
                                ))
                            )}
                        </div>
                    </div>
                ) : (
                    <IndexBar activeIndex={activeIndex} onSelect={(index) => setActiveIndex(index)}>
                        {indexList.map(({ title, data }) => (
                            <>
                                {data.length > 0 ? <IndexBar.Anchor index={title} key={title} /> : null}
                                {data.map(({ breed, imgUrl, size }) => (
                                    <Cell
                                        key={breed}
                                        title={breed}
                                        icon={<Image width="13.33vw" height="13.33vw" src={imgUrl} round />}
                                        onClick={() => handlePetTypeClick(breed, selectedPet, size)} />
                                ))}
                            </>
                        ))}
                    </IndexBar>
                )}
            </div>
        </div>
    )
}
export default animalTypeSelect;