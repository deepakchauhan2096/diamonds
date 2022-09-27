import React, {useState} from 'react'

const Check = () => {

    // const [data, setData] = useState([]);
    const [students, setStudents] = useState([]);


    const Data = [
        {
            name: "None"
        },
        {
            name: "V-Slight"
        },
        {
            name: "Faint"
        },
        {
            name: "Slight"
        },
        {
            name: "Mediunm"
        },
        {
            name: "Strong"
        },
        {
            name: "V-Strong"
        }
    ]


    const addOrRemove = (name) => {
        const newStudents = [...students];
        const index = newStudents.indexOf(name);
        if (index === -1) {
            newStudents.push(name);
        } else {
            newStudents.splice(index, 1);
        }
        setStudents(newStudents);
        console.log(students)
    }



    return (
        <div>

            <table className="table" >
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item, id) => {
                        return <tr key={id}>
                            <td>{item.name}</td>
                            <td><input type="checkbox" onClick={() => addOrRemove(item.name)} /></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Check