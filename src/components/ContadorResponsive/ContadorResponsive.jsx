import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';

const ContadorResponsive = () => {
    const [contador, setContador] = useState(0);
    const [times, setTimes] = useState(0);
    const [isLargerThan768, isLargerThan1024] = useMediaQuery([
        "(min-width: 768px)",
        "(min-width: 1024px)",
    ]);

    const incrementarContador = () => {
        if (contador < 20) {
            setContador(contador + 1);
            setTimes(times + 1);
        }
    };

    const decrementarContador = () => {
        if (contador > 0) {
            setContador(contador - 1);
            setTimes(times + 1);
        }
    };

    const mostrarTextoTope = contador === 0 || contador === 20;

    return (
        <Box textAlign="center" mt={8}>
            <Button onClick={incrementarContador} disabled={contador >= 20} mr={2}>
                Sumar +
            </Button>
            <span>{contador}</span>
            <Button onClick={decrementarContador} disabled={contador <= 0} ml={2}>
                Restar -
            </Button>
            <div>: {times}</div>
            {mostrarTextoTope && (
                <p>{contador === 0 ? 'Tope mínimo!' : '¡Tope máximo!'}</p>
            )}
        </Box>
    );
};

export default ContadorResponsive;


