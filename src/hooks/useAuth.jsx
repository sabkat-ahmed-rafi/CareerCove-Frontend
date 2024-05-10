import { useContext } from 'react';
import { AuthContext } from '../firebase/Authentication';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;