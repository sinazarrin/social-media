import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const RegisterContainer = styled(Box)(({ theme }) => ({
    "&>.MuiBox-root": {
        padding: '2rem',
        margin: "2rem auto",
        borderRadius: "1.5rem",
        backgroundColor: theme.palette.background.alt,
        "& form > .MuiBox-root": {
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }
    },

}))