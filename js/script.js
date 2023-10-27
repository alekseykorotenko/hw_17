let userFirstName = prompt('Enter your first name').trim();
let userSecondName = prompt('Enter your second name').trim();
let userEmail = prompt('Enter your email').replace(' ', '').toLowerCase();
let userBornDate = prompt('Enter your born date').replace(' ', '');

userFirstName =
  userFirstName[0].toUpperCase() + userFirstName.slice(1).toLowerCase();

if (userFirstName.indexOf(' ') > 0) {
  let split = userFirstName.split(' ');
  split[1] = split[1][0].toUpperCase() + split[1].slice(1).toLowerCase();
  userFirstName = split.join(' ');
}
console.log(userFirstName);

userSecondName =
  userSecondName[0].toUpperCase() + userSecondName.slice(1).toLowerCase();

if (userSecondName.indexOf(' ') > 0) {
  let split = userSecondName.split(' ');
  split[1] = split[1][0].toUpperCase() + split[1].slice(1).toLowerCase();
  userSecondName = split.join(' ');
}
console.log(userSecondName);

if (userEmail.indexOf('@') < 0) {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail[0] == '@') {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail[userEmail.length - 1] == '@') {
  userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
}

console.log(new Date(userBornDate));

let userAge = new Date().getFullYear() - new Date(userBornDate).getFullYear();

let userBody = `<ul><li>FullName: <b>${userFirstName} ${userSecondName}</b> </li><li>Email: ${userEmail}</li><li>Age: <b> ${userAge} </b></li></ul>`;

document.write(userBody);
