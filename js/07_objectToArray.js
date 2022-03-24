/*
function objectToArray(obj) {
    function isObject(object) {
        if (typeof object === "object" && object != null) {
            return true;
        } else {
            return false;
        }
    }
    
    var answer = [];
    for (const [key, value] of Object.entries(obj)) {
        if (isObject(obj[key])) {
            answer.push([key, objectToArray(value)]);
        } else {
            answer.push([key, value]);
        }
    }
    return answer;
};
*/

function objectToArray(obj) {
    function isObject(object) {
        if (typeof object === "object" && object != null) {
            return true;
        } else {
            return false;
        }
    }

    var obj = Object.keys(obj).map(
        (key) => isObject(obj[key]) ?
        [key, objectToArray(obj[key])] : [key, obj[key]]
    );
    return obj;
};

var arr = objectToArray({
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
});

console.log(arr);

/* Output
[
    ['name', 'developer'],
    ['age', 5],
    ['skills', [['html', 4], ['css', 5], ['js', 5]]]
]
*/