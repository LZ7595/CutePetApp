import { Cell, Image, Button, Typography } from 'react-vant';
import ImageLayout from '@/components/ImageLayout';
import InteractionBar from '@/components/InteractionBar';
import '@/scss/usertab.scss';

const usertab = ({ textAboveImage = true }) => {
    // 创建一个类名，根据textAboveImage的值来决定是否添加text - below - image类名
    const contentClass = textAboveImage ? '' : 'text-below-image';

    return (
        <>
            <div className="user-tab">
                <Cell
                    center
                    title='王小样'
                    label={'北京市  1分钟前'}
                    icon={<Image src='/src/assets/2323.jpg' round />}
                    value={<Button round>关注</Button>}
                />
            </div>
            <div className={`user-content ${contentClass}`}>
                <ImageLayout showType='grid' imageUrls={['/src/assets/2323.jpg', '/src/assets/6.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg', '/src/assets/2323.jpg']} />
                <div className='user-content-text'>
                    <Typography.Text>
                        Vant 是一套轻量、可靠的移动端 Vue
                        组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                    </Typography.Text>
                </div>
            </div>
            <div className="user-bar">
                <InteractionBar />
            </div>
        </>
    );
};

export default usertab;