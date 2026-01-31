import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function StudiesCard({ title, institution, year, link }) {
  return (
    <Card
        sx={{
            display: 'flex',
            margin: 0,
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            minHeight: 240,
            p: 1,
            width: '100%',
            maxWidth: 320,
            transition: '0.25s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'primary.main',
            },
        }}
    >
        <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {institution}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.6 }}>
                {year}
            </Typography>
            <Box sx={{pt:4}}>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    component={Link} 
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{width:140}}
                    startIcon={<LanguageRoundedIcon />}
                >Visit site
                </Button>
            </Box>
        </CardContent>
    </Card>
  );
}