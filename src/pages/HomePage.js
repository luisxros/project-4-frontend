import {Link} from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div className="HomePage">
            <h1>HomePage</h1>
             <Link to= '/songs' >Songs</Link>
        </div>
        
        
    )
}

export default HomePage;