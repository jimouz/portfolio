const radials = {
    blueRadial: {
        position: 'absolute',
        top: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,234,255,0.25), transparent 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
    },
    purpleRadial: {
        animation: 'pulse 2s infinite ease-in-out',
        position: 'absolute',
        overflow: 'hidden',
        bottom: '50px',
        right: '10px',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(255,0,255,0.8), transparent 70%)',
        filter: 'blur(120px)',
        zIndex: -100,
    }
}
export default radials;