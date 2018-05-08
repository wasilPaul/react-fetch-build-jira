import { changeDescriptionOfTask, changeStatusOfTask, assigneeTask, logHours } from '../../Api/TasksApi'

export const assignTaskTo = (task_id, refresh) => {
    assigneeTask(task_id).then(() => {
        refresh()
    })
}

export const logHourToTask = (task_id, refresh) => {
    logHours(task_id).then(() => {
        refresh()
    })
}

export const changeStatus = (task_id, refresh) => {
    changeStatusOfTask(task_id).then(() => {
        refresh()
    })
}

export const changeDescription = (task_id, refresh) => {
    changeDescriptionOfTask(task_id).then(() => {
        refresh()
    })
}