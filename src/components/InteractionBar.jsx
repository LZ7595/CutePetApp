import { useState } from 'react';
import '@/scss/InteractionBar.scss'

const InteractionBar = () => {
    const [like, setLike] = useState(66)
    const [likeactive, setLikeactive] = useState(false)
    const [heart, setheart] = useState(22)
    const [heartactive, setHeartactive] = useState(false)
    const [comment, setcomment] = useState(55)
    const [commentactive, setCommentactive] = useState(false)

    const likeFun = () => {
        if (likeactive) {
            setLike(like - 1)
        } else {
            setLike(like + 1)
        }
        setLikeactive(!likeactive)
    }

    const heartFun = () => {
        if (heartactive) {
            setheart(heart - 1)
        } else {
            setheart(heart + 1)
        }
        setHeartactive(!heartactive)
    }

    const commentFun = () => {
        if (commentactive) {
            setcomment(comment - 1)
        } else {
            setcomment(comment + 1)
        }
        setCommentactive(!commentactive)
    }

    return (
        <div className="bar">
            <div className='commentAbouts'>
                <div className="container">
                    <div className="div1"><img src='/src/assets/5.jpg' /></div>
                    <div className="div2"><img src='/src/assets/5.jpg' /></div>
                    <div className="div3"><img src='/src/assets/5.jpg' /></div>
                </div>
                <span className='commentAboutsText'>等人评论过</span>
            </div>
            <div className="action-bar">
                <button className={`action-button ${likeactive ? 'active' : ''}`} onClick={() => likeFun()}>
                    <svg t="1727684045290" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26401" width="200" height="200"><path d="M966.912 406.528a114.176 114.176 0 0 0-48.896-12.288H716.8l3.072-13.824C750.08 244.48 749.056 148.224 716.8 86.272A136.96 136.96 0 0 0 583.936 8.192 94.72 94.72 0 0 0 486.4 83.456a143.872 143.872 0 0 0-3.84 29.44v10.752c0 94.72-49.408 179.2-151.04 258.304a130.56 130.56 0 0 0-51.2 102.4v378.88c0 76.8 59.904 128 145.664 128h386.56c47.104 0 72.704-38.144 91.392-75.264a388.096 388.096 0 0 0 22.528-55.552l61.184-210.432c22.528-79.36 33.536-122.112 36.096-139.008v-5.888a105.472 105.472 0 0 0-56.832-98.56zM583.936 104.96v-6.4zM812.544 896v-4.096h2.048z m0 6.144zM210.688 418.56A104.704 104.704 0 0 0 177.664 409.6H84.992a81.664 81.664 0 0 0-73.472 40.448A80.64 80.64 0 0 0 0 490.496l34.304 422.912c0 55.04 42.24 76.8 82.432 78.848h64.768a78.848 78.848 0 0 0 67.072-32 69.12 69.12 0 0 0 12.288-32.256v-430.08a83.968 83.968 0 0 0-50.176-79.36z" p-id="26402"></path></svg>
                </button>
                <span className='likes'>{like}</span>
                <button className={`action-button ${heartactive ? 'active' : ''}`} onClick={() => heartFun()}>
                    <svg t="1727681796180" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14371" width="200" height="200"><path d="M1024.549 360.609c0-170.492-133.815-309.265-298.055-309.265-81.129 0-157.91 34.998-213.344 94.701-55.509-59.702-132.367-94.701-213.344-94.701C135.49 51.344 1.751 190.041 1.751 360.609c0 5.719 0.534 10.827 0.991 15.021-0.076 1.373-0.152 2.745-0.152 4.194 0 30.193 7.319 63.361 21.73 98.59 0.458 1.295 0.915 2.516 1.449 3.657 90.812 217.844 440.412 468.474 455.279 479.985 9.227 7.092 20.205 10.6 31.263 10.6 11.209 0 22.266-3.659 31.566-10.903 12.733-9.911 310.941-224.551 429.279-427.603 4.498-6.861 7.854-13.494 10.828-19.215 0.914-1.829 1.753-3.658 2.744-5.413l0.382-0.839c0.382-0.686 0.839-1.449 1.296-2.059 7.091-13.802 12.732-26.611 17.232-39.116 12.274-32.177 18.3-60.847 18.3-87.61 0-2.058-0.077-3.888-0.229-5.414C1024.093 370.979 1024.549 366.251 1024.549 360.609z" fill="#272636" p-id="14372"></path></svg>
                </button>
                <span className='hearts'>{heart}</span>
                <button className={`action-button ${commentactive ? 'active' : ''}`} onClick={() => commentFun()}>
                    <svg t="1727686400459" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27490" width="200" height="200"><path d="M847.36 107.52h-665.6c-69.12 0-125.44 56.32-125.44 125.44v401.92c0 69.12 56.32 125.44 125.44 125.44h38.4l15.36 181.76 158.72-181.76h453.12c69.12 0 125.44-56.32 125.44-125.44V232.96c0-69.12-56.32-125.44-125.44-125.44z m-563.2 376.32c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z m230.4 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 0 33.28-28.16 61.44-61.44 61.44z m227.84 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z" fill="" p-id="27491"></path></svg>                </button>
                <span className='comments'>{comment}</span>
            </div>
        </div>
    )
}
export default InteractionBar;