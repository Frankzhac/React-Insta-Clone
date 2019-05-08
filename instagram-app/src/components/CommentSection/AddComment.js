import React from 'react';

const AddComment = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input type="text" value={props.Comment} placeholder="Add comment... " onChange={props.changeComment} />
    </form>
  );
};

export default AddComment;
