import { Box, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
        title: 'trousis.gr',
        description: 'React + MUI SPA for a photography portfolio, with a responsive gallery and dark/light theme support.',
        link: 'https://trousis.gr/'
    },
    {
        title: 'evangeliakanava.gr',
        description: 'A calm, minimal web experience for a clinical psychologist implemented in React.',
        link: 'https://evangeliakanava.gr/'
    },
    {
        title: 'soulvanity.gr',
        description: 'A modern React website for a metal band, featuring a dark aesthetic, dynamic layout, and clean UI.',
        link: 'https://www.soulvanity.gr/'
    },
    {
        title: 'e-toolbox',
        description: 'A modern collection of engineering calculation tools, built with React for a fast, clean, and responsive experience.',
        link: 'https://jimouz.github.io/e-toolbox'
    }
  ];

  return (
    <Box
        sx={{
            px: 4,
            py: 6,
            maxWidth: '990px',
            margin: '0 auto',
            minHeight: '80vh'
        }}>
        <Typography
            variant="h3"
            sx={{
                fontWeight: 700,
                letterSpacing: '-1px',
                mb: 3,
            }}
        >
            Projects
        </Typography>
        <Grid container spacing={3}>
            {projects.map((p, i) => (
                <Grid item xs={12} md={6} key={i}>
                    <ProjectCard {...p} />
                </Grid>
            ))}
        </Grid>
    </Box>
  );
}
