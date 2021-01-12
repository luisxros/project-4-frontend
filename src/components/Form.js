import '../App.css'

import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      artist:''
    });

    useEffect(() => {
      if(props.song){
        setFormState({
          title: props.song.title,
          artist: props.song.artist,
          id: props.song.id,
        });
      }
    }, [props.song])

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if(props.song) formState.id = props.song.id;
    props.handleSubmit(event, formState);
  }


  function formValid() {
    return !!(formState.title && formState.artist);
  }

    return (
      <div className="Form">

      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="title"
          placeholder="Song Title"
          type="text"
          value={formState.title}
          id="title"
          />
         <Input
           handleChange={handleChange}
           name="artist"
           placeholder="Artist"
           type="text"
           value={formState.artist}
           id="artist"
           />
    
       <input 
       disabled={!formValid()} 
       type="submit" 
       value={props.song ? 'Edit' : 'Add'}/>
      </form>
      
       </div>
    );
  }

export default Form;