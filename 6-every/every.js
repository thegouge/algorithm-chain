/* EVERY */

    // Checks if predicate returns truthy for all elements of collection. 
    // Iteration is stopped once predicate returns falsey. 
    // The predicate is invoked with three arguments: (value, index|key, collection).

    // Note: This method returns true for empty collections 
    //       because everything is true of elements of empty collections.

/* ARGUMENTS */

    // collection (Array|Object): The collection to iterate over.
    // predicate (Function): The function invoked per iteration.

/* RETURN */

    // (boolean): Returns true if all elements pass the predicate check, else false.

import {forEach} from "../1-forEach/forEach";

export function every(collection, predicate) {
    // CODE GOES HERE
}