import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    // 使⽤state属性维护状态，在构造函数中初始化状态
    this.state = {
      currentDate: new Date()
    }
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentDate: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        {this.state.currentDate.toLocaleTimeString()}
      </div>
    )
  }
}
