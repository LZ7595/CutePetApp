import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Usertab from "@/components/usertab";
import Nav from "@/components/navbar";
import Share from "@/components/share";
import DynamicComment from "@/components/dynamicComment";
import './index.scss';

const dynamic = () => {
  const { dynamicId } = useParams();
  const data = {
    "dynamicId": "123456",
    "author": {
      "userId": "7890",
      "userName": "小明",
      "avatarUrl": "/src/assets/椭圆形-5.jpg"
    },
    "publishTime": 1620000000000,
    "publishLocation": "三亚市",
    "textContent": "今天去了美丽的海边，心情超好~",
    "mediaList": [
      {
        "mediaId": "img123",
        "mediaType": "image",
        "mediaUrl": "/src/assets/2323.jpg",
        "mediaDescription": "海边的日落"
      },
      {
        "mediaId": "img456",
        "mediaType": "image",
        "mediaUrl": "/src/assets/6.jpg",
        "mediaDescription": "沙滩上的脚印"
      },
      {
        "mediaId": "img456",
        "mediaType": "image",
        "mediaUrl": "/src/assets/6.jpg",
        "mediaDescription": "沙滩上的脚印"
      }
    ],
    "likeCount": 5, // 点赞数
    "forwardCount": 2, // 转发数
    "commentCount": 3, // 评论数
    "users": {
      "3333": {
        "userName": "用户3",
        "avatarUrl": "/src/assets/椭圆形-3.jpg"
      },
      "4444": {
        "userName": "用户4",
        "avatarUrl": "/src/assets/椭圆形-4.jpg"
      }
    },
    "replies": {
      "reply1": {
        "replyId": "reply1",
        "userId": "3333",
        "replyContent": "是在三亚哦~",
        "replyTime": 1620000500000,
        "parentCommentId": "cmt2",
      }
    },
    "commentList": [
      {
        "commentId": "cmt1",
        "userId": "3333",
        "avatarUrl": "/src/assets/椭圆形-3.jpg",
        "commentContent": "哇，好羡慕呀！",
        "commentTime": 1620000300000,
        "likeCount": 0,
        "replyCount": 0
      },
      {
        "commentId": "cmt2",
        "userId": "4444",
        "avatarUrl": "/src/assets/椭圆形-4.jpg",
        "commentContent": "这是哪里的海边呀？",
        "commentTime": 1620000400000,
        "replyList": [
          {
            "replyId": "reply1",
            "userId": "3333",
          }
        ],
        "likeCount": 0,
        "replyCount": 1
      }
    ]
  };
  const [commentInput, setCommentInput] = useState('');
  const { commentCount, users, commentList, replies, likeCount } = data;
  console.log(dynamicId);

  const [like, setLike] = useState(likeCount);
  const [likeactive, setLikeactive] = useState(false);
  const [reply, setReply] = useState(commentCount);
  const [replyactive, setReplyactive] = useState(false);

  // 创建对输入框的引用
  const commentInputRef = useRef(null);

  const oLikeFun = () => {
    if (likeactive) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLikeactive(!likeactive);
  };

  const oReplyFun = () => {
    if (replyactive) {
      setReply(reply - 1);
    } else {
      setReply(reply + 1);
    }
    setReplyactive(!replyactive);

    // 触发回复事件时让输入框获取焦点
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  // 新增函数用于处理输入并判断是否可发送
  const handleCommentInputChange = (e) => {
    const inputValue = e.target.value.trim(); // 去除两端空格
    setCommentInput(inputValue);
    // 判断处理后的输入值是否为空，决定按钮是否禁用
    const button = document.querySelector('.dynamic-footer-commentInput-button');
    button.disabled = !inputValue;
  };

  return (
    <div className="dynamic">
      <div className="background-white">
        <Nav title="详情" showLeftArrow={true} clickLeft rightText={<Share />} fiexd={true} />
      </div>
      <Usertab showType='animalTypeBtnTime' textAboveImage={false} />
      <div className="dynamic-divider"></div>
      <div className="dynamic-content">
        <div className="dynamic-content-title">
          共有{commentCount}条评论
        </div>
        <div className="dynamic-content-text">
          {commentList.map((comment) => (
            <DynamicComment
              key={comment.commentId}
              comment={comment}
              allUsers={users}
              allReplies={replies}
              commentInputRef={commentInputRef}
            />
          ))}
        </div>
      </div>
      <div className="dynamic-footer">
        <div className="dynamic-footer-commentInput">
          <input type="text" placeholder="一起来讨论讨论" value={commentInput} onChange={handleCommentInputChange} ref={commentInputRef} />
          <button className="dynamic-footer-commentInput-button" disabled={true}>发送</button>
        </div>
        <div className="dynamic-footer-tools">
          <button className={`action-button ${likeactive ? 'active' : ''}`} onClick={() => oLikeFun()}>
            <svg t="1727681796180" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14371" width="200" height="200"><path d="M1024.549 360.609c0-170.492-133.815-309.265-298.055-309.265-81.129 0-157.91 0 213.344 94.701-55.509-59.702-132.367-94.701-213.344-94.701C135.49 51.344 1.751 190.041 1.751 360.609c0 5.719 0.534 10.827 0.534 15.021-0.076 1.373-0.152 2.745-0.152 4.194 0 30.193 7.319 63.361 21.73 98.59 0.458 1.295 0.915 2.516 1.449 3.657 90.812 217.844 440.412 468.474 455.279 479.985 9.227 7.092 20.205 10.6 31.263 10.6 11.209 0 22.266-3.659 31.566-10.903 12.733-9.911 310.941-224.551 429.279-427.603 4.498-6.861 7.854-13.494 10.828-19.215 0.914-1.829 1.753-3.658 2.744-5.413l0.382-0.839c0.382-0.686 0.839-1.449 1.296-2.059 7.091-13.802 12.732-26.611 17.232-39.116 12.274-32.177 18.3-60.847 18.3-87.61 0-2.058-0.077-3.888-0.229-5.414C1024.093 370.979 1024.549 366.251 1024.549 360.609z" fill="#272636" p-id="14372"></path></svg>
          </button>
          <span className='hearts'>{like}</span>
          <button className={`action-button ${replyactive ? 'active' : ''}`} onClick={() => oReplyFun()}>
            <svg t="1727686400459" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27490" width="200" height="200"><path d="M847.36 107.52h-665.6c-69.12 0-125.44 56.32-125.44 125.44v401.92c0 69.12 56.32 125.44 125.44 125.44h38.4l15.36 181.76 158.72-181.76h453.12c69.12 0 125.44-56.32 125.44-125.44V232.96c0-69.12-56.32-125.44-125.44-125.44z m-563.2 376.32c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z m230.4 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 0 33.28-25.6 61.44-61.44 61.44z m227.84 0c-33.28 0-61.44-28.16-61.44-61.44 0-33.28 28.16-61.44 61.44-61.44 33.28 0 61.44 28.16 61.44 61.44 2.56 33.28-25.6 61.44-61.44 61.44z" fill="" p-id="27491"></path></svg>
          </button>
          <span className='comments'>{reply}</span>
        </div>
      </div>
    </div>
  );
};

export default dynamic;