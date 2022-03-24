var m = [
 [5, 3, 6], 
 [7, 11, 2],
 [15, 9, 4]
];

function calcMatrix(matrix) {

    var lines_mins = matrix.map(line => Math.min(...line));
    var min = Math.min(...lines_mins);
    var answer = matrix.map(
        line => line.map(x => (x % 2  == 0) ? x : x * min )
    );
    
    return answer;
    
}

console.log(calcMatrix(m));

/* output

[
 [10, 6, 6],
 [14, 22, 2],
 [30, 18, 4]
]

*/

