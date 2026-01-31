import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
            mode: 'dark',
            primary: {
            main: '#00eaff',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#0f0f0f',
            paper: '#161616',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b3b3b3',
        },
    },
    typography: {
        fontFamily: 'Inter, Roboto, sans-serif',
        h1: {fontWeight: 700, letterSpacing: '-0.5px'},
        h2: {fontWeight: 600, letterSpacing: '-0.3px'},
        h3: {fontWeight: 300 },
        body1: { fontSize: '1.05rem' },
        button: { textTransform: 'none', fontWeight: 500 },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 48,
                    borderRadius: 12,
                    // paddingLeft: '20px',
                    // border: '1px solid white',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: '100vw',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    backdropFilter: 'blur(8px)',
                    // border: '1px solid white',
                },
            },
        },
    },
});

export default theme;
