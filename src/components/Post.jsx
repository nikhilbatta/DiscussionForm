import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

  function handleLikeClick(){
    props.onNewLike(props.index);
  }
  function handleDislikeClick(){
    props.onNewDislike(props.index);
  }
  return (
    <div>
      <hr/>
      <p>{props.content}</p>
      <p>Likes: {props.likes} <button onClick={handleLikeClick}>Like</button></p>
      <p>Dislikes: {props.dislikes} <button onClick={handleDislikeClick}>Dislike</button></p>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onNewLike: PropTypes.func,
  onNewDislike: PropTypes.func,
  index: PropTypes.number
};

export default Post;