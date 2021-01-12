import '../App.css';


const Footer = (props) => {
    return (
       <footer className="Footer">
           <p>Copyright &copy; Tune It Up {new Date().getFullYear()} All Rights Reserved</p>
       </footer>
    )
}

export default Footer;