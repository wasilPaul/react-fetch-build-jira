import React, { Component } from 'react';
import { getAllTasksByMyEmail, getAllTaskForMe } from '../../Api/TasksApi';
import { TasksAssingedToMe } from './Components'

class TasksView extends Component {

  state = {
    imBusy: true,
    tasksAssignedToMe: [],
    tasksCreatedByMe: []
  }

  refresh() {

    this.setState({
      imBusy: true
    })
    Promise.all([
      getAllTasksByMyEmail('riddik27@o2.pl'),
      getAllTaskForMe('riddik27@o2.pl')
    ]).then(data => {


      const [tasksCreatedByMe, tasksAssignedToMe] = data
      console.log(`tasks data`, tasksCreatedByMe, tasksAssignedToMe)

      this.setState({
        tasksCreatedByMe,
        tasksAssignedToMe,
        imBusy: false
      })
    })
  }





  componentDidMount() {

    Promise.all([
      getAllTasksByMyEmail('riddik27@o2.pl'),
      getAllTaskForMe('riddik27@o2.pl')
    ]).then(data => {


      const [tasksCreatedByMe, tasksAssignedToMe] = data
      console.log(`tasks data`, tasksCreatedByMe, tasksAssignedToMe)

      this.setState({
        tasksCreatedByMe,
        tasksAssignedToMe,
        imBusy: false
      })
    })
  }

  render() {
    console.log('this.state', this.state)
    if (this.state.imBusy) {
      return (
        <span>JESTEM ZAJĘTY</span>
      )
    }

    return (
      <div>
        <h2>TasksView</h2>
        <button className='btn btn-block btn-warning' onClick={() => {
          this.refresh()
        }} > Odsiwez
        </button>
        <TasksAssingedToMe {...this.state.tasksAssignedToMe}
          refresh={() => {
            this.refresh()
          }}
        />
      </div>
    );
  }
}

export default TasksView;