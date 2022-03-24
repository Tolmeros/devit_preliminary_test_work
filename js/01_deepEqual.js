function deepEqual(object_0, object_1) {
    function isObject(object) {
        if (typeof object === "object" && object != null) {
            return true;
        } else {
            return false;
        }
    }

    if (object_0 === object_1) {
        return true;
    }

    if (isObject(object_0) && isObject(object_1)) {
        if (Object.keys(object_0).length !== Object.keys(object_1).length) { 
            return false; 
        }
    
        for (var prop in object_0) {
            if (!deepEqual(object_0[prop], object_1[prop])) {
                return false;
            }
        }
        return true;
    }
}

console.log(deepEqual({name: 'test'}, {name: 'test'}));
console.log(deepEqual({name: 'test'}, {name: 'test1'}));
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 1}}));
console.log(deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}));
console.log(deepEqual({name: 'test'}, {name: 'test', age: 10}));

/* output

true
false
true
false
false

*/
