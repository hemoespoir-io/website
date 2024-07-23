import React from 'react';
import Login from './src/components/LoginPage';
import Error from '/_Utils/Error'
function login(){
    return(
        <div>
        
        <Routes>
            <Route path="login" element={<Login/>}/>
          
        </Routes>
        </div>

    );
}
export default AuthRouter;