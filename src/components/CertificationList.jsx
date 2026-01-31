import { Box, Grid, Typography } from '@mui/material';
import CertificationCard from './CertificationCard';

export default function CertificationsList() {
    const certifications = [
        {
            title: 'Full-Stack Web Developer Bootcamp',
            provider: 'Dr. Angela Yu (Udemy)',
            year: '2022',
            link:'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
        },
        {
            title: 'Node.js Developer Course (3rd Edition)',
            provider: 'Andrew Mead & Rob Percival (Udemy)',
            year: '2023',
            link: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/'
        },
        {
            title: 'Azure Fundamentals',
            provider: 'Microsoft',
            year: '2025',
            link:'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification'
        },
    ];
    return (
        <Box sx={{ px: 0, py: 6 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                Certifications & Online Courses
            </Typography>
            <Grid container spacing={3}>
                {certifications.map((c, i) => (
                    <Grid item xs={12} md={6} key={i}>
                        <CertificationCard {...c} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}