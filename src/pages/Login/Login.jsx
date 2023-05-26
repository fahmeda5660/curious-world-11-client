import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import bgImg from "../../assets/circle-pattern-bg.jpg"
import { FaAngleRight, FaRegHandPointRight, FaLongArrowAltRight } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const { user, signIn, handleGoogleSignIn, loading, reload } = useContext(AuthContext);
    
    useTitle("Login");

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // if(user){
    //     navigate(from, {replace: true})
    // }
    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                setError('');
                event.target.reset();
                setSuccess("logged in successfully")
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage);
            });
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="hero min-h-screen " >
                <div className="hero-content p-2 md:gap-0 lg:gap-0 flex-col lg:flex-row-reverse">
                    <div className="md:rounded-r-lg flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='text-center md:text-left lg:text-left text-[16.5px] mb-2 text-purple-700 font-bold'>PLEASE LOGIN AND ENOJOY SERVICE</h2>
                            <div className=" md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Email:</span>
                                </label>
                                <input type="email" name='email' placeholder="email" required className="input input-bordered md:w-2/3 lg:w-2/3 w-full" />
                            </div>
                            <div className=" md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Password:</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered md:w-2/3 lg:w-2/3 w-full" />

                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</button>
                            </div>
                            <div className="form-control mt-6 text-center">
                                <p>Forgot password? <Link className='text-warning underline underline-offset-4' to="/">Reset passsword.</Link></p>
                            </div>
                            <div className="form-control mt-2 text-center">
                                <p>Dont Have an Account? <Link className='text-warning underline underline-offset-4' to="/register">Register</Link></p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-2">
                                <button onClick={googleSignIn} className="btn hover:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Sign In With Google</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:rounded-l-lg flex-shrink-0 w-full max-w-sm  bg-purple-500">
                        <div className='card-body'>
                            <button className="btn gap-2 bg-white text-purple-700 text-md">
                                Discount Left for
                                <div className="badge bg-purple-700 text-white">4 Days</div>
                            </button>
                            <div className='text-white'>
                                <h2 className='text-[16.5px] font-bold'>WHY CONSUMERS PICK CURIOUS WORLD, AND WHAT YOU CAN DO ABOUT IT?</h2>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>A better Toy selection</span></li>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>Get free shipping</span></li>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>A better Toy selection</span></li>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>Return Policy</span></li>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>Exchange Opportunites</span></li>
                                <li className='login-list'><FaLongArrowAltRight></FaLongArrowAltRight><span className='ml-2'>Budget Friendly Toy</span></li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-8'>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </div>
        </div>
    );
};

export default Login;