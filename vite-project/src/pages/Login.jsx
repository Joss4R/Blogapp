import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
        </form>
        <button>Login</button>
        <p>This is an error!</p>

        <span>
           Dont have an account?
           <Link to="/register">Register</Link>  
        </span>
    </div>
  )
}

export default Login