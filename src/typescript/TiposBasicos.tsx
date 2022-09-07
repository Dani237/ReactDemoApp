export const TiposBasicos = () => {

    const nombre:String = 'Daniel';
    const edad: number = 18;
    const state:boolean = true;

    const poderes: String[] = ["Programar", "Volar", "Etc"];


    return (
        <>
            <h2>Tipos Básicos</h2>
            { nombre }, { edad }, { (state) ? 'Activo': 'Inactivo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}