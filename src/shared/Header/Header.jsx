import logo from "../../assets/CWLogo.png"
import ActiveLink from "../../ActiveLink/ActiveLink";
import  "./Header.css"
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className=" bg-base-100 md:py-4 header shadow-lg">
      <div className="container mx-auto">
        <div className="navbar ">
          <div className="navbar-start">
            <h2 className="">
              <img src={logo} className=" h-16 logo" alt="" />
            </h2>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="font-normal text-[16px] leading-[22px] text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
              <ActiveLink to="/addToy">Add a Toy</ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="font-normal text-[16px] leading-[22px] text-black">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
              {user && (
                <ActiveLink to="/addAToy">Add a Toy</ActiveLink>
              )}
              {user && (
                <ActiveLink to="/myToys">My Toys</ActiveLink>
              )}
              <ActiveLink to="/blog">Blog</ActiveLink>
            </div>
          </div>
          <div className="font-normal navbar-end text-black">
          {
              user && (
                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                  <p>
                    <img
                      className="w-10 h-10 mr-3 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </p>
                </div>
              )

              // <p>{user.displayName}</p>
              // <FaUserCircle className='mr-3' style={{ fontSize: '2rem' }}></FaUserCircle>
            }
          {user ? (
              <Link>
                <button onClick={handleLogOut} variant="secondary">
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button variant="secondary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
