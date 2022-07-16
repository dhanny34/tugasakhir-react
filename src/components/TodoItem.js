import React, {useContext} from "react";
import {TodoContext} from '../App'


const TodoItem = (props) => {
    const getStyle = () => {
        let textDecoration = ''

        if (props.todo.komplit) {
            textDecoration = 'line-through'
          } else {
            textDecoration = 'none'
          }

        return{
            flexGrow: '2',
            textDecoration: textDecoration
        }
    }

    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #f4f4f4',
        padding: '12px',
        fontSize: '24px',
    }

    const buttonStyle = {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        cursor: 'pointer',
        fontSize: '16px',
    }

    const {toogleSelesai, todoHapus} = useContext(TodoContext)

    return (
        <div style={wrapperStyle}>
            <input 
                type='checkbox'
                onChange={() => toogleSelesai(props.todo.id)}
            />

            <p style={getStyle()}>
                {props.todo.judul}
            </p>

            <button  
                style={buttonStyle}
                onClick={() => todoHapus(props.todo.id)}
            > x </button>
        </div>
    )
}

export default TodoItem