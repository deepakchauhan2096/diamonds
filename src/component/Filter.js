const people = [
    {
        name: 'James',
        age: 31,
    },
    {
        name: 'John',
        age: 45,
    },
    {
        name: 'Paul',
        age: 65,
    },
    {
        name: 'Ringo',
        age: 49,
    },
    {
        name: 'George',
        age: 34,
    }
];

const Filter = () => {
    console.log(people)
    return (
        <>
            {people.filter(person => person.age > 60).map(filteredPerson => (
                <li>
                    {filteredPerson.name}
                </li>
            ))}
        </>


    )
  

}

export default Filter

