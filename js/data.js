// //produce window switch
// let buttons = document.querySelector(".up");
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let button3 = document.querySelector("#button3");
// let button4 = document.querySelector("#button4");

// let window1 = document.querySelector("#window1");
// let window2 = document.querySelector("#window2");
// let window3 = document.querySelector("#window3");
// let window4 = document.querySelector("#window4");

// window1.classList.add("active");

// const params = new Proxy(new URLSearchParams(window.location.search), {
//   get: (searchParams, prop) => searchParams.get(prop)
// });
// // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
// let userName = params.user; // "some_value"
// let point = params.point;
// let avatar = params.avatar;

// console.log(userName);
// console.log(point);
// console.log(avatar);

// let headerLogo = document.querySelector(".header-logo");
// headerLogo.textContent = userName;

// let pointValue = document.querySelector(".point-value");
// pointValue.textContent = point + " Pt";

// let profileAvatar = document.querySelector(".profile-maru");
// let profileAvatar2 = document.querySelector(".profile-maru2");
// profileAvatar.style.backgroundImage = "url(" + avatar + ")";
// profileAvatar2.style.backgroundImage = "url(" + avatar + ")";
// console.log(profileAvatar.style.backgroundImage);

// //making 文房具　tag selected from the first
// let num = 1;
// if (num === 1) {
//   button1.classList.add("active");
//   num++;
// }

// buttons.addEventListener("click", (e) => {
//   window1.classList.remove("active");
//   window2.classList.remove("active");
//   window3.classList.remove("active");
//   window4.classList.remove("active");

//   button1.classList.remove("active");
//   button2.classList.remove("active");
//   button3.classList.remove("active");
//   button4.classList.remove("active");
//   if (e.target === button1) {
//     window1.classList.add("active");
//     button1.classList.add("active");
//     console.log("button1");
//   } else if (e.target === button2) {
//     window2.classList.add("active");
//     button2.classList.add("active");
//     console.log("button2");
//   } else if (e.target === button3) {
//     window3.classList.add("active");
//     button3.classList.add("active");
//     console.log("button3");
//   } else if (e.target === button4) {
//     window4.classList.add("active");
//     button4.classList.add("active");
//     console.log("button4");
//   } else {
//   }
// });

// //console.log(currWidth)

// //plus minus button
// let plus = document.querySelector(".fa.fa-plus");
// let minus = document.querySelector(".fa.fa-minus");
// let produce, one_produce;

// //data stuff

// function fetchData(url, method) {
//   return fetch(url, { method: method }).then((data) => {
//     return data.json();
//   });
// }

// //produces
// let windowScroll = document.querySelector(".window-scroll");

// function stationary() {
//   fetchData("https://youkai-data.vercel.app/api/produces", "GET").then(
//     (data) => {
//       let statArray = data["stationary"];
//       console.log(statArray);

//       if (statArray.length > 0) {
//         for (const item of statArray) {
//           const template = document.querySelector("template");
//           const clone = template.content.cloneNode(true);
          
//           //attach event listener to each shopping cart icon
//           clone.querySelector(".mini-cart").addEventListener("click", function(e){
//             const cartItemName = item.name
//             console.dir(cartItemName);
//           });

//           clone.querySelector(".produce-name").textContent = item.name;
//           clone.querySelector(".produce-price").textContent = item.price + "円";
//           clone.querySelector(".produce-document").textContent = item.detail;
//           clone.querySelector(".produce-picture").style.backgroundImage =
//             "url(" + item.picture + ")";
//           windowScroll.appendChild(clone);
//         }
//         produce = document.querySelectorAll(".produce");
//         one_produce = document.querySelector(".produce");
//       }
//     }
//   );
// }

// stationary();

// plus.addEventListener("click", (e) => {
//   const currWidth = parseInt(getComputedStyle(one_produce).width);
//   produce.forEach((item1) => {
//     item1.style.width = currWidth + 100 + "px";
//   });
// });
// minus.addEventListener("click", (e) => {
//   const currWidth = parseInt(getComputedStyle(one_produce).width);
//   produce.forEach((item1) => {
//     item1.style.width = currWidth - 50 + "px";
//   });
// });

// //sending cart

// // let minicart = document.querySelector(".mini-cart");
// // console.log(minicart);
// // minicart.addEventListener("click", (e)=>{
// //   console.log("mini-cart")
// // })

// //avator edit

// let youkaiParent = document.querySelector(".youkai-edit-window-scroll");

// function youkaiOption() {
//   fetchData("https://youkai-data.vercel.app/api/youkais", "GET").then(
//     (data) => {
//       let youkaisArray = data.a;
//       console.log(youkaisArray);
//       for (const youkai of youkaisArray) {
//         let youkaiDiv = document.createElement("div");
//         youkaiDiv.classList.add("one-youkai");

//         youkaiDiv.style.backgroundImage = "url(../youkai/" + youkai + ".png)";

//         youkaiParent.appendChild(youkaiDiv);
//       }
//     }
//   );
// }

// youkaiOption();