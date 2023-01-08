import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Awesome</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                {/* Jodi user er majhe displayName(email) thake tahole seta dekhao */}
                {
                    user?.email
                    && <h2>Welcome, {user.email}</h2>
                }



                {/* login/logout button conditional */}
                {
                    user?.email
                        ? <button onClick={handleLogOut} className='btn btn-sm'>Log out</button>
                        :
                        <Link to="/login" >
                            <button className='btn btn-sm'>log In</button>
                        </Link>
                }

            </div>
        </div >
    );
};

export default Header;