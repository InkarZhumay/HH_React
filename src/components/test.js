'use client'
import {useState, useEffect, useRef} from 'react'
import TestUser from './testUser'

// export default function Test() {
//     const name = 'school';
//     const [counter, setCounter] = useState(10);

    
//     console.log("component was rerendered");
    
//     const minusFunc = () =>{
//         setCounter (counter + 1)
//         // counter--;
//         console.log("minus");
//     }
//     const plusFunc = () =>{
        
//         setCounter (counter - 1)
//         // counter++;
//         console.log("plus");
//     }
//     return (<div>
//         <h1>test components {name}</h1>
//         <p>test parag</p>
//         <a>test link</a>
//         <p>Counter: {counter}</p>
//         <button onClick={minusFunc}>Minus</button>
//         <button onClick={minusFunc}>Plus</button>
//     </div>)
// }

export default function Test() {

    const someRef = useRef()
    const [users, setUsers] = useState([{
        name: "Askar",
        id: 1
    },{
        name: "Aruzhan",
        id: 2
    },{
        name: "Igor",
        id: 3
    }])

    const deleteUser = (id) => {
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === id) {
                let temp = [...users]
                temp.splice(i, 1)
                return setUsers(temp)
            }
        }
    }

    const test = {}

    useEffect(() => {
        console.log("didMount - срабатывает один раз после первого рендера")

        return () => {
            console.log("componentWillUnMount - срабатывает перед закрытием компонента")
        }
    }, [])

    useEffect(() => {
        console.log("useEffect когда меняется Users")
        console.log(someRef)
    }, [users])

    console.log("Render")
    console.log(someRef)
    return (<div ref={someRef}>
        {users.map(item => (<TestUser key={item.id} user={item} deleteUser={deleteUser}/>))}
    </div>)
}