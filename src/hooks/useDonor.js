// import React from 'react';
// import useAuth from "./useAuth";
// import useAxios from "./useAxios";
// import { useEffect, useState } from "react";

// const useDonor = () => {
//     const { user } = useAuth();
//     const [axiosSecure] = useAxios();
//     const [isDonor, setIsDonor] = useState(false);
//     const [isDonorLoading, setIsDonorLoading] = useState(true);

//     useEffect(() => {
//         const fetchDonorStatus = async () => {
//           try {
//             const response = await axiosSecure.get(`/api/users/donor/${user?.email}`);
//             console.log("Is Donor Response", response);
//             setIsDonor(response.data.donor);
//             setIsDonorLoading(false);
//           } catch (error) {
//             console.error("Error fetching donor status:", error);
//             setIsDonor(false);
//             setIsDonorLoading(false);
//           }
//         };
    
//         fetchDonorStatus();
//       }, [user, axiosSecure]);
    
//       return [isDonor, isDonorLoading];
//     };


// export default useDonor;

import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useDonor = () => {
  const { user } = useAuth();
  const [isDonor, setIsDonor] = useState(false);
  const [isDonorLoading, setIsDonorLoading] = useState(true);

  useEffect(() => {
    const fetchDonorStatus = async () => {
      try {
        // const response = await axiosSecure.get(`/api/users/${user?.email}`);
        
        let response = await fetch(`/api/users/donor/${user?.email}`);
        let data = await response.json();
        let result = data.result;
        console.log("Is Donor Response", response); 


        setIsDonor(result);
        setIsDonorLoading(false);
      } catch (error) {
        console.error("Error fetching Donor status:", error);
        setIsDonor(false);
        setIsDonorLoading(false);
      }
    };

    fetchDonorStatus();
  }, [user]);

  return [isDonor, isDonorLoading];
};

export default useDonor;
