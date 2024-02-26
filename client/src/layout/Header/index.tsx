import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/store/slices/themeSlice";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { Box, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useMediaQuery, } from "@mui/material";
import { DarkMode, LightMode, Search, Menu } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { setLogout } from "@/store/slices/authSlice";

const Header = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth: { user }, theme: { mode } } = useSelector((state) => state);

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const fullName = user ? `${user?.firstName} ${user?.lastName}` : 'unknown';

  return (
    <Styled.Navbar>
      <Box gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreens && (
          <Box>
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </Box>
        )}
      </Box>

      {isNonMobileScreens ? (
        <Styled.Tools gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? (
              <DarkMode />
            ) : (
              <LightMode />
            )}
          </IconButton>
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              input={<InputBase />}
              sx={{paddingLeft: 1}}
            >
              <MenuItem value={fullName}>
                <Typography >{fullName.length > 12 ? `${fullName.substring(0, 12)} ...` : fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Log Out
              </MenuItem>
            </Select>
          </FormControl>
        </Styled.Tools>
      ) :
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      }

      
    </Styled.Navbar >
  )
}

export default Header