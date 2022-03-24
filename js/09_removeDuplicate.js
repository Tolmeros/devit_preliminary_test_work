function myString() {};
myString.prototype = new String();
myString.prototype.removeDuplicate = function() {
    var value = this.valueOf();
    const unique = Array.from(new Set(value.split(' ')));
    return unique.join(' ');
};

let y = myString('Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double');

console.log(y);
console.log(y.removeDuplicate());

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