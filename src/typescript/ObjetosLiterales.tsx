interface Persona {
    nombre: String;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: String;
    ciudad: String;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Daniel',
        edad: 18,
        direccion: {
            pais: 'Perú',
            ciudad: 'Lima'
        }
    }
    
    return (
        <>
            <h2>Ojetos Literales</h2>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 )}
                </pre>
            </code>
        </>
    )
}