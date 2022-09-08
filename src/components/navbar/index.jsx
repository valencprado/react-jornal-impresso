import './styles.css';
import {Link} from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <div>Logo</div>
            <div className='links'>
                <Link className='link' to={'/'}>Home</Link> 
                <Link className='link' to={'/Posts'}>Posts</Link> 
                <Link className='link' to={'/About'}>Sobre</Link> 
                <Link className='link' to={'/Writers'}>Escritores</Link> 
                <Link className='writer-page' to={'/Login'}></Link>
            </div>
        </nav>
    )
}