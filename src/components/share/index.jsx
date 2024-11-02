import { useState } from "react"
import { ShareSheet } from 'react-vant'
import { ShareO } from "@react-vant/icons"

const share = () => {
    const [shareShow, setShareShow] = useState(false)

    const StoreShare = () => {
        setShareShow(true)
    }
    const options = [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
    ]
    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            console.log('链接已复制到剪贴板');
        } catch (err) {
            console.error('复制链接失败:', err);
        }
    };
    return (
        <>
            <button onClick={StoreShare}><ShareO /></button>
            <ShareSheet
                overlay={true}
                visible={shareShow}
                options={options}
                title='分享到'
                cancelText=''
                onCancel={() => setShareShow(false)}
                onSelect={(option, index) => {
                    copyLink()
                    console.log('option', option)
                    console.log('index', index)
                    setShareShow(false)
                }}
            />
        </>
    )
}
export default share