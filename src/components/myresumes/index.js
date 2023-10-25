import MyResume from "./myresume";
    // const resumes = [1, 2, 3, 4, 5]

//doesn't work
// export default function MyResumes [(resumes)] {
//     const showResumes = resumes.map(item => (<MyResume/>));
//     return (<div>
//         {showResumes}
//     </div>)


// export default function MyResumes (props) {
//     const asd = props
//     const showResumes = props.asd.map(item => (<MyResume/>));
//     return (<div>
//         {showResumes}
//     </div>)
// }

// export default function MyResumes (props) {
//     const showResumes = props.asd.map(item => (<MyResume/>));
//     return (<div>
//         {showResumes}
//     </div>)
// }

// export default function MyResumes (props) {
//     const showResumes = props.asd.map(item => (<MyResume item = {item} />));

//doesn't work
// export default function MyResumes (position, createdAt, show, views, applies) {
//     const showResumes = resumes.map(item =>
//         (<MyResume position = {item.position}
//             createdAt = {item.createdAt}
//             show = {item.states.show}
//             views = {item.states.views}
//             applies = {item.states.applies}/>));
    

export default function MyResumes ({resumes}) {
    const showResumes = resumes.map(item =>
        (<MyResume item={item}
            key={item.id}
            />));
    
    return (<div>
        {showResumes}
    </div>)
}