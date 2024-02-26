import { styled } from "@mui/material";
import MuiButton from '@mui/material/Button'

export const CustomButton = styled(MuiButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.alt,
    "&:hover": { color: theme.palette.primary.main },
}))