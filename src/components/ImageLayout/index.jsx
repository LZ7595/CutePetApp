import { ImagePreview } from 'react-vant';
import "./index.scss";

const ImageLayout = ({ imageUrls, showType = 'straight' }) => {
    // 判断传入的imageUrls是否是包含对象的数组（类似mediaList结构）
    const isMediaListLike = Array.isArray(imageUrls) && imageUrls.length > 0 && typeof imageUrls[0] === 'object';

    // 如果是包含对象的数组，提取出mediaUrl组成新的只包含图片链接的数组，并保留mediaDescription用于alt属性
    const processedImageUrls = isMediaListLike
        ? imageUrls.map((media, index) => ({
            url: media.mediaUrl,
            alt: media.mediaDescription,
            key: media.mediaId || index
        }))
        : imageUrls.map((url, index) => ({ url, alt: '', key: index }));

    const numImages = processedImageUrls.length;
    const rows = [];

    switch (showType) {
        case 'straight':
            if (numImages === 1) {
                rows.push(<img src={processedImageUrls[0].url} key={processedImageUrls[0].key} className='single-image' alt={processedImageUrls[0].alt}
                    onClick={() =>
                        ImagePreview.open({
                            lazyload: true,
                            images: processedImageUrls.map(({ url }) => url)
                        })} />);
            } else if (numImages >= 2) {
                rows.push(
                    <div className='straight-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => {
                            return <img src={url} key={key} alt={alt}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: processedImageUrls.map(({ url }) => url),
                                        startPosition: index,

                                    })}
                            />;
                        })}
                    </div>
                );
            } else {
                console.log('错误');
            }
            break;
        case 'grid':
            if (numImages === 1) {
                rows.push(<img src={processedImageUrls[0].url} key={processedImageUrls[0].key} className='single-image' alt={processedImageUrls[0].alt}
                    onClick={() =>
                        ImagePreview.open({
                            lazyload: true,
                            images: processedImageUrls.map(({ url }) => url),
                        })}
                />);
            } else if (numImages >= 2 && numImages <= 4) {
                rows.push(
                    <div className='two-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => {
                            return <img src={url} key={key} alt={alt}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: processedImageUrls.map(({ url }) => url),
                                        startPosition: index,
                                    })}
                            />;
                        })}
                    </div>
                );
            } else if (numImages >= 5) {
                rows.push(
                    <div className='three-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => {
                            return <img src={url} key={key} alt={alt}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: processedImageUrls.map(({ url }) => url),
                                        startPosition: index,

                                    })}
                            />;
                        })
                        }
                    </div>
                )
            }
    }

    return <div className='image-layout'>
        {rows}
    </div>;
};

export default ImageLayout;