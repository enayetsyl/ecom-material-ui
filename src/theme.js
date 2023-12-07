import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values:{
      xs: 375,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
})

export default theme;