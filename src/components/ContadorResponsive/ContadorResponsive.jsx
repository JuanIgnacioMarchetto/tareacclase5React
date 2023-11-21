import React from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';

const ContadorResponsive = () => {
    const [contador, setContador] = React.useState(0);
    const [isLargerThan768, isLargerThan1024] = useMediaQuery([
        "(min-width: 768px)",
        "(min-width: 1024px)",
    ]);

    const incrementarContador = () => {
        if (contador < 20) {
            setContador(contador + 1);
        }
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const mostrarTextoTope = contador === 0 || contador === 20;

    return (
        <Box
            textAlign="center"
            mt={8}
            bg="#0ed1c7"
            p={6}
            width="60%"
            height="300px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="54% 46% 58% 42% / 33% 49% 51% 67%" 
        >
            <Box mb={4}>
                <Button
                    onClick={incrementarContador}
                    disabled={contador >= 20}
                    mr={isLargerThan768 ? 2 : 0}
                    bg="#722856"
                    p={3}
                >
                    Sumar +
                </Button>
                <span p={1} background="#09524e">{contador}</span>
                <Button
                    onClick={decrementarContador}
                    disabled={contador <= 0}
                    ml={isLargerThan768 ? 2 : 0}
                    bg="#722856"
                    p={3}
                >
                    Restar -
                </Button>
            </Box>
            {mostrarTextoTope && (
                <p style={{
                    background: '#09524e',
                    padding: '2px',
                    borderRadius: '5px',
                }}>{contador === 0 ? 'Tope mínimo!' : '¡Tope máximo!'}</p>
            )}
        </Box>
    );
};

export default ContadorResponsive;
