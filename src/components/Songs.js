import Song from './Song';
import React from 'react';

function Songs({songs, handleDelete, handleUpdate}) {
    return (
        <div className='Songs'>
        {songs.map(song =>
            <Song 
            key={song.id}
            song={song}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            />
        )}
        </div>
    );
}

export default Songs;