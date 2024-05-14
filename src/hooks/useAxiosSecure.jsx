import  { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredential: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
useEffect(() => {

    axiosSecure.interceptors.response.use( res => {
        return res
    }, err => {
        console.log(err)
        if(err.response.status === 401){
            logOut().then(() => {
                navigate('/login')
            }).catch(err => {
                console.log(err.message)
            })
        }
    })
    
},[])
    return axiosSecure;
};

export default useAxiosSecure;