import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'; 
import ContadorResponsive from './components/ContadorResponsive/ContadorResponsive';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '14% 86% 17% 83% / 69% 35% 65% 31%', 
      },
      variants: {
        primary: {
          backgroundColor: 'primary',
          color: 'white',
        },
        secondary: {
          backgroundColor: 'secondary',
          color: 'white',
        },
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
