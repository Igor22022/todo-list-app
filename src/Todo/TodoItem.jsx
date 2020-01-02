import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function TodoItem(props) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if (props.todo.completed) {
        classes.push('done');
    }

    return (
        <li>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    onChange={() => props.changeHandler(props.todo.id)}
                    checked={props.todo.completed}    
                />
                <strong>{props.index + 1}</strong>
                &nbsp;
                {props.todo.title}
            </span>
            
            <button className="remove" onClick={() => removeTodo(props.todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    changeHandler: PropTypes.func.isRequired
};

export default TodoItem;