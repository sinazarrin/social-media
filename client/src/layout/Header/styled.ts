import { Height } from "@mui/icons-material";
import { styled } from "@mui/material";
import MuiBox from '@mui/material/Box';

export const Navbar = styled(MuiBox)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '1rem 6%',
    background: theme.palette.background.alt,
    ".MuiBox-root": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    ">.MuiBox-root": {
        ">p": {
            transition: 'all 0.1s',
            "&:hover": {
                color: '#68e9ff',
                cursor: "pointer",
            },
        },
        ">.MuiBox-root": {
            background: theme.palette.neutral.light,
            borderRadius: 9,
            gap: '3rem',
            padding: '0.1rem 1.5rem'
        }
    }
}))

export const Tools = styled(MuiBox)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    '.MuiSvgIcon-root': {
        fontSize: "25px",
        color: theme.palette.neutral.dark
    },
    '.MuiFormControl-root': {
        background: theme.palette.neutral.light,
        width: "150px",
        borderRadius: "0.25rem",
        p: "0.25rem 1rem",
        "& .MuiSvgIcon-root": {
            pr: "0.25rem",
            width: "3rem",
        },
        "& .MuiSelect-select:focus": {
            backgroundColor: theme.palette.neutral.light,
        },
    }
}))