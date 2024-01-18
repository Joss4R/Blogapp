
import logo from'../imgs/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={logo}alt="#" />
            </div>
            <div className="links">
                <Link className='link' to="./?cat=art">
                    <h5>Art</h5>
                </Link>
                <Link className='link' to="./?cat=science">
                    <h5>Science</h5>
                </Link>
                <Link className='link' to="./?cat=technology">
                    <h5>Technology</h5>
                </Link>
                <Link className='link' to="./?cat=cinema">
                    <h5>Cinema</h5>
                </Link>
                <Link className='link' to="./?cat=desidn">
                    <h5>Design</h5>
                </Link>
                <Link className='link' to="./?cat=food">
                    <h5>Food</h5>
                </Link>
                <span>Dev Joss</span>
                <span>Logout</span>
                <span className='write'>
                     <Link to="/write">Write</Link>
                
                </span>
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar