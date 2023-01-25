// let Products = [
//     {
//         title:'პროდუქტი 1',
//         price:100,
//         discount:8,
//         images:[
//         'https://istyle.ge/uploads/products/632551675be06.jpg',
//         'https://istyle.ge/uploads/products/632552091fa73.jpg',
//         'https://istyle.ge/uploads/products/63255218c416d.jpg',
//         'https://istyle.ge/uploads/products/63255224e0966.jpg'
//         ],
//         sizes:[
//             's','m','l','xl','xxl'
//         ],
//         stock:6,
//         discproc:function(){
//             let procs;
//            if (this.discount != null) {
//               procs =  ( this.discount  -  this.price  ) / this.price  * 100;
//              this.proce =  procs;
//            }else{
//             this.proce = false;
//          }
           
            
//         }
//     },

//     {
//         title:'პროდუქტი 1',
//         price:150,
//         discount:80,
//         images:[
//         'https://istyle.ge/uploads/products/632551675be06.jpg',
//         'https://istyle.ge/uploads/products/632552091fa73.jpg',
//         'https://istyle.ge/uploads/products/63255218c416d.jpg',
//         'https://istyle.ge/uploads/products/63255224e0966.jpg'
//         ],
//         sizes:[
//             's','m','l','xl','xxl'
//         ],
//         stock:3,
//         discproc:function(){
//             let procs;
//            if (this.discount != null) {
//               procs =  ( this.discount  -  this.price  ) / this.price  * 100;
//              this.proce =  procs;
//            }else{
//               this.proce = false;
//            }
         
            
//         }
//     },

    
//     {
//         title:'პროდუქტი 1',
//         price:600,
//         discount:null,
//         images:[
//         'https://istyle.ge/uploads/products/632551675be06.jpg',
//         'https://istyle.ge/uploads/products/632552091fa73.jpg',
//         'https://istyle.ge/uploads/products/63255218c416d.jpg',
//         'https://istyle.ge/uploads/products/63255224e0966.jpg'
//         ],
//         sizes:[
//             's','m','l','xl','xxl'
//         ],
//         stock:3,
//         discproc:function(){
//             let procs;
//            if (this.discount != null) {
//               procs =  ( this.discount  -  this.price  ) / this.price  * 100;
//              this.proce =  procs;
//            }else{
//               this.proce = false;
//            }
         
            
//         }
//     }
// ]

// // სორტირება ზრდადობით
// Products.sort((a,b)=>{
//     return a.price - b.price;
// })

 
// // დაფილტრული მასივი
// let FilteredProduct = [];


// // დააბრუნებს დაფილტრულ პროდუქციას
// function filterProd( ) {
//     for (const Product of Products) {
//         // ახალი თვისები ჩამატება 
//         Product.discproc();
//     if (Product.discount != null &&  Product.stock > 0) {
//         FilteredProduct.push(Product);
//     }
     
//     }
// }

 

// // call filter function
// filterProd();


// // პროდუქტების html გამოტანა
// function Getproduct(obj) { 
 
//     for (const product of obj) {

//         // მარაგის ტექსტი
//         let st = helpers(product).sto;
//         // შეთავაზების კოდი
//         let offer = helpers(product).off;

//         let html =`
//         <div class="col-lg-4">
//         <div class="card">
//       <img src="${product.images[0]}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${product.title}</h5>
//         <h5 class="card-title">${product.price} ₾</h5>
//         <p class="card-text">${getsize(product.sizes)}</p>
//         <p> ${offer} </p>
//         <p> ${st} </p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//        </div>
//       </div>
//     </div>`
//     load.innerHTML += html;
//      }

 
//  }

// // ზომების დაბრუნება
//  function getsize(array) {
//       let sizes = '';
//       for (const size of array) {
//         sizes += `<span> ${size} </span>`;
//       }

//       return sizes;
//    }


// function helpers(prop) {
//      let daeyoffer = '';
//      let stock = '';

//      if (prop.proce.toString().replace('-', '')   >=  20) {
//         daeyoffer = 'დღის შეთავაზება'
//      }

//      if (prop.stock < 5) {
//         stock = 'მარაგი იწურება'
//      }

//      return {
//         off:daeyoffer,
//         sto:stock
//      }

// }

//  console.log(FilteredProduct);
// //    html გამოტანა
//    Getproduct(FilteredProduct)
 
 
   
// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1;

// let weekdaye = date.getDay();
// date.setDate(28)
// let numb = date.getDate()


// let date1 = new Date();
// let date2 = new Date('2023-02-26');

// let diff = date2.getTime() - date1.getTime();

// console.log(Math.floor(diff / (1000 * 60 * 60 * 24)));

let button = document.getElementById('btn'); // აბრუნებს  აიდის მიხედვით ერთი ელემენტის ობიექტს
let libyclass = document.getElementsByClassName('mylist'); // აბრუნებს  ელემენენტების მასივს  კლასის გამოყენებით
let libytag = document.getElementsByTagName('li'); // აბრუნებს  ელემენენტების მასივს  ტეგის გამოყენებით

let buttonbycss = document.querySelector('#btn');  // აბრუნებს  css სელექტორის მიხედვით ერთი ელემენტის ობიექტს
let liallbycss = document.querySelectorAll('.mylist');  // აბრუნებს  css სელექტორის მიხედვით ელემენტების მასივს

// for (const li of libytag) {
//     li.innerHTML = 'ახალი მნიშვნელობა'
// }
liallbycss.forEach(el=>{
    el.innerHTML = 'რაღაც მნიშვნელობა';
})

buttonbycss.addEventListener('click', function(){
     this.innerHTML = 'ივენთი გაეშვა'
})