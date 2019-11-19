import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import NewPostForm from './NewPostForm';

function DiscussionBoard(props){

  return (
    <div>
      <PostList postList={props.postList}/>
      <NewPostForm onNewPostCreation={props.onNewPostCreation}/>
    </div>
  );
}

DiscussionBoard.propTypes = {
  onNewPostCreation: PropTypes.func,
  postList: PropTypes.array
};

export default DiscussionBoard;