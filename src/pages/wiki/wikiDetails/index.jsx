import { useParams } from 'react-router-dom';
import WikiItem from '@/components/wikiItem';
import './index.scss'
const ArticleContent = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};
const wikiDetails = () => {
    const { wikiId } = useParams();
    const data = [
        {
            id: 1,
            imgSrc: '/src/assets/cd.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '狗狗是人类的好朋友，但有时候它们会对狗窝表现出不情愿。<img src="/src/assets/cd.png" alt="狗狗站在狗窝旁，一脸疑惑">也许是狗窝的位置不合适，或者狗窝的尺寸、舒适度等方面不符合狗狗的需求。',
            publishDate: '2024-10-15'
        },
        {
            id: 2,
            imgSrc: '/src/assets/矩形备份 2.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '狗狗的睡眠习惯也可能影响它们对狗窝的选择。<img src="/src/assets/矩形备份 2.png" alt="狗狗在房间里寻找睡觉的地方">有些狗狗喜欢安静的地方，而有些狗狗则喜欢温暖的地方。',
            publishDate: '2024-10-16'
        },
        {
            id: 3,
            imgSrc: '/src/assets/矩形备份 2.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '狗窝的材质也很重要。<img src="/src/assets/矩形备份 2.png" alt="狗狗用爪子触摸狗窝材质">有些狗狗对某些材质过敏，或者不喜欢某种材质的触感。',
            publishDate: '2024-10-17'
        },
        {
            id: 4,
            imgSrc: '/src/assets/矩形备份 2.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '如果狗狗不愿意睡狗窝，可以尝试给它提供一些舒适的垫子或者毯子。<img src="/src/assets/矩形备份 2.png" alt="狗狗躺在柔软的垫子上">也许狗狗会更喜欢柔软的东西。',
            publishDate: '2024-10-18'
        },
        {
            id: 5,
            imgSrc: '/src/assets/矩形备份 2.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '狗狗的情绪也会影响它们对狗窝的选择。<img src="/src/assets/矩形备份 2.png" alt="狗狗神情焦虑">如果狗狗感到焦虑或者不安，可能会不愿意睡在狗窝里。',
            publishDate: '2024-10-19'
        },
        {
            id: 6,
            imgSrc: '/src/assets/cd.png',
            title: '酷揭秘！为什呢你的狗狗不愿意睡狗窝！',
            author: '小黑',
            count: '100',
            avatarSrc: '/src/assets/矩形备份 2.png',
            content: '总之，了解狗狗的需求和喜好是很重要的。<img src="/src/assets/cd.png" alt="狗狗在舒适的新窝里睡觉">只有这样，才能为狗狗提供一个舒适的睡眠环境。',
            publishDate: '2024-10-20'
        },
    ];
    const dataItem = data.find((item) => item.id === parseInt(wikiId));
    console.log(dataItem);
    return (
        <div className="wikiDetails">
            <div className="wikiDetails__Image">
                <img src={dataItem?.imgSrc} alt={dataItem?.title} />
            </div>
            <div className="wikiDetails__content">
                <WikiItem item={dataItem} showType="Detail" />
                <div className="wikiDetails__content__text">
                    <ArticleContent content={dataItem?.content} />
                </div>
            </div>
        </div>
    );
}
export default wikiDetails;