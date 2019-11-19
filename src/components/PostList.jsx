import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      {props.postList.map((post) =>
        <Post
          content={post.content}
          likes={post.likes}
          dislikes={post.dislikes}
          key={post.id} />
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;