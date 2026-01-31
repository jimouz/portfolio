import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, description, link }) {
  return (
    <Card
        sx={{
            backgroundColor: 'rgba(255, 255, 255 ,0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            maxWidth: '450px',
            p: 0,
            transition: '0.25s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'primary.main',
            }
        }}
    >
        <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>
                {description}
            </Typography>
            <Button 
                variant="outlined" 
                color="primary" 
                component={Link} 
                to={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project
            </Button>
        </CardContent>
    </Card>
  );
}