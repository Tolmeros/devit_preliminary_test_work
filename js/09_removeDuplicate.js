
String.prototype.removeDuplicate = function() {
    var value = this.valueOf();
    const unique = Array.from(new Set(value.split(' ')));
    return unique.join(' ');
};

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

console.log(x.removeDuplicate());

/* output

Int32 Double

*/
