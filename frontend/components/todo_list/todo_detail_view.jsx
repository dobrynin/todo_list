import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>
          {this.props.todo.body}
        </p>
        <button onClick={this.deleteItem}>Remove</button>
      </div>
    );
  }
}

export default TodoDetailView;
