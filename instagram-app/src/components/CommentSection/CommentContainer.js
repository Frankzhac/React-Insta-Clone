import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import AddComment from './AddComment';

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <CommentSection key={i} comment={c} />)}
        <AddComment />
      </div>
    );
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentContainer;
