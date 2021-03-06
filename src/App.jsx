import React, { Component } from 'react'
import Clock from './Clock.jsx'
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    // Never mutate or change state directly:
    // this.state.deadline = 'this is mutated'x
    
    // pass a new object with a key/value pair that we'd like to update
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App__title">Countdown to Christmas
          <span>{this.state.deadline}</span>
        </div>

        <Clock 
          deadline={this.state.deadline}
        />

        <Form inline={false}>
          <FormControl 
            placeholder='new date'
            onChange={event => this.setState({ newDeadline: event.target.value })}
        />
          <Button onClick={() => this.changeDeadline()}>
            Change Date
          </Button>
        </Form>
      </div>
    )
  }
}

export default App