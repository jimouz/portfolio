import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Navbar() {
  const btnStyle = {
    minWidth: '28px',
    height: '20px',
    display: 'flex row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginLeft: 1.5,
  }
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ minWidth: '100vw' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',  width: '100vw', padding: '2px'}}>
        <Box>
          <Typography 
            variant="h5" 
            sx={{ fontWeight: 700, letterSpacing: '1px' }}
          >
            D
            <span
              style={{
                color: '#00eaff',
                marginLeft: '2px',
                animation: 'pulse 2s infinite ease-in-out',
                textShadow: `
                  0 0 4px #00eaff,
                  0 0 8px #00eaff,
                  0 0 16px #00eaff
                `
              }}
            >
              O
            </span>
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.5 }}>
            Dimitris Ouzounis
          </Typography>
          <style>
            {`
              @keyframes pulse {
                0% {
                  text-shadow:
                    0 0 4px #00eaff,
                    0 0 8px #00eaff,
                    0 0 12px #00eaff;
                  opacity: 0.9;
                }
                50% {
                  text-shadow:
                    0 0 8px #00eaff,
                    0 0 16px #00eaff,
                    0 0 32px #00eaff;
                  opacity: 1;
                }
                100% {
                  text-shadow:
                    0 0 4px #00eaff,
                    0 0 8px #00eaff,
                    0 0 12px #00eaff;
                  opacity: 0.9;
                }
              }
            `}
          </style>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/"
            color="primary" 
            startIcon={<HomeRoundedIcon  sx= {btnStyle}/>}
          />
          <Button
            component={Link}
            to="/projects"
            color="primary"
            startIcon={<WorkOutlineRoundedIcon sx= {btnStyle}/>}
          />
          <Button
            component={Link}
            to="/about"
            color="primary"
            startIcon={<PersonRoundedIcon sx= {btnStyle}/>}
           />
          <Button
            component={Link}
            to="/contact"
            color="primary"
            startIcon={<MailRoundedIcon sx= {btnStyle}/>}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}