import React, { Component } from 'react'
import './App.scss'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  // 20. Hooking with LifeCycle Methods
  // necessary to avoid React getting stuck in a loop
  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }

  //20. Hooking with LifeCycle Methods
  // Runs after the component has completely rendered onto the application.
  // We will call getTimeUntil() every second in order to continue updating
  // our timer, using setInterval(() => getTimeUntil(this.props.deadline), 1000) 
  // with an annonymous arrow function
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  // leading zero helper method to standardize spacing
  leading0(num) {
    return num < 10 ? '0' + num : num
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    
    const seconds = Math.floor((time/1000) % 60)
    const minutes = Math.floor((time/1000/60) % 60)
    const hours = Math.floor((time/(1000*60*60)) % 24)
    const days = Math.floor(time/(1000*60*60*24))
    // below can be written in shorthand by combining the key/value pairs
    // as they are the same words:
    /*this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })*/
    // re-written as:
    this.setState({
      days, 
      hours, 
      minutes, 
      seconds
    })
  }

  render() {
    // commented out the call to getTimeUntil() b/c React will get stuck in a loop
    // instead need to add componentWillMount() method
    //this.getTimeUntil(this.props.deadline)
    
    return (
      <div>
        <div className="App__time">{this.leading0(this.state.days)} days</div>
        <div className="App__time">{this.leading0(this.state.hours)} hours</div>
        <div className="App__time">{this.leading0(this.state.minutes)} mins</div>
        <div className="App__time">{this.leading0(this.state.seconds)} secs</div>
      </div>
    )
  }
}

export default Clock