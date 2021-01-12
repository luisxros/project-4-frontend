import Songs from './Songs';

function Main({songs, handleDelete, handleUpdate}) {
    return (
        <main>
          <Songs 
          songs={songs}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          />
        </main>
    );
}

export default Main;

