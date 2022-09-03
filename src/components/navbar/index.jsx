import 'styles.css';
import {Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <div>Logo</div>
            <div className='links'>
                <Link className='' to={''}>Home</Link> 
                <Link className='' to={''}>Posts</Link> 
                <Link className='' to={''}>Sobre</Link> 
                <Link className='' to={''}>Escritores</Link> 
            </div>
        </nav>
    )
}