import React, { useState } from "react";
import { Link } from "react-router-dom";
import Kiwify from '../assets/kiwify.png'
import Email from "../component/email";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true);

    const hanldePassword = (value) => {
        setPassword(value)
    }

    const hanldePasswordBlue = () => {
        if (!password) {
            setIsValidPassword(false)
        } else {
            setIsValidPassword(true)
        }
    }

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src={Kiwify} alt="Workflow" className="mx-auto h-12 w-auto" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Entrar na sua conta</h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">Ou {""}
                    <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        fazer cadastro
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                        <Email label="E-mail" setEmail={(value) => setEmail(value)} email={email} />
                    </div>

                    <div className="mt-6"><label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Senha
                    </label>
                        <div>
                            <input style={{ border: !isValidPassword ? '1px solid red' : '', outline: !isValidPassword ? 'none' : '' }} onBlur={hanldePasswordBlue} value={password} onChange={(e) => hanldePassword(e.target.value)} type="password" autocomplete="current-password" name="password" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />
                        </div>
                        {!isValidPassword && <div><div class="text-xs text-red-500  mt-2">Esse campo é obrigatório</div></div>}

                    </div>
                    <div className="mt-2 flex items-center justify-end">
                        <div className="text-sm leading-5">
                            <a className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                Esqueceu a senha?
                            </a>
                        </div>
                    </div>
                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Entrar
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login