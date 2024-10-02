import { ImagePreview } from 'react-vant'
import "@/scss/ImageLayout.scss"

const ImageLayout = ({ imageUrls, showType = 'straight' }) => {
    const numImages = imageUrls.length;
    const rows = [];

    switch (showType) {
        case 'straight':
            if (numImages === 1) {
                rows.push(<img src={imageUrls[0]} key={1} className='single-image'
                    onClick={() =>
                        ImagePreview.open({
                            lazyload: true,
                            images: imageUrls
                        })} />);
            } else if (numImages >= 2) {
                rows.push(
                    <div className='straight-images-row'>
                        {imageUrls.map((url, index) => {
                            return <img src={url} key={index}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: imageUrls,
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
                rows.push(<img src={imageUrls[0]} key={1} className='single-image'
                    onClick={() =>
                        ImagePreview.open({
                            lazyload: true,
                            images: imageUrls,
                        })}
                />);
            } else if (numImages >= 2 && numImages <= 4) {
                rows.push(
                    <div className='two-images-row'>
                        {imageUrls.map((url, index) => {
                            return <img src={url} key={index}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: imageUrls,
                                        startPosition: index,
                                    })}
                            />;
                        })}
                    </div>
                );
            } else if (numImages >= 5) {
                rows.push(
                    <div className='three-images-row'>
                        {imageUrls.map((url, index) => {
                            return <img src={url} key={index}
                                onClick={() =>
                                    ImagePreview.open({
                                        lazyload: true,
                                        images: imageUrls,
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