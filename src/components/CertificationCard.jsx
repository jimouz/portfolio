import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function CertificationCard({ title, provider, year, link }) {
    return (
        <Card
            sx={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                width: '300px',
                minHeight: '240px',
                p: 0,
                wordBreak: 'break-word',
                transition: '0.25s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'primary.main',
                }
            }}
        >
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {provider}
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