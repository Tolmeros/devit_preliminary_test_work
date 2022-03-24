function bulkRun(array) {
    var results = [];
    for (const element of array) {
        var fn = element[0];
        var args = element[1];
        const task = new Promise((resolve, reject) => {
            args.push(resolve);
            fn(...args);
        });
        results.push(task);
    }
    return Promise.all(results);
}

const f1 = (cb) => {cb(1)};
const f2 = (a, cb) => {cb(a)};
const f3 = (a, b, cb) => {setTimeout(() => {cb([a, b])}, 1000)};
 
bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]]
    ]
).then(console.log);

/* output

[1, 2, [3, 4]]

*/
