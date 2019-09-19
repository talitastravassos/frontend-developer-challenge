import React, { useCallback, useState, useEffect } from 'react'
import style from "./newsletter.module.css";
import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})

const NewsLetter = () => {
    const [state, setState] = useState({
        friendName: "",
        email: ""
    })

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;

        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
      },
    []
    );

    const submit = () => {
        Toast.fire({
            type: 'success',
            title: "Seu amigo foi cadastrado com sucesso."
        })

        setState({
            friendName: "",
            email: ""
        })
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className={style.container}>
            <h2 className="mb-5">Compartilhe a novidade</h2>
            <p className="mt-2 mb-5">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

            <form className={style.form}>
                <div className="form-group mr-4">
                    <label className="mb-0">Nome do seu amigo:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nome"
                        name="friendName"
                        value={state.friendName}
                        onChange={onChange}
                        />
                </div>
                <div className="form-group">
                    <label className="mb-0">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email"
                        name="email"
                        value={state.email}
                        onChange={onChange} />
                </div>
            </form>
            <button type="submit" className="btn btn-outline-secondary mt-5" onClick={submit}>Enviar agora</button>
        </div>
    )
}

export default NewsLetter
