# textamer

# A collection of utils to work with text

## This repo is currently in development! Please test carefully if you want to use for production

### Usage:

```js
const { search } = require('textamer');
```

## search

`search.adjacentDuplications(text, options)`

```
Returns an array contains groups of adjecent duplications found, or return null if no duplication
```

```
options properties:
- ignoreCase:boolean -  If true, the search will include words that have different case. Default: false
```

```js
search.adjacentDuplications('the the cat Cat catherine');
// ['the the']

search.adjacentDuplications('the the cat Cat Catherine', {
  ignoreCase: true,
});
// ['the the', 'cat Cat']
```

## process

```js
const { process } = require('textamer');
```

`.capitalizeWords(text, word)`

```
Returns a new string with all the words that match 2nd argument - first letter capitalized. Partially matches are ignore.
```

```js
process.capitalizeWords('frank talks about it frankly', 'frank');
// 'Frank talks about it frankly' ('frank' in 'frankly' is a partial match, hence ignored)
```
