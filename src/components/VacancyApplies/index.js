import Apply from "./apply.js";

export default function Applies ({applies}) {
    
    const showApplies = applies.map(item =>
        (<Apply item={item}
                key={item.id}
                />));

    return (<div className="applies">
        {showApplies.lenght === 0 && "Откликов не найдено"}
        {showApplies}
    
    </div>)
}