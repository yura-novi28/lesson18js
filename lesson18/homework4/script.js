let arr = [
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'},
]

console.log(arr.some((arr) => arr.country.toLocaleLowerCase() === 'cuba'));