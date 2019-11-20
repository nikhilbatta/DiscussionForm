import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  props.postList.sort((a,b) => b.likes - a.likes);
  return (
    <div>
      {props.postList.map((post,i) =>
        <Post
          content={post.content}
          likes={post.likes}
          dislikes={post.dislikes}
          key={post.id}
          index={i}
          onNewLike={props.onNewLike}
          onNewDislike={props.onNewDislike}
          formattedWaitTime={post.formattedWaitTime}
          onDeletePost={props.onDeletePost}
          currentRouterPath={props.currentRouterPath}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  onNewLike: PropTypes.func,
  onNewDislike: PropTypes.func,
  onDeletePost: PropTypes.func,
  currentRouterPath: PropTypes.string
};

export default PostList;