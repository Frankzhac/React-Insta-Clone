import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import './PostContainer.css';

import Likes from './Likes';
import PropTypes from 'prop-types';




class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div className="P-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="P-img-wrapper">
          <img
            alt="post thumbnail"
            className="P-img"
            src={this.props.post.imageUrl}
          />
        </div>
        <Likes
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentContainer
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
