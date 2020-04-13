import React, { useState, useEffect, Component } from 'react'

// class Clock extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }
//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       this.setState({
//         date: new Date()
//       }, () => {
//         // 每次状态更新就通知⽗组件, 状态提升
//         this.props.change(this.state.date)
//       })
//     }, 1000)
//   }
//   render() {
//     return (
//       <div>{this.state.date.toLocaleTimeString()}</div>
//     )
//   }
// }

function Clock(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
      props.change(date)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  })
  return <div>{date.toLocaleTimeString()}</div>
}

export default class StateMgt extends Component {
  handleChange(props) {
    // console.log(props)
  }
  render() {
    return (
      <div>
        <Clock change={this.handleChange}></Clock>
      </div>
    )
  }
}
