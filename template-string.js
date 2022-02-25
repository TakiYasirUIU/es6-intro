const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini ` // backtick/banckcote/carret - ``  
const multiLine = `This is my first line.
second line text line.
third line text here.
fourth line test here`
// console.log(multiLine);

// String Interpolation
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = first + '' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);
  
