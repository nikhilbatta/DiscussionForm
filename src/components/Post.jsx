import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
      <hr/>
      <p>{props.content}</p>
      <p>Likes: {props.likes}</p>
      <p>Dislikes: {props.dislikes}</p>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number
};

export default Post;