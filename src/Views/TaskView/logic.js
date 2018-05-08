import {changeDescriptionOfTask, changeStatusOfTask, assigneeTask} from '../../Api/TasksApi'

export const assignTaskTo = (task_id, refresh) => {
    assigneeTask(task_id).then(()=>{
        refresh ()
    })
}

export const logHourToTask = (data) => {
    alert('logHourToTask')
}

export const changeStatus = (task_id, refresh) => {
    changeStatusOfTask(task_id).then(()=>{
        refresh ()
    })
}

export const changeDescription = (task_id, refresh) => {
  changeDescriptionOfTask(task_id).then(()=>{
      refresh()
  })
}