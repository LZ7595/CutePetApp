import Nav from '@/components/navbar';
import { Uploader } from 'react-vant';
import { Plus } from '@react-vant/icons';
import './index.scss'
const publish = () => {
    return (
        <div className='publish'>
            <Nav title="发布动态" showLeftArrow={true} clickLeft />
            <div className="publish-content">
                <textarea placeholder="分享新鲜事" className="publish-textarea"></textarea>
                <div className="publish-img">
                    <Uploader
                        onChange={v => console.log(v)}
                        maxCount={9}
                        uploadIcon={<Plus/>}
                        previewSize={"29.33vw"}
                        multiple={true}
                    />
                </div>
            </div>
            <div className="publish-btn">
                <button>立即发布</button>
            </div>
        </div>
    )

}
export default publish