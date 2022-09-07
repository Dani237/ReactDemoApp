import { useState } from "react";

export const useCounter = (incial: number = 100) => {
    const [valor, setValor] = useState(incial);

    const acumular = (numero: number) => {
        setValor( valor + numero );
    }

    return {
        valor: valor, 
        acumular: acumular
    }
}