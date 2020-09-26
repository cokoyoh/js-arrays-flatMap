/**
 * Use flatMap to get a flat array of all of the users' email addresses.
 */

const users = [
  { name: 'Amir', emails: ['amir@example.com', 'amir2@example.com'] },
  { name: 'Betty', emails: ['betty@example.com'] }
];

const emails = users.flatMap(({emails}) => emails);

console.log(emails);