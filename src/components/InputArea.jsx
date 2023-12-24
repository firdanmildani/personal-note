import React from 'react';

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            archived: false,
            createdAt: '',
            limit: 50,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit),
            }
        })
    }
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }
    onSubmitEventHandler(event) {
        event.preventDefault();
        const id = +new Date();
        const createdAt = new Date().toISOString();

        const newData = {
            id: id,
            title: this.state.title,
            body: this.state.body,
            archived: this.state.archived,
            createdAt: createdAt,
        };

        this.props.addDatas(newData);

                this.setState(() => {
            return {
                id: '',
                title: '',
                body: '',
                archived: false,
                createdAt: '',
            }
        })
    }
    render() {
        return (
           <form className="input-form" onSubmit={this.onSubmitEventHandler}>
             <input
               placeholder="Ini adalah judul..."
               name="title"
               value={this.state.title} onChange={this.onTitleChangeEventHandler} type="title" id="title"
             />
             <textarea
               type="text"
               placeholder="Tuliskan catatanmu disini..."
               name="body"
               value={this.state.body} onChange={this.onBodyChangeEventHandler} id="message"
             />
             <button type="submit">+</button>
           </form>
        )
    }
}

export default InputArea;
