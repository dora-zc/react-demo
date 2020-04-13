import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    // this.change = this.change.bind(this)
  }
  btn = () => {
    console.log('btn')
  }
  // 使⽤箭头函数，不需要指定回调函数this，且便于传递参
  change = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.inputValue}</p>
        <button onClick={this.btn}>按钮</button>
        <input type="text" onChange={this.change} value={this.state.inputValue} />
      </div>
    )
  }
}
