import { ChakraBaseProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { theme } from './themeConfig';
import 'react-toastify/dist/ReactToastify.css';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {children}
      </ChakraBaseProvider>
    </>
  );
}

export default Providers;
