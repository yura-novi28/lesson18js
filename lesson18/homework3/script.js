let arr = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
]

console.log(arr.every((elem, index, arr) => elem.country.toLocaleLowerCase() == 'ukraine'))