import Form from './Form.js';

function Aside(props) {
    return (
      <aside>
        <h1>Put your favorite Song!</h1>
        <Form handleSubmit={props.handleSubmit}/>
        
      </aside>
    );
}

export default Aside;