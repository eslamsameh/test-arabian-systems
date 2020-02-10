import React, { Component } from 'react'
import { PostsStyles } from './posts-style';
import { SinglePostCard } from '../shared/single-post-card/single-post-card';
import NewPostModal from '../shared/new-post-modal/new-post-modal';
import { connect } from 'react-redux';
import Toast from '../shared/toast/toast';
import { getPostsAction, insertPost, resetPost, resetSinglePost } from '../redux/actions/posts.actions';
class Posts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            currentPosts: [],
            showResponse: false,
            responseClass: "",
            messageResponse: ""
        }
    }
    changePage = (index) => {
        this.setState({ currentPosts: this.props.posts[index], currentPage: index + 1 });
    }
    renderPage = () => {
        return (
            <div className="d-flex justify-content-md-end">
                {
                    this.props.posts.map((v, i) => {
                        return (
                            this.state.currentPage === i + 1 ?
                                <a key={i} className="pages active-page" onClick={() => this.changePage(i)} >{i + 1}
                                </a>
                                :
                                <a key={i} className="pages" onClick={() => this.changePage(i)} >{i + 1}
                                </a>
                        )
                    })
                }
            </div>
        )
    }
    render() {
        return (
            <div>
                <PostsStyles>
                    <div className="container" >
                        <h4 className="header">Posts List</h4>
                        <div className="row">

                        <div className="col-md-12">
                                <NewPostModal addPost={(post) => this.insertPost(post) }></NewPostModal>
                            </div>
                            <div className="col-md-12">
                            {
                                this.state.currentPosts && this.state.currentPosts.length ? this.state.currentPosts.map((v, i) => {
                                    return (<SinglePostCard key={i} post={v} ></SinglePostCard>)
                                }) : null
                            }
                            {this.renderPage()}

                               
                            </div>
                         
                        </div>
                    </div>
                </PostsStyles>
                <Toast show={this.state.showResponse} class={this.state.responseClass} message={this.state.messageResponse}></Toast>
            </div>
        )
    }
    componentDidMount() {
        this.props.getPosts();
    }
    componentWillUnmount() {
        this.props.resetPost()
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.posts.length === 0 && nextProps.posts) {
            this.setState({ currentPosts: nextProps.posts[0], currentPage: 1 });
        }

        if (!this.props.post && nextProps.post) {
            this.setState({ currentPosts: nextProps.posts[[this.state.currentPage - 1] ] });
            this.props.resetSinglePost()
            this.showToast('Successfully Added', 'success');
        }
    }
    insertPost = (post) => {
        if(post.title && post.body) {
            this.props.insertPost({post});
        } else {
            this.showToast('Please Enter Title And Body', 'danger');
        }
    }

    showToast(message, classMessage) {
        this.setState({ messageResponse: message, responseClass: classMessage, showResponse: true});
        setTimeout(() => this.setState({ showResponse: false, }), 3000);
    }

}
function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPostsAction()),
        insertPost: (data) => dispatch(insertPost(data)),
        resetPost: () => dispatch(resetPost()),
        resetSinglePost: () => dispatch(resetSinglePost())
    }
 
}
function mapStateToProps(state) {
    return { posts: state.posts.posts, post: state.posts.post }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
