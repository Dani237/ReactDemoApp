import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { useUsuarios } from "../hooks/useUsuarios";
import { ReqResListado, User } from "../interfaces/reqRes";


export const Usuarios = () => {

    const { users, paginaAnterior, paginaSiguiente } = useUsuarios();
    

    const renderItem = ( { id, first_name, last_name, email, avatar }: User) => {
        return (
            <tr key={ id.toString() }>
                <th>
                    <img src={ avatar } 
                        alt={ first_name } 
                        style={{ 
                            width: 40,
                            borderRadius: 100
                         }}/>
                </th>
                <th>{ first_name } { last_name }</th>
                <th>{ email }</th>
            </tr>
        )
    }

    return (
        <>
            <h2>Usuarios: </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(renderItem)
                    }
                </tbody>
            </table>

            <button className="btn btn-primary"
                    onClick={ paginaAnterior }>
                    Anteriores
            </button>

            &nbsp;

            <button className="btn btn-primary"
                    onClick={ paginaSiguiente }>
                    Siguientes
            </button>
        </>
    )
}