import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/api/paymentdonatenow')
            .then(res => res.json())
            .then(data => {
                setMenu(data.result);
                setLoading(false);
            });
    }, [])
    return [menu, loading]
};

export default useMenu;