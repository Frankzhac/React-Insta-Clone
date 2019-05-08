import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.comment.text}</span>{' '}
      <span className="user">-{props.comment.username}</span>
    </div>
  );
};

CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;
