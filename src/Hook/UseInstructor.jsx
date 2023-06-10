import React from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
    const {user} = useContext(AuthContext);
   const [axiosSecure] = UseAxiosSecure();
   const {data: isInstructor, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () =>{
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        console.log('is instructor response', res);
        return res.data.admin;
    }
   })
   return [isInstructor, isAdminLoading]
};

export default UseInstructor;