import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

// user name a jei context ta baniyechilam seta akhane use korar jnno user context hook user krlm


const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This is Home for {user.email}</h2>
        </div>
    );
};

export default Home;