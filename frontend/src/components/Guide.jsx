import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import guide from '../assets/guide.json';

const Guide = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Example: Move the animation after 5 seconds
        setTimeout(() => {
            setPosition({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
        }, 0);
    }, []);

    return (
        <div className='container bg-dark'>
            <div>
            <motion.div
                animate={{ x: '50%', y: '0%' }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                style={{ position: 'absolute', transform: 'translate(-50%, -50%)', height: 300, width: 300 }}
            >
                <Lottie animationData={guide} loop={true} autoplay={true} />
            </motion.div>
        </div>
        </div>
        

    );
}

export default Guide;
