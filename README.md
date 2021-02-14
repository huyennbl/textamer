# textamer

# A collection of utils to work with text

> Feel free to for a feature request, I'll try my best to help :)

## This repo is currently in development! Please test carefully if you want to use for production

### Installation:

```js
npm install textamer
// or yarn
yarn add textamer
```

## search

```js
const { search } = require('textamer');
```

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

`process.capitalizeWords(text, word)`

```
Returns a new string with all the words that match 2nd argument - first letter capitalized. Partially matches are ignore.
```

```js
process.capitalizeWords('frank talks about it frankly', 'frank');
// 'Frank talks about it frankly' ('frank' in 'frankly' is a partial match, hence ignored)
```

`process.capitalizeAllFirstLetters(text, options)`

```
Returns text with all first letter capitalized
```

```
options properties:
- keepUppercase:boolean -  If true, the current uppercase letters will not change. Default: false
```

```js
process.capitalizeAllFirstLetters('foo bAr');
// Foo Bar
process.capitalizeAllFirstLetters('foo bAr', { keepUppercase: true });
// Foo BAr
```

## match

```js
const { match } = require('textamer');
```

`match.ipv4(str)`

```
Returns true if str is a valid IPv4, leading & trailing whitespaces are ignored
```

```js
match.ipv4(' 192.168.2.1 ');
// true
match.ipv4(' 192.168.300.1 ');
// false
```
