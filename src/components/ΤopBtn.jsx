import { Box, Fade } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

function TopBtn() {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
    return (
        <Fade in={visible}>
            <Box 
                sx={{
                    position: 'fixed',
                    bottom: '5%',
                    right: '3vw',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#00eaff22',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: '0.3s ease',
                    boxShadow: '0 0 12px #00eaff55',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 0 16px #00eaffaa',
                    }
                }}
            >
                <ArrowDropUpRoundedIcon className='arrow'
                    onClick={ scrollToTop }
                    sx= {{
                        display: visible ? 'inline' : 'none',
                        fontSize: '40px',
                        // '&:hover': { opacity: '1' },
                    }}
                />
                <style>
                    {`
                        @media screen and (max-width: 900px) {
                            .arrow {
                                bottom: 5%;
                                right: 5vw;
                            }
                        }
                    `}
                </style>
            </Box>
        </Fade>
    );
}
export default TopBtn;