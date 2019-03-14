import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item} </li> )
    }
  </ul>
);

class Twitter extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };

  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }



  render() {
    return (
      <div>
        <form  onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }

}


ReactDOM.render(<Twitter />, document.getElementById('root'));


//<h2>It is {new Date().toLocaleTimeString()}.</h2>
  //      <h2>It is {new Date().toLocaleDateString()}.</h2>  
