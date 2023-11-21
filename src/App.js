import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'; 
import ContadorResponsive from './components/ContadorResponsive/ContadorResponsive';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '54% 46% 58% 42% / 33% 49% 51% 67% ', 
        background: '#722856',
      },
      
    },
  },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <div className="App">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <ContadorResponsive />
                </Box>
            </div>
        </ChakraProvider>
    );
}

export default App;
