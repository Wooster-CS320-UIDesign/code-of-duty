import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class MyTasks extends Component {
  render() {
    return (
      <div>
        These are my Tasks:

        <TaskItem />
      </div>
    )
  }
}
