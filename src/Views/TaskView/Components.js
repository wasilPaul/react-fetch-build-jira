import React, { Component } from 'react'
import { assignTaskTo, logHourToTask, changeStatus, changeDescription } from './logic';
import * as logic from './logic'
const TasksAssingedToMe = ({data, refresh}) => {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>status</th>
                        <th>creator</th>
                        <th>assignnee</th>
                        <th>description</th>
                        <th>hours</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((task, key) => {
                        return (<tr key={key}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.creator}</td>
                            <td>{task.assignee}</td>
                            <td>{task.description}</td>
                            <td>{JSON.stringify(task.hours)}</td>
                            <td>
                                <button
                                    onClick={()=>logic.assignTaskTo(task._id, refresh)}
                                    className="btn btn-default">Przypisz taska</button>
                                <button
                                    onClick={()=>logic.changeStatus(task._id, refresh)}
                                    className="btn btn-default">Zmień status</button>
                                <button
                                    onClick={()=>logic.changeDescription(task._id, refresh)}
                                    className="btn btn-default">Zmień opis</button>
                                <button
                                    onClick={()=>logic.logHourToTask()}
                                    className="btn btn-default">Zaloguj godziny</button>

                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>



        </div>
    )
}

export { TasksAssingedToMe }