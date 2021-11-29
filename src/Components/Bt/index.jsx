import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Bt = ({ children, ...rest }) => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#487eb0",
        darker: "#d4e6fd",
      },
      neutral: {
        main: "#64748B",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button {...rest} color="primary" variant="contained">
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default Bt;
