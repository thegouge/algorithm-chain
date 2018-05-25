/* REDUCE */

    // Reduces collection to a value which is the accumulated result of running each element in collection thru callback,
    // where each successive invocation is supplied the return value of the previous. 
    // If accumulator is not given, the first element of collection is used as the initial value. 
    // The iteratee is invoked with four arguments:
    // (accumulator, value, index|key, collection).

/* ARGUMENTS */

    // collection (Array|Object): The collection to iterate over.
    // callback (Function): The function invoked per iteration.
    // [accumulator] (*): The initial value.

/* RETURN */

    // (*): Returns the accumulated value.

import {forEach} from "../1-forEach/forEach";

export function reduce(collection, callback, accumulator) {
    // CODE GOES HERE
}