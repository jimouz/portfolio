import { Box, Grid, Typography } from '@mui/material';
import StudiesCard from './StudiesCard';

export default function StudiesList() {
    const studies = [
        {
            title: 'MSc in Applied Electronics Systems',
            institution: 'International Hellenic University',
            year: '2021 – 2025',
            link: 'https://aes.iee.ihu.gr/'
        },
        {
            title: 'BSc in Electronic Engineering',
            institution: 'TEI of Crete',
            year: '1998 – 2011',
            link: 'https://ee.hmu.gr/'
        },
    ];

    return (
        <Box sx={{ px: 0, py: 6,  }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                Studies
            </Typography>
            <Grid container spacing={3} sx={{m:0, width:'100%'}}>
                {studies.map((s, i) => (
                    <Grid item xs={12} md={6} key={i}>
                        <StudiesCard {...s} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}