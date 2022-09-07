import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, User } from "../interfaces/reqRes";


export const useUsuarios = () => {
    const [ users, setUsers ] = useState<User[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if ( resp.data.data.length > 0  ) {
            setUsers( resp.data.data );
        }
        else {
            paginaRef.current --;
            alert("No hay más usuarios para listar");
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        users, 
        paginaAnterior,
        paginaSiguiente
    }
}