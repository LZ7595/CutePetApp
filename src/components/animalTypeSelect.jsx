import { Popup } from "react-vant"
import { useState } from "react";
import Nav from "@/components/navbar"
import PetSwitch from "@/components/PetSwitch";

const animalTypeSelect = ({ onSelect , setShowAnimalTypeSelect , form  }) => {
    const dogBreeds = [
        {
            "breed": "拉布拉多寻回犬",
            "description": "拉布拉多寻回犬个性忠诚、大气、憨厚、温和、阳光、开朗、活泼，智商极高，也对人很友善，是非常适合被选作经常出入公共场合的导盲犬或地铁警犬及搜救犬和其他工作犬的狗品种。",
            "origin": "加拿大纽芬兰与拉布拉多省",
            "size": "大型犬",
            "temperament": ["友善", "温和", "聪明", "活泼"]
        },
        {
            "breed": "边境牧羊犬",
            "description": "边境牧羊犬具有强烈的牧羊本能，天性聪颖、善于察言观色，能准确明白主人的指示，可借由眼神的注视而驱动羊群移动或旋转，被当成牧羊犬已有多年的历史，在世界犬种智商排行第一名。",
            "origin": "英国",
            "size": "中型犬",
            "temperament": ["聪明", "警觉", "热情", "好动"]
        },
        {
            "breed": "德国牧羊犬",
            "description": "德国牧羊犬体型高大，外观威猛，且具备极强的工作能力。它们经常被部署各种任务，例如警用犬、搜救犬、导盲犬等，性格坚强，神经稳定，不胆怯，在没有刺激的情况下很温顺、警惕而且驯服。",
            "origin": "德国",
            "size": "大型犬",
            "temperament": ["勇敢", "忠诚", "顺从", "警惕"]
        },
        {
            "breed": "贵宾犬",
            "description": "贵宾犬也称“贵妇犬”，是一种非常聪明且喜欢狩猎的犬种，据猜测贵妇犬起源于德国，在那儿它以水中捕猎犬而著称。贵宾犬根据体型大小被AKC标准分为标准型、迷你型、玩具型。贵宾犬气质独特，造型多变，赢得了许多人的欢心。",
            "origin": "德国（有争议）",
            "size": "有多种体型（标准型、迷你型、玩具型）",
            "temperament": ["聪明", "活泼", "性情优良", "极易近人"]
        },
        {
            "breed": "博美犬",
            "description": "博美犬是一种紧凑、短背、活跃的玩赏犬，学名哈多利系博美犬（俗称英系博美犬），是德国狐狸犬的一种，原产德国。它拥有柔软、浓密的底毛和粗硬的皮毛。尾根位置很高，长有浓密饰毛的尾巴卷放在背上。它具有警惕的性格、聪明的表情、轻快的举止和好奇的天性。",
            "origin": "德国",
            "size": "小型犬",
            "temperament": ["警惕", "聪明", "活泼", "好奇"]
        },
        {
            "breed": "柴犬",
            "description": "柴犬是体型中等并且又最古老的日本犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动；对自己喜欢的玩具、会一天到晚的把玩。对外有极强的攻击性：特别是对大型同类，并且不服输。",
            "origin": "日本",
            "size": "中型犬",
            "temperament": ["活泼", "好动", "忠诚", "固执"]
        },
        {
            "breed": "萨摩耶犬",
            "description": "萨摩耶犬原是西伯利亚的原住民萨摩耶族培育出的犬种，它机警、强壮、灵活、美丽、高贵优雅、乖巧可爱，有着非常引人注目的外表，有“微笑天使”的称号，也有着“捣蛋魔鬼”的内心。萨摩耶犬的颜色为白色，部分带有很浅的浅棕色、奶酪色、浅棕色。",
            "origin": "西伯利亚",
            "size": "中型犬",
            "temperament": ["温和", "友善", "忠诚", "活泼"]
        }
    ];
    const [selectedPet, setSelectedPet] = useState('dog');

    const handleClose = () => {
        if (setShowAnimalTypeSelect) {
            setShowAnimalTypeSelect(false);
        }
    };
    const handleSelectType = (breed) => {
        onSelect(breed);
        if (form) {
            form.setFieldsValue({ animalType: breed });
        }
        handleClose();
    };

    const handlePetSelected = (pet) => {
        setSelectedPet(pet);
    };
    return (
        <>
        <Nav showLeftArrow={true}  clickLeft={handleClose} title={<PetSwitch onPetSelected={handlePetSelected} />} />
        
        </>
    )
}
export default animalTypeSelect;