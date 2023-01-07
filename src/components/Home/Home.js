import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

// user name a jei context ta baniyechilam seta akhane use korar jnno user context hook user krlm


const Home = () => {
    const {userName} = useContext(AuthContext);
    return (
        <div>
            <h2>This is Home for {userName.displayName}</h2>
        </div>
    );
};

export default Home;