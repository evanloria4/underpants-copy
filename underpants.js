// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
/*
I: Any value
O: Return the value
C: n/a
E: n/a
*/
// function should return the value

_.identity = function(value){
return value;
}



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
/* 
I: Value
O: Return the value type
C: n/a
E: n/a
*/
// Use typeof method to determine typeof data
// Return typeof result

_.typeOf = function(value){
    if (Array.isArray(value) === true){
        return 'array';
    } else if (value === null){
        return 'null';
    } else {
        return typeof value
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
/*
I: An array and a number
O: Return an empty array, first element of the array, or first number items of array
C: n/a
E: If number is negatvie, if number is greater than 0
*/
// Use for loop to iterate over array
/**
 *  Use if conditional to test:
 * If Array.isArray() --> return [] if false
 * If number is undefined or not a number --> return the first index of array
 * Otherwise return the first <number> items of array
 */
_.first = function(array,number){
    if (Array.isArray(array) !== true){
        return [];
    } else if(typeof number !== 'number'){
        return array[0];
    } else if (number > 0 === false){
        return [];
    } else {
        return array.slice(0, number);
    }
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
/* 
I: An array and a number
O: Return an empty array, the last element of the array, or the last <number> elements of the array
C: n/a
E: What if the <number> is negative or greater than array.length?
*/
/** 
 * Use if conditional to test:
 * If Array.isArray()
 * If typeof number === 'number'
 * Otherwise return the last <number> elements of array
 **/
 _.last = function(array, number){
    if (Array.isArray(array) !== true){
        return [];
    } else if (typeof number !== 'number'){
        return array[array.length - 1];
    } else if (number < 0){
        return [];
    } else if (number > array.length === true){
        return array;
    } else {
        return array.slice(array.length - number, array.length);
    }
 }

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
/*
I: Array and a value
O: The index of the given value
C: n/a
E: What if the array has multiple occurances of the value, if value isn't in the array
*/
// Use .indexOf()method
// Return the index of the value
_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
/*
I: An array and a value
O: Return true if the <array> contains <value>, otherwise return false
C: n/a
E: What if no value is given?
*/
// Use ternary operator 
// Use .includes() method
// Return true or false
_.contains = function(array, value){
   return array.includes(value) ? true: false;

}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
/*
I: A collection and a function
O: n/a
C: n/a
E: n/a
*/
// Use if conditonal
// If collection is an array pass each element through the function
// Use for loop to pass elements through function
// If the element is an object pass each property through the function
// Use for in loop to pass elements through function
_.each = function(collection, func){
if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++){
    func(collection[i], i, collection);
    }
} else {
    for (var key in collection){
        func(collection[key], key, collection);
    }
}
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
/*
I: An array
O: New array of all elements from <array> without duplicates
C:
E: 
*/
// Create storage array result
// Use for loop to iterate over array
// Pass each element of the array through _.indexOf function
// If invoking the functionon the element === -1 then push that element onto the storage array
// Return storage array
_.unique = function(array){
    let result = [];
    for (let i = 0; i < array.length; i++){
       if (_.indexOf(result, array[i]) === -1){
        result.push(array[i]);
       }
    }
    return result;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
/*
I: An array and a function
O: A new array that contains the elements that returned true after being run through <function>
C: n/a
E: If <functionn> returns something other than true or false
*/
// Create storage array called true to push elements that return true when passed through function
// Use for loop to iterate through the array and invoke the function on each element
// Use if conditional to test if the elements at each index return true when passed through the function
// Push elements that return true onto the storage array
// Return the new array with the passing elements
_.filter = function(array, func){
    let output = [];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) === true){
            output.push(array[i]);
        }
    }
    return output;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
/*
I: An array and a function
O: A new array of the elements for which calling the <function> returns false
C: n/a
E: n/a
*/
// Create a storage array
// Use for loop to iterate over array
// Pass each element through the function
// If element passed through returns false push that element onto storage array
// Return the storage array
_.reject = function (array, func){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (!func(array[i], i, array)){
            result.push(array[i]);
        }
    }
    return result;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
/*
I: An array and a function
O: An array with two sub arrays for which 1: The function returned something truthy 2: The function returned something falsy
C: n/a
E: This is going to return an array of arrays
*/
// Create a storage array which is an array of empty arrays
// Loop over the array and test if passing the element through the function returns true or false
// If true --> push the value onto result[0]
// If false --> push the value onto result[1]
// Return result
_.partition = function(array, func){
    let result = [[], []];
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            result[0].push(array[i]);
        } else {
            result[1].push(array[i])
        }
    }
return result;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
/*
I: A collection and a function
O: Return a new array with the value from the collection
C: n/a
E: n/a
*/
// Create storage array to be returned
// Determine if collection is an array using .ArrayisArray() method
// If the ArrayisArray() method returns true --> use for loop to pass each index through the call function and push the return value onto the new array
// If the  ArrayisArray() method returns false --> Pass the value at each property through the call function and push the return value onto the new array
// Return the new array
_.map = function(collection, func){
    let output = [];
    if (Array.isArray(collection) === true){
        for (let i = 0; i < collection.length; i++){
            // Invoke function on the element, index, and collection
            output.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
        output.push(func(collection[key], key, collection))
    }
}
return output;
}




/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}