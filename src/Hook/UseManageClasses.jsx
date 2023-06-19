import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseManageClasses = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/classes`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
      })

      return [classes, refetch]
};

export default UseManageClasses;