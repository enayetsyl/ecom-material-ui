import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values:{
      xs: 375,
      sm: 425,
      md: 769,
      lg: 1025,
      xl: 1440,
    },
  },
})

export default theme;