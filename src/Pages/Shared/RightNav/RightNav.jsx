import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bannerImg from '../../../assets/bg.png'
import bannerImg1 from '../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>

            <Button className='mb-2' variant="outline-secondary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>

            <div className=' '>
                <h2 className='mt-4'>Find us on</h2>

                <ListGroup >
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-5 mb-5'>
                <QZone></QZone>
            </div>

            <div className='mb-5 d-flex justify-content-center' style={{ position: 'relative' }}>
                <img src={bannerImg} alt="" />
                <img src={bannerImg1} alt="" style={{ position: 'absolute', top: '0', left: '0', zIndex: '1', opacity: '50%' }} />

                <div className='' style={{ position: 'absolute', top: '0', left: '0', zIndex: '1' }}>
                    <h4 className='text-white text-center text fs-1 mt-5'>Create an Amazing Newspapers</h4>
                    <p className='fs-5 mt-3 text-white text-center p-4'>Discover thousands of options, easy to customize layouts one click to import demo and much more</p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="danger" size="lg">Learn More</Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default RightNav;