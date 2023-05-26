import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaAngleRight, FaRegHandPointRight, FaLongArrowAltRight } from "react-icons/fa";
import lego from '../../assets/lego.jpg'
import bgImg from "../../assets/circle-pattern-bg.jpg"
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { user, createUser, profileUpdate, handleGoogleSignIn } = useContext(AuthContext);

    useTitle("Register");

    const [error, setError] = useState(" ");
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }
    const handleRegister = async event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,photo,email,password);

        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        await createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const createdUser = userCredential.user;
                event.target.reset();
                // console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess("Registration done")
                profileUpdate(name, photo, createdUser)
                    .then(() => {
                        // console.log(" Profile updated!");
                    }).catch((error) => {
                        // console.log("An error occurred");
                    });
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage)
            });
    }

    return (
        <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="hero min-h-screen">
                <div className="hero-content md:gap-0 lg:gap-0 flex-col lg:flex-row-reverse">

                    <div className="md:rounded-r-lg flex-shrink-0 w-full max-w-sm bg-base-100">

                        <form onSubmit={handleRegister} className="card-body">
                            <h2 className='text-center md:text-left lg:text-left text-[16.5px] mb-2 text-purple-700 font-bold'>NEW HERE, PLEASE REGISTER!</h2>
                            <div className="md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Name:</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" required className="input input-bordered md:w-2/3 lg:w-2/3" />
                            </div>
                            <div className="md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Email:</span>
                                </label>
                                <input type="email" name='email' placeholder="email" required className="input input-bordered md:w-2/3 lg:w-2/3" />
                            </div>

                            <div className="md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Password:</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered md:w-2/3 lg:w-2/3" />

                            </div>
                            <div className="md:flex lg:flex gap-5">
                                <label className="label md:w-1/3 lg:w-1/3">
                                    <span className="">Photo URL:</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered md:w-2/3 lg:w-2/3" />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Register</button>
                            </div>
                            <div className="form-control mt-2 text-center">
                                <p>Already Have an Account? <Link className='text-warning underline underline-offset-4' to="/login">Login</Link></p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Continue With Google</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:rounded-l-lg flex-shrink-0 w-full max-w-sm  bg-purple-500">
                        <div className='card-body'>
                            <img src={lego} className='w-full h-[480.5px]' alt="" />
                        </div>
                    </div>

                </div>

            </div>
            <div className='mt-8 text-center text-xl text-purple-700 pb-6'>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </div>
        </div>
    );
};

export default Register;