var arr = [
    ['name', 'developer'],
    ['age', 5],
    ['skills', [
        ['html',4],
        ['css', 5],
        ['js',5]
    ]]
];

function arrayToObject(a) {
  return a.reduce((o, [k, v]) => Object.assign(o, {
   [k]: Array.isArray(v) ? arrayToObject(v) : v,
  }), {});
}

console.log(arrayToObject(arr));

/* Output
{
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
}
*/
