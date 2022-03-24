function NotificationException() {}
NotificationException.prototype = new Error();

function ErrorException() {}
ErrorException.prototype = new Error();

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
  try {
      return primitiveMultiply(a, b);
  } catch (e) {
      if ( e instanceof NotificationException ) {
        return primitiveMultiply(a, b);    
      } else {
          throw e;
      }
  }
  
}

console.log(reliableMultiply(8, 8));
