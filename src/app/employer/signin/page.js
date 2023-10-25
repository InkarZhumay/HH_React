'use client'
import { useEffect, useState } from "react";
import { setError, signIn } from "@/app/store/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';

export default function EmployerSignin() {

    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState(1)
    const [password, setPassword] = useState("")
    
    const router = useRouter()

    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error)
    
    useEffect(() => {
        return() => {
            dispatch(setError(null))
        }
    }, [])


    const handleSignin = () => {
        dispatch(signIn({
            email,
            password
        }, router))
    }

    return (
        // <main className={styles.main}>
        <main className='bg'>
            <div className='container'>
                <div className='auth-header'>
                    <img src="/images/logo.svg"/>  
                    <p>Зарегистрируйтесь сейчас, чтобы купить доступ к базе резюме или публикацию вакансий по выгодным ценам - все акции уже ждут вас в разделе "Спецпредложения"</p>
                    <p>Ответим на ваши вопросы</p>
                    <a href='tel:77272321313'>+7 727 232 13 13</a>
                </div>
            

            <section className="login-page">
                <div className="card">
                    <h1>Вход для поиска сотруднкиов</h1>
                    <p>В завершении на почту придет пароль</p>
                    <form>
                        <input className="Input" placeholder="Введите email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input className="Input" placeholder="Введите пароль" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button className="button button-primary" onClick={handleSignin} type="button" >Войти</button>
                    </form>
                    {error && Object.keys(error).map(key => (<p className="error" key={key}> {error[key]}</p>))}
                </div>


                
            </section>
            </div>
        </main>
    )
    }
