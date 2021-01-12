import Form from './Form.js';

// const {createProxyMiddleware} = require('http-proxy-middleware')

// module.exports = function(app){
//     app.use(createProxyMiddleware({
//         target: "https://tune-it-up-api.herokuapp.com",
//         changeOrigin: true
//     }))
// }

function Aside(props) {
    return (
      <aside>
        <h1>Put your favorite Song!</h1>
        <Form handleSubmit={props.handleSubmit}/>
        
      </aside>
    );
}

export default Aside;