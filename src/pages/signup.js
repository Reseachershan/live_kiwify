import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Kiwify from '../assets/kiwify.png'
import Email from "../component/email";
import clsx from 'clsx'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    const [checkbox, setCheckBox] = useState(true);

    useEffect(() => {
        if (clickCount == 0) {
            setCheckBox(true)
        }else if (clickCount % 2 == 0) {
            setCheckBox(false)
        } else {
            setCheckBox(true)
        }
    }, [clickCount])

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

    const handleCheckboxChange = (event) => {
        if (clickCount === 0) {
        } else if (event.target.checked === false) {
            setCheckBox(false)
        }
        setClickCount(clickCount + 1);
    };

    const componentClasses = clsx(
        'form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full',
        { 'form-input block py-2 px-3 border border-red-500 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full': !isValidPassword }
      );

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src={Kiwify} alt="Workflow" className="mx-auto h-12 w-auto" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Criar nova conta</h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">Ou {""}
                    <Link to='/' className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        entrar na sua conta existente
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>
                        <Email label="E-mail" setEmail={(value) => setEmail(value)} email={email} />
                    </div>

                    <div className="mt-6">
                        <Email label="Repetir e-mail" setEmail={(value) => setConfirmEmail(value)} email={confirmEmail} />
                    </div>

                    <div className="mt-6"><label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                        Senha
                    </label>
                        <div>
                            <input onBlur={hanldePasswordBlue} value={password} onChange={(e) => hanldePassword(e.target.value)} type="password" autocomplete="current-password" name="password" className={componentClasses} />
                        </div>
                        {!isValidPassword && <div><div className="text-xs text-red-500  mt-2">Esse campo é obrigatório</div></div>}
                    </div>

                    <div className="mt-6">
                        <label className="relative flex items-start mt-2">
                            <div className="flex items-center h-5">
                                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                            </div>
                            <div className="ml-2 text-sm leading-5" >
                                <span className="font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline"> termos de uso</a>,
                                    <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" className="underline"> termos de licença de uso de software</a>, <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline"> política de conteúdo</a> da Kiwify
                                </span>
                                {!checkbox && <div class="text-red-500 border-b-0">(Esse campo é obrigatório)</div>}
                            </div>
                        </label>
                    </div>

                    <div className="mt-6">
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Criar conta
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup