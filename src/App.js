import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'; // Import Box from Chakra UI
import ContadorResponsive from './components/ContadorResponsive/ContadorResponsive';

const theme = extendTheme({
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
