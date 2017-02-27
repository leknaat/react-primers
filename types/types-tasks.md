q1.

What's the type of: "Hello"

- A string.

q2.

What's the type (including subtypes) of:

{hello: 1}

- An object that contains an integer.

q3.

What's the type of:

[1,2,3]

- An array.

q4.

What's the type of:

[{hello: 1}, {hello: 1}]

- An array with two objects that both contain an integer.

q5.

What's the type of:

{
  cats: [{name: 'tiddles', breed: 'persian'}, {name: 'happy', breed: 'burmese'}],
  dogs: [{name: 'Chester', breed: 'labrador'}, {name: 'happy', breed: 'corgi'}]
}

- Both are objects with an array inside of them. Inside the arrays are two more objects, each with two properties.

q6.

What types does _.map accept as parameters? What does it return in each case?

- _.map can take an array or an object.

For an array: [value, value, etc.]
example: _.map([4, 8], (square) => [16, 64]


For an object: ['value', 'value']
example:
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
_.map(users, 'user');
=> ['barney', 'fred']

q7.

What types does _.filter accept as parameters? What does it return in each case?
- _.filter also accepts either an object or an array.
For an array: [value, value]
example:
var numbers = [9, 16, 20]
._filter(numbers, (num) {
  num > 10
}
=> [16, 20]

For an object:
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
_.filter(users, ('active')
=> {'user': 'barney', 'age': 36, 'active': true}
