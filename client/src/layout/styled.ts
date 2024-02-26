import { Grid, styled } from "@mui/material";

export const Container = styled(Grid)(({theme}) => ({
    background: theme.palette.background.default,
    height: '100vh'
}))