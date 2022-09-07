export const Funciones = () => {
    const sumar = (a: number, b: number): number => {
        return a + b;
    }

    return (
        <>
            <h2>Fucniones</h2>
            <span>El resultado es: { sumar(18, 2) }</span>
        </>
    )
    

}