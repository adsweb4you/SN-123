// // let Product = [
// //     {
// //         title:'პროდუქტი 1',
// //         price:160,
// //         disc:80,
// //         images:[
// //             ''
// //         ],
// //         sizes:[
// //             's','m','l','xl','xxl'
// //         ],
// //         stock:10,
// //         discount:function(){
// //             if (this.disc != null) {
// //                 this.discproc = Math.floor((   this.disc /   this.price  )   * 100);
// //             }else{
// //                 this.discproc  = false;
// //             }
           
// //         }

// //     },

// //     {
// //         title:'პროდუქტი 1',
// //         price:150,
// //         disc:10,
// //         images:[
// //             ''
// //         ],
// //         sizes:[
// //             's','m','l','xl','xxl'
// //         ],
// //         stock:4,
// //         discount:function(){
// //             if (this.disc != null) {
// //                 this.discproc = Math.floor((   this.disc /   this.price  )   * 100);
// //             }else{
// //                 this.discproc  = false;
// //             }
           
// //         }

// //     }
// // ]

// // Product[0].discount();
// // Product[1].discount();

// // Product.sort((a,b)=>{
// //    return a.price - b.price
// // });


// // Product = Product.filter(el=>{
// //     return el != null && el.stock > 0;
// // })

 
// // let outps = document.getElementById('output');
// // Product.forEach(el=>{
 
// //     let stocks = '';

// //     if (el.stock < 5) {
// //         stocks = 'მარაგი იწურება'
// //     }

// //   let cards = `
// //   <div class="card" style="width: 18rem;">
// //   <img src="..." class="card-img-top" alt="...">
// //   <div class="card-body">
// //     <h5 class="card-title">${el.title}</h5>
// //     <p class="card-text">${stocks}</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>`    
// // outps.innerHTML += cards;
// // })

// let weekday = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];

// let date = new Date();

// date.setMonth(2)

// let year = date.getFullYear(); //აბრუნებს წელს
// let month = date.getMonth() + 1 ; //აბრუნებს თვეს
// let num = date.getDate(); //აბრუნებს რიცხვი

// let weekdaye = date.getDay(); // აბრუნებს კვირის დღეებს

// let hours = date.getHours(); // აბრუნებს საათს
// let min = date.getMinutes(); // აბრუნებს წუთებს
// let sec = date.getSeconds(); // აბრუნებს წამებს


// let date1 = new  Date();
// let date2 = new  Date('2023/1/26');

// let diffdate = date2.getTime() - date1.getTime();

// let day = Math.floor( diffdate / (1000 * 60 * 60 * 24));
// let diffhours =  Math.floor(diffdate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
// let diffmin =   Math.floor(diffdate %  (1000 * 60 * 60) / (1000 * 60))
// let diffsec =   Math.floor(diffdate %  (1000 * 60) / 1000 )
// console.log(day , diffhours, diffmin, diffsec);

let button  = document.getElementById('mybtn'); // აბრუნებს html ობიექტს  
let li = document.getElementsByClassName('mylist')// აბრუნებს html ელემენტების მასივს class გამოყენებით
let tag = document.getElementsByTagName('li')// აბრუნებს html ელემენტების მასივს tag გამოყენებით
//  button.innerText  ანაცვლებს ელემენტის კონტენტს
//  button.innerText = '<span> html string </span>'  ანაცვლებს ელემენტის კონტენტს შეუძლია html რენდერი
 
let quercss = document.querySelector('#mybtn'); // აბრუნებს html ობიექტს   css სელექტორის გამოყენებით
let querall = document.querySelectorAll('.mylist');  // აბრუნებს html ობიექტების მასივს   css სელექტორის გამოყენებით


button.addEventListener('click', function(){
    დავალება.gif
    dom1.js++;
})

for (const elem of tag) {
    elem.addEventListener('click', function(){
         elem.innerHTML = 'შეცვლილი მნიშვნელობა';
    })
   
}