import { Divider } from "react-vant";
import { useState } from "react";
import { getRelativeTime } from "@/utils/date";
import './index.scss';

const dynamicComment = ({ comment, allUsers, allReplies, commentInputRef }) => {
    const renderReplies = (commentReplies, allUsers, allReplies) => {
        if (!commentReplies) return null;

        return (
            <div className="comment-replies">
                {commentReplies.map(({ replyId, userId }) => {
                    const reply = allReplies[replyId];
                    const user = allUsers[userId];
                    const oReply = {
                        ...reply,
                        ...user
                    }
                    return (
                        <div key={oReply.replyId} className="reply">
                            <div className="reply-header">
                                <img src={oReply.avatarUrl} alt={`${oReply.userName}的头像`} className="reply-avatar" />
                                <span className="reply-author">{oReply.userName}</span>
                            </div>
                            <div className="reply-content">
                                {oReply.replyContent}
                                <span className="reply-time">{getRelativeTime(oReply.replyTime)}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    const commentUser = allUsers[comment.userId];
    const oComment = {
        ...comment,
        ...commentUser
    }
    console.log(oComment);

    const [like, setLike] = useState(oComment.likeCount)
    const [likeactive, setLikeactive] = useState(false)
    const [reply, setReply] = useState(oComment.replyCount)
    const [replyactive, setReplyactive] = useState(false)

    const likeFun = () => {
        if (likeactive) {
            setLike(like - 1)
        } else {
            setLike(like + 1)
        }
        setLikeactive(!likeactive)
    }
    const replyFun = () => {
        if (replyactive) {
            setReply(reply - 1)
        } else {
            setReply(reply + 1)
        }
        setReplyactive(!replyactive)

        if (commentInputRef.current) {
            commentInputRef.current.focus();
        }
    }
    return (
        <>
            <Divider />
            <div key={oComment.commentId} className="comment">
                <div className="comment-header">
                    <div className="comment-avatar-container">
                        <img src={oComment.avatarUrl} alt={`${oComment.userName}的头像`} className="comment-avatar" />
                        <div className="comment-info">
                            <div className="comment-author">{oComment.userName}</div>
                            <div className="comment-time">{getRelativeTime(oComment.commentTime, 'full')}</div>
                        </div>
                    </div>
                    <div className="comment-actions">
                        <button className={`action-button ${likeactive ? 'active' : ''}`} onClick={() => likeFun()}>
                            <svg t="1727681796180" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14371" width="200" height="200"><path d="M1024.549 360.609c0-170.492-133.815-309.265-298.055-309.265-81.129 0-157.91 34.998-213.344 94.701-55.509-59.702-132.367-94.701-213.344-94.701C135.49 51.344 1.751 190.041 1.751 360.609c0 5.719 0.534 10.827 0.991 15.021-0.076 1.373-0.152 2.745-0.152 4.194 0 30.193 7.319 63.361 21.73 98.59 0.458 1.295 0.915 2.516 1.449 3.657 90.812 217.844 440.412 468.474 455.279 479.985 9.227 7.092 20.205 10.6 31.263 10.6 11.209 0 22.266-3.659 31.566-10.903 12.733-9.911 310.941-224.551 429.279-427.603 4.498-6.861 7.854-13.494 10.828-19.215 0.914-1.829 1.753-3.658 2.744-5.413l0.382-0.839c0.382-0.686 0.839-1.449 1.296-2.059 7.091-13.802 12.732-26.611 17.232-39.116 12.274-32.177 18.3-60.847 18.3-87.61 0-2.058-0.077-3.888-0.229-5.414C1024.093 370.979 1024.549 366.251 1024.549 360.609z" fill="#272636" p-id="14372"></path></svg>
                        </button>
                        <span className='hearts'>{like}</span>
                        <button className={`action-button ${replyactive ? 'active' : ''}`} onClick={() => replyFun()}>
                            <svg t="1727686400459" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27490" width="200" height="200"><path d="M847.36 107.52h-665.6c-69.12 0-125.44 56.32-125.44 125.44v401.92c0 69.12 56.32 125.44 125.44 125.44h38.4l15.36 181.76 158.72-181.76h453.12c69.12 0 125.44-56.32 125.44-125.44V232.96c0-69.12-56.32-125.44-125.44-125.44z m-563.2 376.32c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z m230.4 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 0 33.28-28.16 61.44-61.44 61.44z m227.84 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z" fill="" p-id="27491"></path></svg>                </button>
                        <span className='comments'>{reply}</span>
                    </div>
                </div>
                <div className="comment-content">
                    {oComment.commentContent}
                </div>
                {renderReplies(oComment.replyList, allUsers, allReplies)}
            </div>
        </>
    )
}
export default dynamicComment;