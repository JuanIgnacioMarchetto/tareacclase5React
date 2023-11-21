import React, { useState } from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';

const ContadorResponsive = () => {
    const [contador, setContador] = useState(0);
    const [times, setTimes] = useState(0);
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
        <React.Fragment>
            <button onClick={incrementarContador} disabled={contador >= 20}>Sumar +</button>
            <span>{contador}</span>
            <button onClick={decrementarContador} disabled={contador <= 0}>Restar -</button>
            <div>: {times}</div>
            {mostrarTextoTope && (
                <p>{contador === 0 ? 'Tope mínimo!' : '¡Tope máximo!'}</p>
            )}
        </React.Fragment>
    );
};

export default ContadorResponsive;
