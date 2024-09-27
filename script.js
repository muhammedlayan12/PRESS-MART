


//   // humburger
//   const toggleButton = document.querySelector('.toggle-button');
//   const navMenu = document.querySelector('.nav-menu');
//   const closeButton = document.querySelector('.nav-menu .close-button');

//   toggleButton.addEventListener('click', () => {
//     navMenu.classList.add('active');
//   });

//   closeButton.addEventListener('click', () => {
//     navMenu.classList.remove('active');
//   });





//   // Header remove on 796 width
//   const toggleHandler = () => {
//     const header = document.getElementsByClassName("header")[0];
//     if (window.innerWidth <= 796) {
//       header.style.display = "none";
//     } else {
//       header.style.display = "flex";
//     }
//   };

//   window.addEventListener("resize", toggleHandler);
//   window.addEventListener("load", toggleHandler);








//   //changing number of refreshing a page
//   function number() {
//     let icon1 = document.getElementsByClassName("sup1")[0];
//     // let icon2 = document.getElementsByClassName("sup2")[0];
//     let num1 = Math.floor(Math.random() * 20) + 5;
//     // let num2 = Math.floor(Math.random() * 20) + 5;
//     icon1.innerText = num1;
//     // icon2.innerText = num2;
//   }

//   number();



  
// /*humburger show on 796*/
//   document.addEventListener('DOMContentLoaded', function() {
//     function handleNavVisibility() {
//         var humbarger = document.querySelector('.toggle-button');
//         if (window.innerWidth < 796) {
//             humbarger.style.display = 'block';
//         } else if (window.innerWidth > 796) {
//             if (humbarger) {
//                 humbarger.parentNode.removeChild(humbarger);
//             }
//         } else {
//             console.log('hello');
//         }
//     }

//     window.addEventListener('resize', handleNavVisibility);
//     handleNavVisibility();
// });



// //CLICK ON VIEW MORE BUTTON AND JUMP 
// let button = document.querySelector(".second");
// button.addEventListener("click",function(){
//   window.scrollTo({
//     top:1050,
//     behavior:"smooth"
//   });
// });


// //CLICK ON SHOP NOW BUTTON AND  ON PRODUCTS SECTION 
// let btn = document.querySelector(".first");
// let product = document.querySelector(".container-pr");
// btn.addEventListener("click",function(){
//   let products = product.offsetTop;
//   window.scrollTo({
//     top:products,
//     behavior:"smooth"
//   });
// });



// /*hero show on 440 in flex direction colums*/
// let hero = document.querySelector(".hero");

// if(window.innerWidth <= 440){
//   hero.innerHTML = `
//   <div class="img">
//        <img src="/images/heroimg.png" alt="home img" />
//      </div>
//   <div class="content">
//        <h2>Season <span>Sale</span></h2>
//        <h1>MAN'S FASHION</h1>
//        <h3>Min. 35-70% Off</h3>
//        <a class="first">SHOP NOW</a>
//        <a class="second">VIEW MORE</a>
//      </div>`
//      hero.style.flexDirection = `column`;
//      hero.style.textAlign = 'center';
// }
// else{
//   hero.style.display = 'flex';
// }


// /*updated product popup*/
// function closePopup() {
//   document.getElementById("popup").style.display = "none";
// }

// function openPopup() {
//   document.getElementById("popup").style.display = "block";
// }


// /*side cart menu*/
// function openSideWindow() {
//   document.getElementById("sideWindow").style.width = "250px"; // Open the side menu
// }

// function closeSideWindow() {
//   document.getElementById("sideWindow").style.width = "0"; // Close the side menu
// }



//   // Add to cart functionality
// let addtocartbtn = document.querySelectorAll("#add-to-cart");
// let addtocartcontainer = document.querySelector(".cart-items");

// addtocartbtn.forEach(button => {
//   button.addEventListener("click", () => {
//     let product = button.closest(".product");
//     let productImg = product.querySelector("img").src;
//     let productName = product.querySelector("h3").textContent;
//     let productPrice = product.querySelector(".price").textContent;

//     // Check if the product is already in the cart
//     let existingProduct = Array.from(addtocartcontainer.children).find(item => {
//       return item.querySelector('h3').textContent === productName;
//     });

//     if (existingProduct) {
//       openPopup();
//       existingProduct.querySelector('.length').textContent = parseInt(existingProduct.querySelector('.length').textContent) + 1;
//       updateTotals();
//       return;
//     }

//     const cartitem = document.createElement('div');
//     cartitem.classList.add("cart-item");
//     cartitem.innerHTML = `
//     <img src='${productImg}'></img>
//     <h3>${productName}</h3>
//     <div class='price'>${productPrice}</div>
//     <button class='del'>Remove</button>
//     <div class='operation'>
//     <div class='plus'>+</div>
//     <div class='length'>1</div>
//     <div class='minus'>-</div>
//     </div>`;

//     cartitem.querySelector('.del').addEventListener("click", () => {
//       cartitem.parentNode.removeChild(cartitem);
//       updateTotals();
//       uppdateproduct();
//     });

//     cartitem.querySelector('.plus').addEventListener("click", () => {
//       let length = cartitem.querySelector(".length");
//       length.innerHTML = parseFloat(length.textContent) + 1;
//       updateTotals();
//       uppdateproduct();
//     });

//     cartitem.querySelector('.minus').addEventListener("click", () => {
//       let length = cartitem.querySelector(".length");
//       length.innerHTML = parseFloat(length.textContent) - 1;
//       if(parseInt(length.textContent)<1){
//         cartitem.parentNode.removeChild(cartitem);
//       }
//       updateTotals();
//       uppdateproduct();
//     });

//     addtocartcontainer.appendChild(cartitem);

//     const uppdateproduct = () => {
//       let icon2 = document.getElementsByClassName("sup2")[0];
//     icon2.textContent = `${addtocartcontainer.children.length}`;
//     }
//     uppdateproduct();

//     updateTotals();
//   });
// });


// const updateTotals = () => {
//   let subtotal = 0;
//   document.querySelectorAll(".cart-item").forEach(item => {
//     let price = parseFloat(item.querySelector(".price").textContent.replace("$",""));
//     let quantity = parseFloat(item.querySelector(".length").textContent);
//     subtotal+=price*quantity;

//     let tax = 3;
//     let finalTotal = subtotal + tax;
//     //target both elements
//     let subTotal = document.querySelector("#subtotal");
//     let final_Total = document.querySelector("#final-total");
//     subTotal.textContent = `$${subtotal.toFixed(2)}`;
//     final_Total.textContent = `$${finalTotal.toFixed(2)}`;    
//   });
// };
















// // IndexedDB setup
// let db;

// const request = indexedDB.open("UserDatabase", 1);

// request.onupgradeneeded = (e) => {
//     db = e.target.result;
//     const store = db.createObjectStore("Users", { keyPath: "username" });
//     store.createIndex("password", "password", { unique: false });
// };

// request.onsuccess = (e) => {
//     db = e.target.result;
//     checkLoginStatus(); // Check if the user is already logged in
// };

// request.onerror = (e) => {
//     console.error("Error opening IndexedDB:", e.target.errorCode);
// };

// // Signup Function
// function signupUser() {
//     const username = document.getElementById("signup-username").value;
//     const password = document.getElementById("signup-password").value;

//     const transaction = db.transaction(["Users"], "readwrite");
//     const store = transaction.objectStore("Users");

//     const request = store.add({ username, password });

//     request.onsuccess = () => {
//         alert("Signup successful! Please login.");
//         window.location.href = "login.html"; // Redirect to login page
//     };

//     request.onerror = (e) => {
//         alert("Signup failed: User already exists.");
//     };
// }

// // User Login
// function loginUser() {
//     const username = document.getElementById("login-username").value;
//     const password = document.getElementById("login-password").value;

//     const transaction = db.transaction(["Users"], "readonly");
//     const store = transaction.objectStore("Users");

//     const request = store.get(username);

//     request.onsuccess = (e) => {
//         const user = e.target.result;
//         if (user) {
//             if (user.password === password) {
//                 sessionStorage.setItem("loggedInUser", username);
//                 window.location.href = "index.html"; // Redirect to homepage
//             } else {
//                 alert("Invalid password. Please try again."); // Alert for mismatched password
//             }
//         } else {
//             alert("Invalid username. Please try again.");
//         }
//     };

//     request.onerror = () => {
//         alert("Login failed. Please try again.");
//     };
// }

// // Check Login Status
// function checkLoginStatus() {
//     const loggedInUser = sessionStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//         document.getElementById("welcome-message").innerHTML = `Welcome back, <span>${loggedInUser}</span>!`;
//     } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
//         // Redirect to signup page if not logged in and not on signup/login pages
//         window.location.href = "signup.html";
//     }
// }

// // Logout Function
// function logout() {
//     sessionStorage.removeItem("loggedInUser");
//     window.location.href = "login.html"; // Redirect to login page
// }

// // Hamburger Menu Functionality
// const toggleButton = document.querySelector('.toggle-button');
// const navMenu = document.querySelector('.nav-menu');
// const closeButton = document.querySelector('.nav-menu .close-button');

// toggleButton.addEventListener('click', () => {
//     navMenu.classList.add('active');
// });

// closeButton.addEventListener('click', () => {
//     navMenu.classList.remove('active');
// });

// // Header visibility based on width
// const toggleHandler = () => {
//     const header = document.getElementsByClassName("header")[0];
//     if (window.innerWidth <= 796) {
//         header.style.display = "none";
//     } else {
//         header.style.display = "flex";
//     }
// };

// window.addEventListener("resize", toggleHandler);
// window.addEventListener("load", toggleHandler);

// // Changing number of refreshing a page
// function number() {
//     let icon1 = document.getElementsByClassName("sup1")[0];
//     let num1 = Math.floor(Math.random() * 20) + 5;
//     icon1.innerText = num1;
// }

// number();

// /* Hamburger show on 796 */
// document.addEventListener('DOMContentLoaded', function() {
//     function handleNavVisibility() {
//         var humbarger = document.querySelector('.toggle-button');
//         if (window.innerWidth < 796) {
//             humbarger.style.display = 'block';
//         } else if (window.innerWidth > 796) {
//             if (humbarger) {
//                 humbarger.parentNode.removeChild(humbarger);
//             }
//         }
//     }

//     window.addEventListener('resize', handleNavVisibility);
//     handleNavVisibility();
// });

// // Click on VIEW MORE button and jump 
// let button = document.querySelector(".second");
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: 1050,
//         behavior: "smooth"
//     });
// });

// // Click on SHOP NOW button and scroll to products section 
// let btn = document.querySelector(".first");
// let product = document.querySelector(".container-pr");
// btn.addEventListener("click", function() {
//     let products = product.offsetTop;
//     window.scrollTo({
//         top: products,
//         behavior: "smooth"
//     });
// });

// /* Hero show on 440 in flex direction column */
// let hero = document.querySelector(".hero");

// if (window.innerWidth <= 440) {
//     hero.innerHTML = `
//     <div class="img">
//          <img src="/images/heroimg.png" alt="home img" />
//        </div>
//     <div class="content">
//          <h2>Season <span>Sale</span></h2>
//          <h1>MAN'S FASHION</h1>
//          <h3>Min. 35-70% Off</h3>
//          <a class="first">SHOP NOW</a>
//          <a class="second">VIEW MORE</a>
//        </div>`;
//     hero.style.flexDirection = `column`;
//     hero.style.textAlign = 'center';
// } else {
//     hero.style.display = 'flex';
// }

// /* Updated product popup */
// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }

// function openPopup() {
//     document.getElementById("popup").style.display = "block";
// }

// /* Side cart menu */
// function openSideWindow() {
//     document.getElementById("sideWindow").style.width = "250px"; // Open the side menu
// }

// function closeSideWindow() {
//     document.getElementById("sideWindow").style.width = "0"; // Close the side menu
// }

// /* Add to cart functionality */
// let addtocartbtn = document.querySelectorAll("#add-to-cart");
// let addtocartcontainer = document.querySelector(".cart-items");

// addtocartbtn.forEach(button => {
//     button.addEventListener("click", () => {
//         let product = button.closest(".product");
//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h3").textContent;
//         let productPrice = product.querySelector(".price").textContent;

//         // Check if the product is already in the cart
//         let existingProduct = Array.from(addtocartcontainer.children).find(item => {
//             return item.querySelector('h3').textContent === productName;
//         });

//         if (existingProduct) {
//             openPopup();
//             existingProduct.querySelector('.length').textContent = parseInt(existingProduct.querySelector('.length').textContent) + 1;
//             updateTotals();
//             return;
//         }

//         const cartitem = document.createElement('div');
//         cartitem.classList.add("cart-item");
//         cartitem.innerHTML = `
//         <img src='${productImg}'></img>
//         <h3>${productName}</h3>
//         <div class='price'>${productPrice}</div>
//         <button class='del'>Remove</button>
//         <div class='operation'>
//         <div class='plus'>+</div>
//         <div class='length'>1</div>
//         <div class='minus'>-</div>
//         </div>`;

//         cartitem.querySelector('.del').addEventListener("click", () => {
//             cartitem.parentNode.removeChild(cartitem);
//             updateTotals();
//             updateProductCount();
//         });

//         cartitem.querySelector('.plus').addEventListener("click", () => {
//             let length = cartitem.querySelector(".length");
//             length.innerHTML = parseFloat(length.textContent) + 1;
//             updateTotals();
//             updateProductCount();
//         });

//         cartitem.querySelector('.minus').addEventListener("click", () => {
//             let length = cartitem.querySelector(".length");
//             length.innerHTML = parseFloat(length.textContent) - 1;
//             if (parseInt(length.textContent) < 1) {
//                 cartitem.parentNode.removeChild(cartitem);
//             }
//             updateTotals();
//             updateProductCount();
//         });

//         addtocartcontainer.appendChild(cartitem);

//         const updateProductCount = () => {
//             let icon2 = document.getElementsByClassName("sup2")[0];
//             icon2.textContent = `${addtocartcontainer.children.length}`;
//         }
//         updateProductCount();

//         updateTotals();
//     });
// });

// const updateTotals = () => {
//     let subtotal = 0;
//     document.querySelectorAll(".cart-item").forEach(item => {
//         let price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
//         let quantity = parseFloat(item.querySelector(".length").textContent);
//         subtotal += price * quantity;

//         let tax = 3;
//         let finalTotal = subtotal + tax;

//         // Target both elements
//         let subTotal = document.querySelector("#subtotal");
//         let final_Total = document.querySelector("#final-total");
//         subTotal.textContent = `$${subtotal.toFixed(2)}`;
//         final_Total.textContent = `$${finalTotal.toFixed(2)}`;
//     });
// };

// // Refresh page function for cart icon
// const refreshPage = () => {
//     window.location.reload();
// };

// // Call this function when you want to refresh the page, e.g., on button click
// document.querySelector("#refresh-button").addEventListener("click", refreshPage);







// // User Registration
// const registerForm = document.getElementById("register-form");
// const users = JSON.parse(localStorage.getItem("users")) || [];

// registerForm.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const username = registerForm.username.value;
//     const password = registerForm.password.value;
    
//     // Check if user already exists
//     const userExists = users.some(user => user.username === username);
    
//     if (userExists) {
//         alert("User already exists. Please choose a different username.");
//     } else {
//         // Register new user
//         users.push({ username, password });
//         localStorage.setItem("users", JSON.stringify(users));
//         alert("Registration successful! Please log in.");
//         window.location.href = "login.html"; // Redirect to login page
//     }
// });

// // User Login
// const loginForm = document.getElementById("login-form");

// if (loginForm) {
//     loginForm.addEventListener("submit", (event) => {
//         event.preventDefault();
        
//         const username = loginForm.username.value;
//         const password = loginForm.password.value;

//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             sessionStorage.setItem("loggedInUser", username);
//             window.location.href = "index.html"; // Redirect to dashboard
//         } else {
//             alert("Invalid username or password. Please try again.");
//         }
//     });
// }

// // Add to Cart functionality
// let addtocartbutton = document.querySelectorAll("#add-to-cart");

// addtocartbutton.forEach(button => {
//     button.addEventListener("click", () => {
//         let product = button.closest(".product");
//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h3").textContent;
//         let productPrice = product.querySelector(".price").textContent;

//         const productData = {
//             img: productImg,
//             name: productName,
//             price: productPrice,
//             quantity: 1
//         };

//         // Save to localStorage
//         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         const existingProductIndex = cartItems.findIndex(item => item.name === productName);

//         if (existingProductIndex > -1) {
//             cartItems[existingProductIndex].quantity += 1; // Increment quantity if product already in cart
//         } else {
//             cartItems.push(productData); // Add new product to cart
//         }

//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         alert(`${productName} has been added to your cart.`);
//     });
// });

// // Load Cart Items on Dashboard
// const cartItemsContainer = document.getElementById("cart-items");

// if (cartItemsContainer) {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     cartItems.forEach(item => {
//         const cartItemDiv = document.createElement("div");
//         cartItemDiv.className = "cart-item";
//         cartItemDiv.innerHTML = `
//             <img src='${item.img}' alt='${item.name}'>
//             <h3>${item.name}</h3>
//             <div class='price'>${item.price}</div>
//             <div class='quantity'>Quantity: ${item.quantity}</div>
//         `;
//         cartItemsContainer.appendChild(cartItemDiv);
//     });

//     // If no items in cart, display a message
//     if (cartItems.length === 0) {
//         cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//     }
// }

// // Logout functionality
// const logoutButton = document.getElementById("logout-button");
// if (logoutButton) {
//     logoutButton.addEventListener("click", () => {
//         sessionStorage.removeItem("loggedInUser");
//         localStorage.removeItem("cartItems"); // Optional: Clear cart on logout
//         window.location.href = "login.html"; // Redirect to login page
//     });
// }

// // IndexedDB setup
// let db;

// const request = indexedDB.open("UserDatabase", 1);

// request.onupgradeneeded = (e) => {
//     db = e.target.result;
//     const store = db.createObjectStore("Users", { keyPath: "username" });
//     store.createIndex("password", "password", { unique: false });
// };

// request.onsuccess = (e) => {
//     db = e.target.result;
//     checkLoginStatus(); // Check if the user is already logged in
// };

// request.onerror = (e) => {
//     console.error("Error opening IndexedDB:", e.target.errorCode);
// };

// // Signup Function
// function signupUser() {
//     const username = document.getElementById("signup-username").value;
//     const password = document.getElementById("signup-password").value;

//     const transaction = db.transaction(["Users"], "readwrite");
//     const store = transaction.objectStore("Users");

//     const request = store.add({ username, password });

//     request.onsuccess = () => {
//         alert("Signup successful! Please login.");
//         window.location.href = "login.html"; // Redirect to login page
//     };

//     request.onerror = (e) => {
//         alert("Signup failed: User already exists.");
//     };
// }

// // User Login
// function loginUser() {
//     const username = document.getElementById("login-username").value;
//     const password = document.getElementById("login-password").value;

//     const transaction = db.transaction(["Users"], "readonly");
//     const store = transaction.objectStore("Users");

//     const request = store.get(username);

//     request.onsuccess = (e) => {
//         const user = e.target.result;
//         if (user) {
//             if (user.password === password) {
//                 sessionStorage.setItem("loggedInUser", username);
//                 window.location.href = "index.html"; // Redirect to homepage
//             } else {
//                 alert("Invalid password. Please try again."); // Alert for mismatched password
//             }
//         } else {
//             alert("Invalid username. Please try again.");
//         }
//     };

//     request.onerror = () => {
//         alert("Login failed. Please try again.");
//     };
// }

// // Check Login Status
// function checkLoginStatus() {
//     const loggedInUser = sessionStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//         document.getElementById("welcome-message").innerText = `Welcome back, ${loggedInUser}!`;
//     } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
//         // Redirect to signup page if not logged in and not on signup/login pages
//         window.location.href = "signup.html";
//     }
// }

// // Logout Function
// function logout() {
//     sessionStorage.removeItem("loggedInUser");
//     window.location.href = "login.html"; // Redirect to login page
// }

// // Hamburger Menu Functionality
// const toggleButton = document.querySelector('.toggle-button');
// const navMenu = document.querySelector('.nav-menu');
// const closeButton = document.querySelector('.nav-menu .close-button');

// toggleButton.addEventListener('click', () => {
//     navMenu.classList.add('active');
// });

// closeButton.addEventListener('click', () => {
//     navMenu.classList.remove('active');
// });

// // Header visibility based on width
// const toggleHandler = () => {
//     const header = document.getElementsByClassName("header")[0];
//     if (window.innerWidth <= 796) {
//         header.style.display = "none";
//     } else {
//         header.style.display = "flex";
//     }
// };

// window.addEventListener("resize", toggleHandler);
// window.addEventListener("load", toggleHandler);

// // Changing number of refreshing a page
// function number() {
//     let icon1 = document.getElementsByClassName("sup1")[0];
//     let num1 = Math.floor(Math.random() * 20) + 5;
//     icon1.innerText = num1;
// }

// number();

// /* Hamburger show on 796 */
// document.addEventListener('DOMContentLoaded', function() {
//     function handleNavVisibility() {
//         var humbarger = document.querySelector('.toggle-button');
//         if (window.innerWidth < 796) {
//             humbarger.style.display = 'block';
//         } else if (window.innerWidth > 796) {
//             if (humbarger) {
//                 humbarger.parentNode.removeChild(humbarger);
//             }
//         }
//     }

//     window.addEventListener('resize', handleNavVisibility);
//     handleNavVisibility();
// });

// // Click on VIEW MORE button and jump 
// let button = document.querySelector(".second");
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: 1050,
//         behavior: "smooth"
//     });
// });

// // Click on SHOP NOW button and scroll to products section 
// let btn = document.querySelector(".first");
// let product = document.querySelector(".container-pr");
// btn.addEventListener("click", function() {
//     let products = product.offsetTop;
//     window.scrollTo({
//         top: products,
//         behavior: "smooth"
//     });
// });

// /* Hero show on 440 in flex direction column */
// /* Hero show on 440 in flex direction column */
// let hero = document.querySelector(".hero");

// if (window.innerWidth <= 440) {
//     hero.innerHTML = `
//     <div class="img">
//          <img src="/images/heroimg.png" alt="home img" />
//        </div>
//     <div class="content">
//          <h2>Season <span>Sale</span></h2>
//          <h1>MAN'S FASHION</h1>
//          <h3>Min. 35-70% Off</h3>
//          <a class="first">SHOP NOW</a>
//          <a class="second">VIEW MORE</a>
//        </div>`;
//     hero.style.flexDirection = `column`;
//     hero.style.textAlign = 'center';
// } else {
//     hero.style.display = 'flex';
// }

// /* Updated product popup */
// function closePopup() {
//     document.getElementById("popup").style.display = "none";
// }

// function openPopup() {
//     document.getElementById("popup").style.display = "block";
// }

// /* Side cart menu */
// function openSideWindow() {
//     document.getElementById("sideWindow").style.width = "250px"; // Open the side menu
// }

// function closeSideWindow() {
//     document.getElementById("sideWindow").style.width = "0"; // Close the side menu
// }

// /* Add to cart functionality */
// let addtocartbtn = document.querySelectorAll("#add-to-cart");
// let addtocartcontainer = document.querySelector(".cart-items");

// addtocartbtn.forEach(button => {
//     button.addEventListener("click", () => {
//         let product = button.closest(".product");
//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h3").textContent;
//         let productPrice = product.querySelector(".price").textContent;

//         // Check if the product is already in the cart
//         let existingProduct = Array.from(addtocartcontainer.children).find(item => {
//             return item.querySelector('h3').textContent === productName;
//         });

//         if (existingProduct) {
//             openPopup();
//             existingProduct.querySelector('.length').textContent = parseInt(existingProduct.querySelector('.length').textContent) + 1;
//             updateTotals();
//             return;
//         }

//         const cartitem = document.createElement('div');
//         cartitem.classList.add("cart-item");
//         cartitem.innerHTML = `
//         <img src='${productImg}'></img>
//         <h3>${productName}</h3>
//         <div class='price'>${productPrice}</div>
//         <button class='del'>Remove</button>
//         <div class='operation'>
//         <div class='plus'>+</div>
//         <div class='length'>1</div>
//         <div class='minus'>-</div>
//         </div>`;

//         cartitem.querySelector('.del').addEventListener("click", () => {
//             cartitem.parentNode.removeChild(cartitem);
//             updateTotals();
//             updateProductCount();
//         });

//         cartitem.querySelector('.plus').addEventListener("click", () => {
//             let length = cartitem.querySelector(".length");
//             length.innerHTML = parseFloat(length.textContent) + 1;
//             updateTotals();
//             updateProductCount();
//         });

//         cartitem.querySelector('.minus').addEventListener("click", () => {
//             let length = cartitem.querySelector(".length");
//             length.innerHTML = parseFloat(length.textContent) - 1;
//             if (parseInt(length.textContent) < 1) {
//                 cartitem.parentNode.removeChild(cartitem);
//             }
//             updateTotals();
//             updateProductCount();
//         });

//         addtocartcontainer.appendChild(cartitem);

//         const updateProductCount = () => {
//             let icon2 = document.getElementsByClassName("sup2")[0];
//             icon2.textContent = `${addtocartcontainer.children.length}`;
//         }
//         updateProductCount();

//         updateTotals();
//     });
// });

// const updateTotals = () => {
//     let subtotal = 0;
//     document.querySelectorAll(".cart-item").forEach(item => {
//         let price = parseFloat(item.querySelector(".price").textContent.replace(/[^0-9.-]+/g, ""));
//         let quantity = parseInt(item.querySelector(".length").textContent);
//         subtotal += price * quantity;
//     });

//     // Update total amount in the cart
//     document.getElementById("subtotal").textContent = `Subtotal: $${subtotal.toFixed(2)}`;
// };

// // Initialize totals on page load
// updateTotals();








// IndexedDB setup
let db;

const request = indexedDB.open("UserDatabase", 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    const store = db.createObjectStore("Users", { keyPath: "username" });
    store.createIndex("password", "password", { unique: false });
};

request.onsuccess = (e) => {
    db = e.target.result;
    checkLoginStatus(); // Check if the user is already logged in
};

request.onerror = (e) => {
    console.error("Error opening IndexedDB:", e.target.errorCode);
};

// Signup Function
function signupUser() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const transaction = db.transaction(["Users"], "readwrite");
    const store = transaction.objectStore("Users");

    const request = store.add({ username, password });

    request.onsuccess = () => {
        alert("Signup successful! Please login.");
        window.location.href = "login.html"; // Redirect to login page
    };

    request.onerror = (e) => {
        alert("Signup failed: User already exists.");
    };
}

// User Login
function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const transaction = db.transaction(["Users"], "readonly");
    const store = transaction.objectStore("Users");

    const request = store.get(username);

    request.onsuccess = (e) => {
        const user = e.target.result;
        if (user) {
            if (user.password === password) {
                sessionStorage.setItem("loggedInUser", username);
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                alert("Invalid password. Please try again."); // Alert for mismatched password
            }
        } else {
            alert("Invalid username. Please try again.");
        }
    };

    request.onerror = () => {
        alert("Login failed. Please try again.");
    };
}

// Check Login Status
function checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("welcome-message").innerHTML = `Welcome back, <span>${loggedInUser}</span>!`;
    } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
        // Redirect to signup page if not logged in and not on signup/login pages
        window.location.href = "signup.html";
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // Redirect to login page
}

// Hamburger Menu Functionality
const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.querySelector('.nav-menu');
const closeButton = document.querySelector('.nav-menu .close-button');

toggleButton.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Header visibility based on width
const toggleHandler = () => {
    const header = document.getElementsByClassName("header")[0];
    if (window.innerWidth <= 796) {
        header.style.display = "none";
    } else {
        header.style.display = "flex";
    }
};

window.addEventListener("resize", toggleHandler);
window.addEventListener("load", toggleHandler);

// Changing number of refreshing a page
function number() {
    let icon1 = document.getElementsByClassName("sup1")[0];
    let num1 = Math.floor(Math.random() * 20) + 5;
    icon1.innerText = num1;
}

number();

/* Hamburger show on 796 */
document.addEventListener('DOMContentLoaded', function() {
    function handleNavVisibility() {
        var humbarger = document.querySelector('.toggle-button');
        if (window.innerWidth < 796) {
            humbarger.style.display = 'block';
        } else if (window.innerWidth > 796) {
            if (humbarger) {
                humbarger.parentNode.removeChild(humbarger);
            }
        }
    }

    window.addEventListener('resize', handleNavVisibility);
    handleNavVisibility();
});

// Click on VIEW MORE button and jump 
let button = document.querySelector(".second");
button.addEventListener("click", function() {
    window.scrollTo({
        top: 1050,
        behavior: "smooth"
    });
});

// Click on SHOP NOW button and scroll to products section 
let btn = document.querySelector(".first");
let product = document.querySelector(".container-pr");
btn.addEventListener("click", function() {
    let products = product.offsetTop;
    window.scrollTo({
        top: products,
        behavior: "smooth"
    });
});

/* Hero show on 440 in flex direction column */
let hero = document.querySelector(".hero");

if (window.innerWidth <= 440) {
    hero.innerHTML = `
    <div class="img">
         <img src="/images/heroimg.png" alt="home img" />
       </div>
    <div class="content">
         <h2>Season <span>Sale</span></h2>
         <h1>MAN'S FASHION</h1>
         <h3>Min. 35-70% Off</h3>
         <a class="first">SHOP NOW</a>
         <a class="second">VIEW MORE</a>
       </div>`;
    hero.style.flexDirection = `column`;
    hero.style.textAlign = 'center';
} else {
    hero.style.display = 'flex';
}

/* Updated product popup */
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

/* Side cart menu */
function openSideWindow() {
    document.getElementById("sideWindow").style.width = "250px"; // Open the side menu
}

function closeSideWindow() {
    document.getElementById("sideWindow").style.width = "0"; // Close the side menu
}

/* Add to cart functionality */
let addtocartbtn = document.querySelectorAll("#add-to-cart");
let addtocartcontainer = document.querySelector(".cart-items");

addtocartbtn.forEach(button => {
    button.addEventListener("click", () => {
        let product = button.closest(".product");
        let productImg = product.querySelector("img").src;
        let productName = product.querySelector("h3").textContent;
        let productPrice = product.querySelector(".price").textContent;

        // Check if the product is already in the cart
        let existingProduct = Array.from(addtocartcontainer.children).find(item => {
            return item.querySelector('h3').textContent === productName;
        });

        if (existingProduct) {
            openPopup();
            existingProduct.querySelector('.length').textContent = parseInt(existingProduct.querySelector('.length').textContent) + 1;
            updateTotals();
            return;
        }

        const cartitem = document.createElement('div');
        cartitem.classList.add("cart-item");
        cartitem.innerHTML = `
        <img src='${productImg}'></img>
        <h3>${productName}</h3>
        <div class='price'>${productPrice}</div>
        <button class='del'>Remove</button>
        <div class='operation'>
        <div class='plus'>+</div>
        <div class='length'>1</div>
        <div class='minus'>-</div>
        </div>`;

        cartitem.querySelector('.del').addEventListener("click", () => {
            cartitem.parentNode.removeChild(cartitem);
            updateTotals();
            updateProductCount();
        });

        cartitem.querySelector('.plus').addEventListener("click", () => {
            let length = cartitem.querySelector(".length");
            length.innerHTML = parseFloat(length.textContent) + 1;
            updateTotals();
            updateProductCount();
        });

        cartitem.querySelector('.minus').addEventListener("click", () => {
            let length = cartitem.querySelector(".length");
            length.innerHTML = parseFloat(length.textContent) - 1;
            if (parseInt(length.textContent) < 1) {
                cartitem.parentNode.removeChild(cartitem);
            }
            updateTotals();
            updateProductCount();
        });

        addtocartcontainer.appendChild(cartitem);

        const updateProductCount = () => {
            let icon2 = document.getElementsByClassName("sup2")[0];
            icon2.textContent = `${addtocartcontainer.children.length}`;
        }
        updateProductCount();

        updateTotals();
    });
});

const updateTotals = () => {
    let subtotal = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        let price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
        let quantity = parseFloat(item.querySelector(".length").textContent);
        subtotal += price * quantity;

        let tax = 3;
        let finalTotal = subtotal + tax;

        // Target both elements
        let subTotal = document.querySelector("#subtotal");
        let final_Total = document.querySelector("#final-total");
        subTotal.textContent = `$${subtotal.toFixed(2)}`;
        final_Total.textContent = `$${finalTotal.toFixed(2)}`;
    });
};

// Refresh page function for cart icon
const refreshPage = () => {
    window.location.reload();
};

// Call this function when you want to refresh the page, e.g., on button click
document.querySelector("#refresh-button").addEventListener("click", refreshPage);



// // IndexedDB setup
// let db;

// const request = indexedDB.open("UserDatabase", 1);

// request.onupgradeneeded = (e) => {
//     db = e.target.result;
//     const userStore = db.createObjectStore("Users", { keyPath: "username" });
//     userStore.createIndex("password", "password", { unique: false });
//     const cartStore = db.createObjectStore("CartItems", { keyPath: "productName" });
// };

// request.onsuccess = (e) => {
//     db = e.target.result;
//     checkLoginStatus(); // Check if the user is already logged in
//     loadCartItems(); // Load cart items on page load
// };

// request.onerror = (e) => {
//     console.error("Error opening IndexedDB:", e.target.errorCode);
// };

// // Signup Function
// function signupUser() {
//     const username = document.getElementById("signup-username").value;
//     const password = document.getElementById("signup-password").value;

//     const transaction = db.transaction(["Users"], "readwrite");
//     const store = transaction.objectStore("Users");

//     const request = store.add({ username, password });

//     request.onsuccess = () => {
//         alert("Signup successful! Please login.");
//         window.location.href = "login.html"; // Redirect to login page
//     };

//     request.onerror = (e) => {
//         alert("Signup failed: User already exists.");
//     };
// }

// // User Login
// function loginUser() {
//     const username = document.getElementById("login-username").value;
//     const password = document.getElementById("login-password").value;

//     const transaction = db.transaction(["Users"], "readonly");
//     const store = transaction.objectStore("Users");

//     const request = store.get(username);

//     request.onsuccess = (e) => {
//         const user = e.target.result;
//         if (user) {
//             if (user.password === password) {
//                 sessionStorage.setItem("loggedInUser", username);
//                 window.location.href = "index.html"; // Redirect to homepage
//             } else {
//                 alert("Invalid password. Please try again."); // Alert for mismatched password
//             }
//         } else {
//             alert("Invalid username. Please try again.");
//         }
//     };

//     request.onerror = () => {
//         alert("Login failed. Please try again.");
//     };
// }

// // Check Login Status
// function checkLoginStatus() {
//     const loggedInUser = sessionStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//         document.getElementById("welcome-message").innerHTML = `Welcome back, <span>${loggedInUser}</span>!`;
//     } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
//         // Redirect to signup page if not logged in and not on signup/login pages
//         window.location.href = "signup.html";
//     }
// }

// // Logout Function
// function logout() {
//     sessionStorage.removeItem("loggedInUser");
//     window.location.href = "login.html"; // Redirect to login page
// }

// // Add to cart functionality with IndexedDB storage
// let addtocartbtn = document.querySelectorAll("#add-to-cart");

// addtocartbtn.forEach(button => {
//     button.addEventListener("click", () => {
//         let product = button.closest(".product");
//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h3").textContent;
//         let productPrice = product.querySelector(".price").textContent;

//         const transaction = db.transaction(["CartItems"], "readwrite");
//         const store = transaction.objectStore("CartItems");

//         // Check if the product is already in the cart
//         const request = store.get(productName);
//         request.onsuccess = (e) => {
//             const cartItem = e.target.result;
//             if (cartItem) {
//                 cartItem.quantity += 1;
//                 store.put(cartItem);
//             } else {
//                 store.add({ productName, productImg, productPrice, quantity: 1 });
//             }
//             loadCartItems();
//         };
//     });
// });

// // Load cart items from IndexedDB
// function loadCartItems() {
//     const transaction = db.transaction(["CartItems"], "readonly");
//     const store = transaction.objectStore("CartItems");

//     const request = store.getAll();
//     request.onsuccess = (e) => {
//         const cartItems = e.target.result;
//         const addtocartcontainer = document.querySelector(".cart-items");
//         addtocartcontainer.innerHTML = ""; // Clear previous items

//         cartItems.forEach(item => {
//             const cartitem = document.createElement('div');
//             cartitem.classList.add("cart-item");
//             cartitem.innerHTML = `
//             <img src='${item.productImg}'></img>
//             <h3>${item.productName}</h3>
//             <div class='price'>${item.productPrice}</div>
//             <button class='del'>Remove</button>
//             <div class='operation'>
//                 <div class='plus'>+</div>
//                 <div class='length'>${item.quantity}</div>
//                 <div class='minus'>-</div>
//             </div>`;

//             // Remove item
//             cartitem.querySelector('.del').addEventListener("click", () => {
//                 const delTransaction = db.transaction(["CartItems"], "readwrite");
//                 const delStore = delTransaction.objectStore("CartItems");
//                 delStore.delete(item.productName);
//                 loadCartItems();
//             });

//             // Increase quantity
//             cartitem.querySelector('.plus').addEventListener("click", () => {
//                 item.quantity += 1;
//                 store.put(item);
//                 loadCartItems();
//             });

//             // Decrease quantity
//             cartitem.querySelector('.minus').addEventListener("click", () => {
//                 item.quantity -= 1;
//                 if (item.quantity < 1) {
//                     store.delete(item.productName);
//                 } else {
//                     store.put(item);
//                 }
//                 loadCartItems();
//             });

//             addtocartcontainer.appendChild(cartitem);
//         });

//         updateTotals();
//     };
// }

// // Update totals in cart
// const updateTotals = () => {
//     let subtotal = 0;
//     const transaction = db.transaction(["CartItems"], "readonly");
//     const store = transaction.objectStore("CartItems");

//     const request = store.getAll();
//     request.onsuccess = (e) => {
//         const cartItems = e.target.result;

//         cartItems.forEach(item => {
//             let price = parseFloat(item.productPrice.replace("$", ""));
//             subtotal += price * item.quantity;
//         });

//         let tax = 3;
//         let finalTotal = subtotal + tax;

//         // Target both elements
//         let subTotal = document.querySelector("#subtotal");
//         let final_Total = document.querySelector("#final-total");
//         subTotal.textContent = `$${subtotal.toFixed(2)}`;
//         final_Total.textContent = `$${finalTotal.toFixed(2)}`;
//     };
// };

// // Hamburger Menu Functionality
// const toggleButton = document.querySelector('.toggle-button');
// const navMenu = document.querySelector('.nav-menu');
// const closeButton = document.querySelector('.nav-menu .close-button');

// toggleButton.addEventListener('click', () => {
//     navMenu.classList.add('active');
// });

// closeButton.addEventListener('click', () => {
//     navMenu.classList.remove('active');
// });

// // Header visibility based on width
// const toggleHandler = () => {
//     const header = document.getElementsByClassName("header")[0];
//     if (window.innerWidth <= 796) {
//         header.style.display = "none";
//     } else {
//         header.style.display = "flex";
//     }
// };

// window.addEventListener("resize", toggleHandler);
// window.addEventListener("load", toggleHandler);

// // Changing number of refreshing a page
// function number() {
//     let icon1 = document.getElementsByClassName("sup1")[0];
//     let num1 = Math.floor(Math.random() * 20) + 5;
//     icon1.innerText = num1;
// }

// number();

// // Hamburger show on 796
// document.addEventListener('DOMContentLoaded', function() {
//     function handleNavVisibility() {
//         var humbarger = document.querySelector('.toggle-button');
//         if (window.innerWidth < 796) {
//             humbarger.style.display = 'block';
//         } else if (window.innerWidth > 796) {
//             if (humbarger) {
//                 humbarger.parentNode.removeChild(humbarger);
//             }
//         }
//     }

//     window.addEventListener('resize', handleNavVisibility);
//     handleNavVisibility();
// });

// // Click on VIEW MORE button and jump 
// let button = document.querySelector(".second");
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: 1050,
//         behavior: "smooth"
//     });
// });

// // Click on SHOP NOW button and scroll to products section 
// let btn = document.querySelector(".first");
// let product = document.querySelector(".container-pr");
// btn.addEventListener("click", function() {
//     let products = product.offsetTop;
//     window.scrollTo({
//         top: products,
//         behavior: "smooth"
//     });
// });

// // Hero show on 440 in flex direction column
// let hero = document.querySelector(".hero");

// if (window.innerWidth <= 440) {
//     hero.innerHTML = `
//     <div class="img">
//          <img src="/images/heroimg.png" alt="home img" />
//        </div>
//     <div class="content">
//          <h2>Season <span>Sale</span></h2>
//          <h1>MAN'S FASHION</h1>
//          <h3>Min. 30% OFF</h3>
//          <button class="btn" id="hero-btn">Shop Now</button>
//     </div>`;
// }

// // Add event listener for hero button
// document.querySelector("#hero-btn").addEventListener("click", () => {
//     window.scrollTo({
//         top: product.offsetTop,
//         behavior: "smooth"
//     });
// });

// // Page Reload Count
// if (!sessionStorage.getItem("reloadCount")) {
//     sessionStorage.setItem("reloadCount", 0);
// }
// sessionStorage.setItem("reloadCount", parseInt(sessionStorage.getItem("reloadCount")) + 1);

// // Redirect to cart page if user has items in cart and is on homepage
// if (sessionStorage.getItem("reloadCount") == 1) {
//     const transaction = db.transaction(["CartItems"], "readonly");
//     const store = transaction.objectStore("CartItems");

//     const request = store.getAll();
//     request.onsuccess = (e) => {
//         const cartItems = e.target.result;
//         if (cartItems.length > 0 && window.location.pathname === "/index.html") {
//             alert("You have items in your cart. Redirecting to the cart page...");
//             window.location.href = "cart.html"; // Redirect to cart page
//         }
//     };
// }


// // IndexedDB setup
// let db;

// const request = indexedDB.open("UserDatabase", 1);

// request.onupgradeneeded = (e) => {
//     db = e.target.result;
//     const store = db.createObjectStore("Users", { keyPath: "username" });
//     store.createIndex("password", "password", { unique: false });
// };

// request.onsuccess = (e) => {
//     db = e.target.result;
//     checkLoginStatus(); // Check if the user is already logged in
// };

// request.onerror = (e) => {
//     console.error("Error opening IndexedDB:", e.target.errorCode);
// };

// // Signup Function
// function signupUser() {
//     const username = document.getElementById("signup-username").value;
//     const password = document.getElementById("signup-password").value;

//     const transaction = db.transaction(["Users"], "readwrite");
//     const store = transaction.objectStore("Users");

//     const request = store.add({ username, password });

//     request.onsuccess = () => {
//         alert("Signup successful! Please login.");
//         window.location.href = "login.html"; // Redirect to login page
//     };

//     request.onerror = (e) => {
//         alert("Signup failed: User already exists.");
//     };
// }

// // User Login
// function loginUser() {
//     const username = document.getElementById("login-username").value;
//     const password = document.getElementById("login-password").value;

//     const transaction = db.transaction(["Users"], "readonly");
//     const store = transaction.objectStore("Users");

//     const request = store.get(username);

//     request.onsuccess = (e) => {
//         const user = e.target.result;
//         if (user) {
//             if (user.password === password) {
//                 sessionStorage.setItem("loggedInUser", username);
//                 window.location.href = "index.html"; // Redirect to homepage
//             } else {
//                 alert("Invalid password. Please try again."); // Alert for mismatched password
//             }
//         } else {
//             alert("Invalid username. Please try again.");
//         }
//     };

//     request.onerror = () => {
//         alert("Login failed. Please try again.");
//     };
// }

// // Check Login Status
// function checkLoginStatus() {
//     const loggedInUser = sessionStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//         document.getElementById("welcome-message").innerHTML = `Welcome back, <span>${loggedInUser}</span>!`;
//     } else if (window.location.pathname !== "/signup.html" && window.location.pathname !== "/login.html") {
//         // Redirect to signup page if not logged in and not on signup/login pages
//         window.location.href = "signup.html";
//     }
// }

// // Logout Function
// function logout() {
//     sessionStorage.removeItem("loggedInUser");
//     window.location.href = "login.html"; // Redirect to login page
// }

// // Hamburger Menu Functionality
// const toggleButton = document.querySelector('.toggle-button');
// const navMenu = document.querySelector('.nav-menu');
// const closeButton = document.querySelector('.nav-menu .close-button');

// toggleButton.addEventListener('click', () => {
//     navMenu.classList.add('active');
// });

// closeButton.addEventListener('click', () => {
//     navMenu.classList.remove('active');
// });

// // Header visibility based on width
// const toggleHandler = () => {
//     const header = document.getElementsByClassName("header")[0];
//     if (window.innerWidth <= 796) {
//         header.style.display = "none";
//     } else {
//         header.style.display = "flex";
//     }
// };

// window.addEventListener("resize", toggleHandler);
// window.addEventListener("load", toggleHandler);

// // Add to cart functionality with LocalStorage
// let addtocartbtn = document.querySelectorAll("#add-to-cart");
// let addtocartcontainer = document.querySelector(".cart-items");

// // Load cart items from localStorage
// const loadCartItems = () => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     addtocartcontainer.innerHTML = ""; // Clear existing items
//     cartItems.forEach(item => {
//         const cartitem = createCartItemElement(item);
//         addtocartcontainer.appendChild(cartitem);
//     });

//     updateProductCount();
//     updateTotals();
// };

// // Function to create a cart item element
// const createCartItemElement = (item) => {
//     const cartitem = document.createElement('div');
//     cartitem.classList.add("cart-item");
//     cartitem.innerHTML = `
//         <img src='${item.productImg}'></img>
//         <h3>${item.productName}</h3>
//         <div class='price'>${item.productPrice}</div>
//         <button class='del'>Remove</button>
//         <div class='operation'>
//             <div class='plus'>+</div>
//             <div class='length'>${item.quantity}</div>
//             <div class='minus'>-</div>
//         </div>`;

//     // Remove button functionality
//     cartitem.querySelector('.del').addEventListener("click", () => {
//         removeCartItem(item.productName);
//     });

//     // Plus button functionality
//     cartitem.querySelector('.plus').addEventListener("click", () => {
//         changeItemQuantity(item.productName, 1);
//     });

//     // Minus button functionality
//     cartitem.querySelector('.minus').addEventListener("click", () => {
//         changeItemQuantity(item.productName, -1);
//     });

//     return cartitem;
// };

// // Add to cart button event listener
// addtocartbtn.forEach(button => {
//     button.addEventListener("click", () => {
//         let product = button.closest(".product");
//         let productImg = product.querySelector("img").src;
//         let productName = product.querySelector("h3").textContent;
//         let productPrice = product.querySelector(".price").textContent;

//         addItemToCart(productImg, productName, productPrice);
//     });
// });

// // Function to add item to cart
// const addItemToCart = (productImg, productName, productPrice) => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     let existingProduct = cartItems.find(item => item.productName === productName);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         cartItems.push({ productImg, productName, productPrice, quantity: 1 });
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     loadCartItems();
// };

// // Function to remove item from cart
// const removeCartItem = (productName) => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     cartItems = cartItems.filter(item => item.productName !== productName);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     loadCartItems();
// };

// // Function to change item quantity in the cart
// const changeItemQuantity = (productName, change) => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     let item = cartItems.find(item => item.productName === productName);

//     if (item) {
//         item.quantity += change;
//         if (item.quantity < 1) {
//             cartItems = cartItems.filter(i => i.productName !== productName);
//         }
//     }

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     loadCartItems();
// };

// // Update product count
// const updateProductCount = () => {
//     let icon2 = document.getElementsByClassName("sup2")[0];
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     icon2.textContent = `${cartItems.length}`;
// };

// // Update totals
// const updateTotals = () => {
//     let subtotal = 0;
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     cartItems.forEach(item => {
//         let price = parseFloat(item.productPrice.replace("$", ""));
//         subtotal += price * item.quantity;
//     });

//     let tax = 3;
//     let finalTotal = subtotal + tax;

//     // Target both elements
//     let subTotal = document.querySelector("#subtotal");
//     let final_Total = document.querySelector("#final-total");

//     if (subTotal && final_Total) {
//         subTotal.textContent = `$${subtotal.toFixed(2)}`;
//         final_Total.textContent = `$${finalTotal.toFixed(2)}`;
//     }
// };

// // Load cart items on page load
// document.addEventListener("DOMContentLoaded", loadCartItems);
