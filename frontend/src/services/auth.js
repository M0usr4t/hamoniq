export const handleLogin = async (setLoggingIn) => {
    setLoggingIn(true)
    try{
        await new Promise(resolve => setTimeout(resolve, 3000));
        window.location.href = 'http://localhost:3000/api/authorize-spotify-user';
    } catch (err) {
        setLoggingIn(false)
        console.error('Error during Spotify login:', error);
    }
}