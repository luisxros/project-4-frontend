import { useState } from 'react';
import Form from './Form';
import '../App.css'


function Song(props) {

    const [formVisible, setFormVisible] = useState(false);

    function toggleForm() {
        setFormVisible(!formVisible);
    }

    function handleUpdate(event, song) {
        toggleForm(
            props.handleUpdate(event, song)
        )
    }


    return (
        <>
        {
        formVisible ?
        <>
        <Form song={props.song} handleSubmit={handleUpdate} />
        <button onClick={toggleForm}>Cancel</button>
        </>

        :

        <div className='Song'>
            <h3>{props.song.artist}</h3>
            <p>{props.song.title}</p>
            <button className='btn-1' onClick={() => props.handleDelete(props.song)}>X</button>
            <button className='btn-2' onClick={toggleForm}>Edit</button>
        </div>   

        }
        
        </>
    );
}

export default Song;