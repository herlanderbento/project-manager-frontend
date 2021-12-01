import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContextProvider } from "./context/AuthContext";
import { AppLayout } from "./components/AppLayout";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer theme="dark" />
        <AppLayout>
          <Routes />
        </AppLayout>
        <GlobalStyles />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
