import * as React from 'react';
import config from '../config/index';

class Comment extends React.Component {
    state = {
        inputVal: "",
        comments: []
    }

    componentDidMount() {
        this.setState({comments: config.getConfig().comments});
    }

    rendetComments = () => {
        if (this.state.comments.length > 0) {
            const comments = [...this.state.comments];
            return comments.map((el: any, index: number) => {
                return (<div key={index} className="comment-container">
                    <img src="https://picsum.photos/100" alt="Avatar" />
                    <p>{el.text}</p>
                    <span className="time-right">{el.date}</span>
                </div>);
            })
        }
        return (<div>No Comment</div>);
    }

    changeVal = (e: any) => {
        this.setState({inputVal: e.target.value});
    }

    submitComment = () => {
        const comments = [...this.state.comments] as any;
        const date = new Date();
        const displayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const commentObj = {"text": this.state.inputVal, "date": displayDate};
        comments.push(commentObj);
        this.setState({ comments, inputVal: "" });
    }

    render () {
        console.log("sdfsdfsdf", this.state.comments);
        return (
            <div>
                <div className="comment-head">{this.state.comments.length} Comment
                        <div>
                            <ul>
                                <li>Best</li>
                                <li>Newest</li>
                                <li>Oldest</li>
                            </ul>
                        </div>
                    </div>
                    <div className="comment-section">
                        {this.rendetComments()}
                        <div className="textbox-container">
                            <img src="https://picsum.photos/100" alt="Avatar" />
                            <div>
                                <input type="text" placeholder="Write something...." className="textbox" value={this.state.inputVal} onChange={this.changeVal} /> 
                                <button className="button" onClick={this.submitComment}>Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Comment;