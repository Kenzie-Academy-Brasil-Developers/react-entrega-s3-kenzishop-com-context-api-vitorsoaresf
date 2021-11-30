import GlobalStyle from "./style/global";
import Routes from "./routes";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
