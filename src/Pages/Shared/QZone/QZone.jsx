import React from 'react';
import pic1 from '../../../assets/qZone1.png'
import pic2 from '../../../assets/qZone2.png'
import pic3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light p-4'>
            <h3>QZone</h3>  
            <div>
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;