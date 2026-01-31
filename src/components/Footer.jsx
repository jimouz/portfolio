import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
        sx={{
            mt: 8,
            py: 2,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center',
            color: 'text.secondary',
        }}
        >
        <Typography variant="body2">
            © {new Date().getFullYear()} Dimitris Ouzounis — All rights reserved.
        </Typography>
        </Box>
    );
}