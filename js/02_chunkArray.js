function chunkArray(array, chunkSize){
    var index = 0;

    return {
       next: function(){
         if (index < array.length) {
           const chunk = array.slice(index, index + chunkSize);
           index += chunkSize;
           return {value: chunk, done: false};
         } else {
           return {value: undefined, done: true};
         }
       }
    }
}

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/* output

{ value: [ 1, 2, 3 ], done: false }
{ value: [ 4, 5, 6 ], done: false }
{ value: [ 7, 8 ], done: false }
{ value: undefined, done: true }

*/
