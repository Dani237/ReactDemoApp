import { useState } from "react"
import { useFormulario } from "../hooks/useFormulario"


export const Formularios = () => {

   const { formulario, onChange, email, password } = useFormulario({
    email: 'test@test.com',
    password: '123456'
});

    return (
        <>
            <h2>Formularios</h2>
            <input type="text" 
                    className="form-control"
                    placeholder="email"
                    value={ email }
                    onChange = { ( {target} ) => onChange( target.value, 'email')}
            />
            <input type="text" 
                    className="form-control mt-2 mb-2"
                    placeholder="password"
                    value={ password }
                    onChange = { ( {target} ) => onChange( target.value, 'password')}
            />

            <code>
                <pre>
                    { JSON.stringify( formulario, null, 2 ) }
                </pre>
            </code>
        </>
    )
}