import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Radials from '../styles/Radials';

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 3,
                px: 4,
            }}
        >
            <Box sx={Radials.blueRadial} />
            <Box sx={Radials.purpleRadial} />
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    animation: 'fadeIn 1.2s ease-out',
                }}
            >
                Hi, I'm <span style={{ color: '#00eaff' }}>Dimitris</span>
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 300,
                    color: 'text.secondary',
                    maxWidth: '600px',
                    animation: 'fadeIn 1.6s ease-out',
                }}
            >
                Front‑End Developer focused on clean UI, modern web experiences and
                minimal design.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 2, animation: 'fadeIn 2s ease-out' }}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{minWidth:140}}
                    component={Link}
                    to="/projects"
                >
                    View Projects
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{minWidth:140}}
                    component={Link}
                    to="/contact"
                >
                    Contact Me
                </Button>
            </Box>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </Box>
    );
}
