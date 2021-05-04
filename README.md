# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thommati/lotide`

**Require it:**

`const _ = require('@thommati/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentance)`: Returns a count of all letters in the passed in string.  Returns an object where the keys are the letters from the strin passed in and the values are the number of times that that letter appears in the string.
* `countOnly(allItems, itemsToCount)`: Returns an object with a count of the items in the allItems array that have a true key in the itemsToCount object.
* `eqArrays(arr1, arr2)`: Returns true if two the two passed in arrays are the same.  Does work with arrays of objects, but works with nested arrays.
* `eqObjects(object1, object2)`: Determines if the two objects passed in are equal.  Works with nested objects and arrays with objects.
* `findKey(object, callback)`: Returns the first key in the passed in object for which the the callback function returns true for its value.  If the no value in the object returns true when tested agains the callback findKey returns undefined.
* `findKeyByValue(obj, val)`: Looks for the passed in value in the given object and returns the corresponding key if found.  Only works with primitive types for data values.
* `flatten(nestedArray)`: Returns a single dimensional array when a nested array is passed in.
* `head(arr)`: Returns the fist element of the passed in array, or undefined if the array length is zero.
* `letterPositions(sentence)`: Pass in a string and it returns an object of all the letters in the string with an array of indices where those letters occur in the string.  Does not report whitespace.
* `map(array, callback)`: Works like the built-in JavaScript map method except pass in the array as the first argument and the function to run on each element of the array as the second argument. Returns a new array equal in length to the array passed in.
* `middle(arr)`: Returns a new array with the middle elment(s) of the array passed in.  Odd length arrays return arrays with one element, while even lenth arrays return arrays of two elements.
* `tail(arr)`: Returns a new array equal to the passed in array without its first element.
* `takeUntil(array, callback)`: Pass in an array and a callback function.  Runs the callback against each element of the array and adds it to the output array if the callback returns false.  Once the callback returns true no more elements are added and the new array returns at that point.
* `without(source, itemsToRemove)`:  Pass in two arrays.  Removes returns a new array with the elements of the first array that are not in the second array.