import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useSslMoney = () => {
    const { user } = useAuth()
    const [moneys, setMoneys] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`/api/sslmoneyfromdb/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMoneys(data.result);
                setLoading(false);
            });
    }, [])
    return [moneys, loading]
};

export default useSslMoney;