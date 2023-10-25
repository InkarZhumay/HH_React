
const monthsInRussian = [
    "январь", "февраль", "март", "апрель", "май", "июнь", 
    "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];

export default function WorkingHistory({workingHistory, remove}) {
    const startDate = new Date(WorkingHistory.start_date)
    const endDate = new Date(WorkingHistory.end_date)
    return (
        <div className="working-history">
            {/* <span>{monthsInRussian[startDate.getMonth()]} {startDate.getFullYear()} - {monthsInRussian[endDate.getMonth()]} {endDate.getFullYear()}</span> */}
            <span>{monthsInRussian[startDate.getMonth()]} {startDate.getUTCFullYear()} - {monthsInRussian[endDate.getMonth()]} {endDate.getUTCFullYear()} </span>
            <h4>{WorkingHistory.company_name}</h4>
            <p>{WorkingHistory.company_description}</p>

            <span onClick={() => remove(workingHistory)}>удалить</span>
        </div>
    )
}