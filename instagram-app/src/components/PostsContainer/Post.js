import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import './PostContainer.css';



const Post = props => {
  return (
    <div className="P-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="P-img-wrapper">
        <img
          alt="post thumbnail"
          className="P-img"
          src={props.post.imageUrl}
        />
      </div>
      <CommentContainer comments={props.post.comments} />
    </div>
  );
};

export default Post;
