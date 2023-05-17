import { axiosPublic } from '../api/axios';
import { Auth } from '../interfaces/auth.interface';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axiosPublic.get('/refresh', {
            withCredentials: true
        });
        setAuth((prev: Auth): Auth => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
    }

    return refresh;
};

export default useRefreshToken;