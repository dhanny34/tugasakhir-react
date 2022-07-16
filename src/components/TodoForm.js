import React, { useState }  from "react";

const TodoForm = ({todoTambah}) => {
    const [judul, setJudul] = useState('')

    const kaloBerubah = (event) => {
        setJudul(event.currentTarget.value)
    }

    const kaloSubmit = (event) => {
        event.preventDefault()
        todoTambah(judul)
        setJudul('')
    }

    return(
        <div style={{marginBottom: '32px'}}>
            <form onSubmit={kaloSubmit}>
                <input 
                    type='text'
                    placeholder='Tambah todo disini'
                    style={{height: '66px', width: '40%', fontSize: '16px'}}
                    onChange={kaloBerubah}
                    value={judul}
                />
                <button style={{height: '72px', fontSize: '16px'}}>Tambah Todo</button>
            </form>
        </div>
    )
}

export default TodoForm