import { Box, Typography, OutlinedInput,Button,Alert } from "@mui/material";

export default function Register() {
    return <Box> 
        <Typography variant="h3" sx={{textAlign: "center"}}>Register</Typography>
        <Alert severity="warning" sx={{mb:4}}>Username and Password required</Alert>
        <form>
        <OutlinedInput sx={{mb:2}} fullWidth placeholder="Name" />
            <OutlinedInput sx={{mb: 2}} fullWidth placeholder="Username"/>
            <OutlinedInput sx={{mb:2}} fullWidth placeholder="Password" type="password"/>
            <OutlinedInput sx={{mb: 2}} multiline fullWidth placeholder="Profile"/>
            <OutlinedInput sx={{mb:2}} fullWidth placeholder="Password" type="password"/>
            <Button variant="contained" type="submit" fullWidth>Login</Button>
        </form>
    </Box>
}