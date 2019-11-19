import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

function DiscussionBoard(props){

  return (
    <div>
      <PostList 
        postList={props.postList} 
        onNewLike={props.onNewLike} 
        onNewDislike={props.onNewDislike}
        onDeletePost={props.onDeletePost}/>
      <NewPostForm 
        onNewPostCreation={props.onNewPostCreation}/>
    </div>
  );
}

DiscussionBoard.propTypes = {
  onNewPostCreation: PropTypes.func,
  postList: PropTypes.array,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onNewLike: PropTypes.func,
  onNewDislike: PropTypes.func,
  onDeletePost: PropTypes.func
};

export default DiscussionBoard;