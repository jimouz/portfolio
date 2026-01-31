import { Box, Grid, Typography } from '@mui/material';
import ConferenceCard from './ConferenceCard';

export default function ConferenceList() {
    const conferences = [
        {
            title: '10th International Workshop on Microsystems',
            location: 'Alexander Campus, International Hellenic University, Sindos, Greece',
            date: ' 8 Dec 2025',
            description: 'Participation in the 10th International Workshop on Microsystems, with emphasis on micro/nano‑electronics, embedded systems, and related emerging technologies.',
            link: 'https://microengineering.iem.ihu.gr/WoMGREECE/index.html'
        },
    ];

    return (
        <Box sx={{ px: 0, py: 6 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                Conferences
            </Typography>

            <Grid container spacing={3} sx={{m:0, width:'100%'}}>
                {conferences.map((c, i) => (
                    <Grid item xs={12} md={6} key={i}>
                        <ConferenceCard {...c} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}