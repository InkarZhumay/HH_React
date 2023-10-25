import { useState } from "react"
export default function Spec({spec, onChange, value}){
// export default function Spec({spec}){

    // const [active, setActive] = useState(false)
    return (
        // <div className={`spec`} onClick={() => setActive(!active)}>
        <div className={`spec`}>
            {/* <img src="/images/arrow-right.svg"/> */}
            {/* <input type="radio" name="spec" value={spec.id} id={`${spec.id}`} checked/> */}
            {value === spec.id && <input type="radio" name="spec" value={spec.id} data-name = {spec.name} id={`${spec.id}`} onChange={onChange} checked/>}
            {value !== spec.id && <input type="radio" name="spec" value={spec.id} data-name = {spec.name} id={`${spec.id}`} onChange={onChange}/>}
            <label htmlFor={`${spec.id}`}>{spec.name}</label>
        </div>
    )
}