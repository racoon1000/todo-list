import React from 'react';
import './FirstTodoStyle.css'

export default function FirstTodo(props) {
    return (
        <div className="first-list">
            <div className='input-wrapper'>
                <input 
                    type="checkbox"
                    defaultChecked={props.complited}
                    onChange={props.handleChange}
                />
                {props.description}
            </div>
        </div>
    )
}
