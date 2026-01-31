import { Card, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export default function ConferenceCard({ title, location, date, description, link }) {
    return (
        <Card
            sx={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                p: 2,
                width: '100%',
                // maxWidth: 320,
                minHeight: 300,
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

                <Typography variant="body2" sx={{ opacity: 0.8, wordBreak: 'break-word' }}>
                    {location}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                    {date}
                </Typography>

                {description && (
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8, lineHeight: 1.6, py:1 }}>
                        {description}
                    </Typography>
                )}
                <Button 
                    variant="outlined" 
                    color="primary" 
                    component={Link} 
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{width:140, mt:2}}
                    startIcon={<LanguageRoundedIcon />}
                >Visit site
                </Button>
            </CardContent>
        </Card>
    );
}