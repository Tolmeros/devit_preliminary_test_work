class myString extends String {
    removeDuplicate() {
        var value = this.valueOf();
        const unique = Array.from(new Set(value.split(' ')));
        return unique.join(' ');
    }
}

let y = new myString('Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double');

console.log(y.removeDuplicate());
/* output

Int32 Double

*/

/*
String.prototype.removeDuplicate = function() {
    var value = this.valueOf();
    const unique = Array.from(new Set(value.split(' ')));
    return unique.join(' ');
};
*/
String.prototype.removeDuplicate = myString.prototype.removeDuplicate;

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

console.log(x.removeDuplicate());

/* output

Int32 Double

*/
