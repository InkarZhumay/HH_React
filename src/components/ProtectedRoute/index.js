import { useRouter } from "next/navigation"
// import { useEffect } from "react"
// import { UseSelector } from "react-redux"
import jwt_decode from 'jwt-decode'

export default function ProtectedRoute ({children}) {
    const router = useRouter()
    // const isAuth = useSelector(state => state.auth.isAuth)
    const token = localStorage.getItem("token")
    if(token){
        let decodedToken = jwt_decode(token)
        if(decodedToken.exp * 1000 > Date.now()){
            // dispatch(authorize({token})) 
            return (<>{children}</>)

        } else if(decodedToken.role.name === "employee") {
            router.push('/login')
        }else{
            router.push('/employer/signin')
        }
    }else {
        router.push('/login')
    }
    // const router = useRouter()

    // useEffect(() => {
    //     if(!isAuth){
    //         router.push('/login')
    //     }
    // }, [isAuth])

}