 

let str1 = ' bmw ';
let str2 = ' 520 ';
let str3 = ' 1990 ';

 

// let unitedstr =  str1 + ' აწარმოებდა მესამე სერიის მოდელს ' + str2 + str3 + ' წლამდე ';

let strs = `sadajsdhajshdajkhdakjd it's `;

let unitedstr = `${str1}  აწარმოებდა მესამე სერიის მოდელს ${str2}  ${str3} წლამდე` ;

// let card = `<div> <img src="${src} " class="test"> </div>`
 
// str.length ითვლის სტრინგში სიმბოლოების რაოდენობას
// html.replace('h1', 'h5') ანაცვლებს სტრინგში მნიშვნელობებს გადაცემული პარამეტრის მიხედვით
// str.replaceAll('ვებ', 'სოფთვეარ') ანაცვლებს სტრინგში მნიშვნელობებს გადაცემული პარამეტრის მიხედვით გლობალურად 
// str.slice(0, 20); ჭრის  სტრინგს გადაცემული პარამეტრების მიხედვით
//  str.search('ვებs') ეძებს სტრინგის შიგნით სიმბოლოებს და აბრუნებს ინდექს
// str.includes('ვებ') ეძებს სტრინგის შიგნით სიმბოლოებს და აბრუნებს boolean ტიპს
// str.toLowerCase() აპატარავებს სტრინგში არსებულ ყველა სიმბოლოს
// str.toUpperCase() ადიდებს სტრინგში არსებულ ყველა სიმბოლოს
// str.split("@"); ჭრის სტრინგის ელემენტებს და გადაყავს 
// str.match(/[0-9]/g); ეძებს გადაცემული პირობის მიხედვით და ქმნის ახალ მასივს
//  str.trim(); ჭრის სიცარიელეებს მარჯვენა და მარცხენა მხრიდან
// str.startsWith('ჩემი') ამოწმებს იწყება თუ არა სტრინგი რაიმე სიმბოლოთი
// str.endsWith('ასაკში');  ამოწმებს მთავრდება თუ არა სტრინგი რაიმე სიმბოლოთი

let str  = `ჩემი პირველი გამოცდა იყოს 5 წლის ასაკში, შემდეგი კი 18 წლის ასაკში`;


 
let changedstr = str.endsWith('ასაკში');
 

console.log(changedstr);

function typing(el){ 
   let lng =  el.value.length;
   let check  = el.value[lng - 1].search(/[ა-ჰ]/i);
 
   if(check == 0){
    
   }else{
    el.value = el.value.slice(0, el.value.length - 1)
   }
}

let Users = [55, 'Admin', 'Maneger', 'Basic User', 87, [8, 78, 9 ] ];
 
 

// Users.length ითვლის მასივში ელემენტების რაოდენობას
// Users.push('New Element') ამატებს მასივში ახალ ელემენტს , მასივის ბოლოს
// Users.unshift('New Element') ამატებს მასივში ახალ ელემენტს , მასივის თავში
// Users.pop(); შლის მასივის ბოლო ელემენტს
// Users.shift(); შლის მასივის პირველ ელემენტს
// Users.splice(3,1) შლის მასივის   ელემენტებს გადაცემული პარამეტრების მიხედვით
// Users.splice(3,0,'New elements') შლის და ამატებს მასივის   ელემენტებს გადაცემული პარამეტრების მიხედვით
// let findels = Users.includes('Manegers'); ეძებს მასივში გადაცემული პარამეტრის მიხედვით, აბრუნებს boolean

 
//  let checkdata = Orders.some( function(el){
//     return el  < 10;
//  }) აბრუნებს boolean იმ შემთხვევაში თუ მასივის ერთი ელემენტი მაინც აკმაყოფილებს პირობას

//  let checkdata = Orders.every( function(el){
//     return el  >  10;
//  })  აბრუნებს boolean იმ შემთხვევაში თუ მასივის ყველა ელემენტი   აკმაყოფილებს პირობას


// let finded = Users.find(function(elem){
//    return elem == 'Maneger';
// }) აბრუნებს  მასივში არსებულ ელემენტს რომელიც გადაეცემა პირობათ

// let finded = Users.filter(function(elem){
//    return typeof elem == 'string';
// })  ეძებს გადამეცემული პირობის მიხედვით ელემენტებს და ქმნის ახალ მასივს


// let index = Users.findIndex(el => {
//    return el == 'keyword';
// }) აბრუნებს ელემენტის ინდექს

 
 
// Users.forEach(el=>{
//    console.log(el);
// }) ბეჭდავს მასივის თითეულ ელემენტს
 
 
// let virable  = Users.map(el=>{
//    return el + '_tets';
// })   ბეჭდავს მასივის ყველა ელემენტს და ქმნის ახალ მასივს
 
 
 
let Orders = [11,4,80,20,11, 115, 600, 788,];
let myname = ['ზურა', 'გიორგი', 'ეკა', 'ანა', 'ბექა'];

myname.sort()// სორტირება ა-ბ;
myname.sort().reverse() // სორტირება ბ-ა;

// Orders.sort( function(a, b){
//    return a - b;
// } ); //რიცხვების სორტირება ზრდადობით

Orders.sort( function(a, b){
   return b - a;
} ); //რიცხვების სორტირება კლებადობით

console.log(Orders);


// console.log(Users[0]);
// console.log(Users[1]);
// console.log(Users[2]);
// console.log(Users[3]);
// console.log(Users[4]);
// console.log(Users[5]);
 