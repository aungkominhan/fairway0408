import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Profile (){
    const {id }=useParams()
    return <Box>
        <Typography variant="h3">Profile -{id}</Typography>
    </Box>
}