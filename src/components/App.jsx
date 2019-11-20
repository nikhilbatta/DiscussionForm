import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import DiscussionBoard from './DiscussionBoard';
import Header from './Header';
import Admin from './Admin';
import Error404 from './Error404'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPost = this.handleAddingNewPost.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleDislikes = this.handleDislikes.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  handleAddingNewPost(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.timePosted).fromNow(true);
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }
  handleLikes(i){
    var copyMList = this.state.masterPostList;
    copyMList[i].likes = copyMList[i].likes + 1; 
    this.setState({masterPostList: copyMList});
  }
  handleDislikes(i){
    var copyMList = this.state.masterPostList;
    copyMList[i].dislikes = copyMList[i].dislikes + 1; 
    this.setState({masterPostList: copyMList});
  }
  handleDeletePost(i){
    var copyMList = this.state.masterPostList;
    copyMList.splice(i, 1);
    this.setState({masterPostList: copyMList});
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedTime(),
    60000
    );
  }
  updatePostElapsedTime(){
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timePosted).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  render() {
    return(
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/discussion' render={()=><DiscussionBoard 
            onNewPostCreation={this.handleAddingNewPost} 
            postList={this.state.masterPostList}
            onNewLike={this.handleLikes}
            onNewDislike={this.handleDislikes}
            onDeletePost={this.handleDeletePost}/>} />
            <Route path='/admin' render={(props)=><Admin postList={this.state.masterPostList} currentRouterPath={props.location.pathname} onDelete={this.handleDeletePost}/> }/>
            <Route component={Error404}/>
        </Switch>
      </div>
    );
  }

}

export default App;