import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NewPost } from './new-post-modal-styles';

export default class NewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            body: "",
            title: ""
        }
    }
    renderInputs = (state, placeholder) => {
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder={placeholder} value={this.state[state]}
                        onChange={(e) => { this.setState({ [state]: e.target.value }) }} />
                </div>

            </div>
        )
    }
    render() {
        return (
            <div>
               <NewPost>
              <div className="btn-new">
              <Button  variant="dark" onClick={this.handleShow}>Create New Post</Button>
              </div>
               </NewPost>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderInputs("title", 'Enter Title')}
                        {this.renderInputs("body", 'Enter Body')}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                                </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                            Save Changes
                                </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
    handleShow = () => {
        this.setState({ show: true })

    }
    handleClose = () => {
        this.setState({ show: false, body: "", title: "" })
    }
    handleSave = () => {
        const post = {userId: 1, title: this.state.title, body: this.state.body};
        this.props.addPost(post);
        this.setState({ show: false, body: "", title: "" })
    }
}
