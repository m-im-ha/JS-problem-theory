//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.(thejsway-chapter-03)
// let hours = Number(prompt('enter hour'));
// let minutes = Number(prompt('enter minutes'));
// let secends = Number(prompt('enter secends'));
// if(hours >= 0 && hours <= 24 && minutes >= 0 && minutes <= 60 && secends >= 0 && secends <= 60) {
//     secends++;
//     if(secends === 60) {
//         secends = 0;
//         minutes++;
//         if(minutes === 60){
//             minutes = 0;
//             hours++;
//             if(hours === 24) {
//                 hours = 0;

//             }
//         }
//     }
//     console.log(`your time is ${hours}h ${minutes}m ${secends}s`);

// }
// else {
//     console.log(`try to enter correct time`);
// }

//Write a program that asks the user for a number, then shows the multiplication table for this number.
// let num = Number(prompt("what's your number?"))
// for(i=1;i<=10;i++){// num * 1 = result;
//     let result = i * num;
//     console.log(`${num}*${1}=${result}`)
// }
// let num_ber = Number("");
// while (50 < num_ber < 100) {
//     num_ber = prompt("Type a number");
//     num_ber++;
// }
// let num = Number(prompt(`your number is?`))
// for(i=1;i<=100;i++) {
//     if(num === i){
//         alert(`working`)
//     }

// }
// let number;
// while (number <= 100) {
//   number = prompt("input your number?");
//   number++;
// }

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// let number = 0;
// while (number <= 100) {
//   number = Number(prompt("Type a number"));
// }
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
// let number = 0;
// while (number >= 100||number <= 50) {
//   number = Number(prompt("Type a number"));
// }
//Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// let text = '';
// while(text !== 'yes' && text !== 'no'){
//  text = prompt('enter text until either "yes" or "no" is typed')
// }
// let the_name = name => `hey,${name}!!!!!`
// console.log(the_name('billu.'))

// update the program so that it shows the square of every number between 0 and 10.
// function square() {
//   for(i=0;i<11;i++) {
//     let result = i*i;
//     console.log(result)
//   }
// }
// square()
// console.log('yo')

// function another_sq() {
//   let x = 0;
//   while(x<11) {
//     let multi = x*x;
//     console.log(multi);
//     x++;
//   }
// }
// another_sq()
//Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
// function min_output(x,y) {
//   if(x>y) {
//     console.log(x)
//   }
//   else{
//     console.log(y)
//   }
// }
// min_output(4.5,6)

//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// function circumference() {
//   let r = parseInt(prompt('enter your r'));
//   let circumference = 2 * Math.PI * r;
//   console.log(circumference);
// }
// circumference();

// function area() {
//   let r = parseInt(prompt('enter your r'));
//   let area = Math.PI * (r*r);
//   console.log(area);
// }
// area();

// user = {
//     say_hi() {
//         console.log('yo')
//     }
// }
// user.say_hi();

// let dragon_ballz = {
//     name : 'GOKU',
//     health: 100,
//     power: 'super-saiyan-god',

//     its_goku() {
//         return `${this.name} has ${this.health} health and he is ${this.power}.`;
//     },

//     its_broly() {
//         dragon_ballz.health = 200;
//         dragon_ballz.name = 'BROLY'

//         return `${this.name} has ${this.health} health and he is ${this.power} too.`;
//     }
// };
// console.log(dragon_ballz.its_goku());
// console.log(dragon_ballz.its_broly());

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp : 0,

//     // Return the character description
//     describe() {
//         aurora.health -= 20;
//         aurora.strength += 10;
//         aurora.xp += 15;
//       return `${this.name} has ${this.health} health points and ${this
//         .strength} as strength and ${this.xp} XP points`;
//     }
//   };
//   console.log(aurora.describe());

// const dog = {
//     name : 'Fang',
//     species: 'baarhound',
//     size: 75,
//     bark() {
//         return `Grrr! Grrr!`;
//     }
// }
// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

// const account = {
//     name: 'Alex',
//     balance: 0,
//     credit(n) {
//         this.balance += n;
//     },
//     describe() {
//         return `Owner: ${this.name}, balance ${this.balance}`
//     }
// }
// console.log(account.describe());
// account.credit(250)
// account.credit(-80)
// console.log(account.describe());

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//     read() {
//         this.a = parseInt(prompt('enter your number',0));
//         this.b = parseInt(prompt('enter your number',0));

//     },
//     sum() {
//         return this.a + this.b;

//     },
//     mul() {
//         return this.a * this.b;

//     }
//   };

//   calculator.read();
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       console.log( this.step );
//       return this;
//     }
//   };
//   ladder
//   .up()
//   .up()
//   .down()
//   .showStep()
//   .down()
//   .showStep();

// let musketeers = ["Athos","Porthos","Aramis"];
// for(i=0; i<musketeers.length; i++) {
//     console.log(musketeers[i]);
// }
// musketeers.push("D'Artagnan");
// musketeers.forEach(element => console.log(element));

// const values = [3, 11, 7, 2, 9, 10];
// let sum = 0;
// for(i=0;i<values.length;i++) {
//     sum += values[i];
// }
// console.log(sum)

// const values = [3, 11, 7, 2, 9, 10];
// let sum = 0;
// values.forEach((element)=> sum += element);
// console.log(sum)

// const values = [3, 11, 7, 2, 9, 10];
// let max = Math.max(...values);
// console.log(max);

//Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 23, 2, 9, 44, 10];
// let max = values[0];
// for (let i = 0; i < values.length; ++i) {
//   if (values[i] > max) {
//     max = values[i];

//   }
// }
// console.log(max);

// const values = [3, 11, 7, 23, 2, 9, 44, 10];
// let max = 0;
// for(let i =0; i < values.length;i++){
//     let current = values[i];
//     if(current > max) {
//         max = current;
//     }
// }
// console.log(max);

// let values = [3, 11, 7, 23, 2, 9, 44, 10];
// let max = 0;
// values.forEach(element => {
//     let current = element;
//     if(current > max) {
//         max = current;

//     }
// })
// console.log(max)

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     return arr;
// }
// let smiple_arr = arrayBuilder('black','blue','yellow');
// console.log(smiple_arr);

// let product_details = {
//     name : 'shoe',
//     priceUSD : 100,
//     taxUSD : 1.2,
//     total() {
//         let calculate = this.priceUSD * this.taxUSD;
//         console.log('TOTAL:',calculate);
//     }
// }
// let product2_details = {
//     name : 'shoe',
//     priceUSD : 200,
//     taxUSD : 1.2,
//     total() {
//         let calculate = this.priceUSD * this.taxUSD;
//         console.log('TOTAL:',calculate);
//     }
// }
// product_details.total();
// product2_details.total();

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

// let words = '';
// while(true) {
//   let your_input = prompt('Enter your word');

//   if (your_input === 'stop') {
//     break;
//   }

//   words += your_input + ' ';
// }
// console.log(words);

// let words = [];
// while(true) {
//   let your_input = prompt('Enter your word');

//   if (your_input === 'stop') {
//     break;
//   }
//   words.push(your_input);

// }

// console.log(words);

//..... exercises for the book Eloquent JavaScript
//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for(let line="#";line.length<8;line+="#"){
// console.log(line);
// }

//another way.
// for(let i=1;i<8;i++){
//     console.log("#".repeat(i));
// }

//..... exercises for the book Eloquent JavaScript
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz " for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// for(let i=1; i<101; i++){
//      if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else console.log(i);
// }

//another way
// for(let n=1;n<=100;n++){
//     let output = "";
//     if(n%3===0) output = "Fizz";
//     if(n%5===0) output = "Buzz";
//     if(n%3===0 && n%5===0) output = "FizzBuzz";
//     console.log(output||n);
// }

//..... exercises for the book Eloquent JavaScript
//Chessboard : Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

// let gridSize = 10;
// let grid = "";

// for(let row=0;row<gridSize;row++){
//     for(let col=0;col<gridSize;col++){
// adding " " and # for row,col.
//     if((row+col)%2===0){
//         grid+=" ";
//     }
//     else {
//         grid +="#";
//     }

// }
//adding newLine after each row;
//     grid+="\n";
// }
// console.log(grid);

