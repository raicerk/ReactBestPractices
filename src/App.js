import React, { Component } from "react";

class App extends Component {

  constructor() {
    super();
    this.state = {
      saludo: "Ricardo",
      valor: 1,
      inputValue: "",
    }
  }

  handleClick = param => {
    this.setState({
      saludo:param,
      valor: this.state.valor+1,
      nombre:this.state.inputValue
    },()=>{
      console.log(this.state)
    })
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <br></br>
        <button onClick={()=>this.handleClick('Juan')}>mi valor actual es: {this.state.inputValue}</button>
        <h4>Desde el boton {this.state.valor}</h4>
        <h5>{this.state.inputValue}</h5>
      </div>
    )
  }
}

export default App;
