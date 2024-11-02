import { ImagePreview } from 'react-vant';
import "./index.scss";

const ImageLayout = ({ imageUrls, showType = 'straight' }) => {
    const processedImageUrls = Array.isArray(imageUrls) && imageUrls.length > 0 && typeof imageUrls[0] === 'object'
       ? imageUrls.map((media) => ({
            url: media.mediaUrl,
            alt: media.mediaDescription,
            key: media.mediaId || imageUrls.indexOf(media)
        }))
        : imageUrls.map((url, index) => ({ url, alt: '', key: index }));

    const numImages = processedImageUrls.length;

    const handleImageClick = (index) => (event) => {
        event.stopPropagation();
        ImagePreview.open({
            lazyload: true,
            images: processedImageUrls.map(({ url }) => url),
            startPosition: index,
        });
    };

    const generateImageElements = () => {
        if (showType === 'straight') {
            if (numImages === 1) {
                return <img src={processedImageUrls[0].url} key={processedImageUrls[0].key} className='single-image' alt={processedImageUrls[0].alt}
                    onClick={handleImageClick(0)} />;
            } else if (numImages >= 2) {
                return (
                    <div className='straight-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => (
                            <img src={url} key={key} alt={alt} onClick={handleImageClick(index)} />
                        ))}
                    </div>
                );
            }
        } else if (showType === 'grid') {
            if (numImages === 1) {
                return <img src={processedImageUrls[0].url} key={processedImageUrls[0].key} className='single-image' alt={processedImageUrls[0].alt}
                    onClick={handleImageClick(0)} />;
            } else if (numImages >= 2 && numImages <= 4) {
                return (
                    <div className='two-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => (
                            <img src={url} key={key} alt={alt} onClick={handleImageClick(index)} />
                        ))}
                    </div>
                );
            } else if (numImages >= 5) {
                return (
                    <div className='three-images-row'>
                        {processedImageUrls.map(({ url, alt, key }, index) => (
                            <img src={url} key={key} alt={ast} onClick={handleImageClick(index)} />
                        ))}
                    </div>
                );
            }
        }
    };

    return <div className='image-layout'>
        {generateImageElements()}
    </div>;
};

export default ImageLayout;