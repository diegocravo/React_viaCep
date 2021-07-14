import React from 'react';
import './App.css';

class App extends React.Component {
  state ={ 
    cep: []
  }

  handleTextChange(e) {
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        cep: res
      })
    })
  }
  //https://viacep.com.br/ws/51030000/json/

  render() {
    return (
      <div>
        <strong>Olá, {this.props.name}</strong>
        <div>
          digite o CEP: 
          <input
            type="text"
            onChange={this.handleTextChange.bind(this)}
          >
          </input>
          {Object.entries(this.state.cep).map((values, key) => (
            <h2 key={key}><strong>{values[0]}:</strong> {values[1]}</h2>
          ))}
        </div>
      </div>
    )
  }

}

export default App;
