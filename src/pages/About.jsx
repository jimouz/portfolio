import { Box, Typography } from '@mui/material';
import StudiesList from '../components/StudiesList';
import ConferenceList from '../components/ConferenceList';
import CertificationsList from '../components/CertificationList';

export default function About() {
  return (
    <Box>
        <Box
            sx={{
                px: 4,
                py: 6,
                maxWidth: '990px',
                margin: '0 auto',
                // border: '1px solid white'
            }}
            >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    mb: 3,
                }}
            >
                About Me
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 400,
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    mb: 2,
                }}
            >
                I'm Dimitris, a front‑end developer focused on creating clean, modern and
                minimal web experiences. I enjoy blending technical precision with visual
                design, building interfaces that feel smooth, intuitive and expressive.
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 400,
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    mb: 2,
                }}
            >
                I work mainly with React, JavaScript and modern UI libraries, crafting
                responsive layouts, subtle animations and polished user flows. I love
                solving problems, refining details and turning ideas into functional,
                elegant interfaces.
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 400,
                    color: 'text.secondary',
                    lineHeight: 1.7,
                }}
            >
                Whether it's a personal brand, a business website or a creative concept,
                my goal is always the same: build something that feels simple, fast and
                visually meaningful.
            </Typography>
            <StudiesList />
            <ConferenceList />
            <CertificationsList />
        </Box>
    </Box>
  );
}