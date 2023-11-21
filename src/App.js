import React from 'react';
import { ChakraProvider, CSSReset, extendTheme, Box } from '@chakra-ui/react';
import ContadorResponsive from './components/ContadorResponsive/ContadorResponsive';

const [isLargerThan768, isLargerThan1024] = useMediaQuery([
  "(min-width: 768px)",
  "(min-width: 1024px)",
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <Box display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh">
          <ContadorResponsive />
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default App;
