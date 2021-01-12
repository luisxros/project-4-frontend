import {Link} from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div className="HomePage">
           
            
        
        <h3 className="welcome">Welcome to Tune It Up! Click on a playlist to view it. There you can add the songs you love to listen to the most!</h3>
        <Link to= '/songs' className="songlink" >CLICK HERE TO VIEW PLAYLIST</Link>
        </div>
        
        
    )
}

export default HomePage;