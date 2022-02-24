import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Watch } from  'react-loader-spinner'

const Loder = () => {
    return (
        <div align="center" className='justify-content-center'>
            <Watch
                height="100"
                width="100"
                color='red'
                ariaLabel='loading'
            />
        </div>
    );
};

export default Loder;