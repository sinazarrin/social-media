import { useSelector, } from "react-redux"
import routers from "./routes"
import { ThemeProvider, createTheme } from "@mui/material"
import themeSettings from "./theme"
import { useMemo } from "react"

const App = () => {
  const mode = useSelector(state => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div>{routers()}</div>
    </ThemeProvider>
  )
}

export default App