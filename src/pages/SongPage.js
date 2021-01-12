import Aside from '../components/Aside'
import Main from '../components/Main';
import Nav from '../components/Nav';

import {useState, useEffect } from 'react';


function SongPage() {
  const [songsState, setSongsState] = useState({ songs: [] });


  useEffect(() => {
    getSongs();
  }, []);

    function getSongs() {
      fetch('/songs')
      .then(res => res.json())
      .then(data => setSongsState({songs: data}))
      .catch(error => console.error(error));
    }

    function handleAdd(event, formInputs) {
      event.preventDefault();
      fetch('/songs', {
        body: JSON.stringify(formInputs),
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json'
        }
      })
      .then(createdSong => createdSong.json())
      .then(jsonedSong => { setSongsState(prevState =>({ songs: [jsonedSong, ...prevState.songs] }))
    })
    .catch(error => console.log(error))
    }

    function handleDelete(deletedSong) {
      fetch(`/songs/${deletedSong.id}`, {
        method: 'DELETE',
      })
      .then(() => {
        getSongs()
      })
      .catch(error => console.log(error))
    }

    function handleUpdate(event, formInputs) {
      event.preventDefault();
      fetch(`/songs/${formInputs.id}`, {
        method: 'PUT',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'Application/json'
        }
      })
      .then(() => {
        getSongs()
      })
      .catch(error => console.log(error))
    }

return (
   <div className="SongPage">
     <div className="container">

     <Aside handleSubmit={handleAdd} />
     <Main 
     songs={songsState.songs}
     handleDelete={handleDelete}
     handleUpdate={handleUpdate}
     />
     <Nav />
     </div>
    </div>
  );
}

export default SongPage;