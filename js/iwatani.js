window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("scroll", window.scrollY > 600);

});

let mainMenu = document.querySelector(".main-menu");
let body = document.querySelector("body")
let header = document.querySelector("header");

mainMenu.addEventListener("click", (e)=>{
  console.log(";lkj")
  //create element
  let menu = document.createElement("div");
  let layer = document.createElement("div");
  let menuLogo = document.createElement("div");
  let closeButton = document.createElement("div");
  let login = document.createElement("a");
  
  //add class name
  menu.className = "menu";
  layer.className = "layer";
  menuLogo.className = "menu-logo";
  closeButton.className = "close-button";
  login.className = "login";

  //add atribute
  login.setAttribute("href", "login.html");
  
  //add text
  closeButton.innerHTML = "✕";
  login.innerHTML = "ログイン";
  
  //add to html
  menu.appendChild(layer);
  menu.appendChild(menuLogo);
  menu.appendChild(closeButton);
  menu.appendChild(login);
  body.insertBefore(menu, header.nextSibling);

  closeButton.addEventListener("click", (e)=>{
    menu.remove();
  })
})







//data stuff
function sendHttpRequest(method, url, data) {
  
    return fetch(url, {
      method: method,
      headers: { Accept: "application/json" },
      body: JSON.stringify(data)
    }).then((data) => {
      return data.json()
    });
  }

  async function fetchPosts() {
    try {
      const responseData = await sendHttpRequest(
        "GET",
        "https://youkai-data.vercel.app/api/user"
      ).then((data) =>{
        console.log(data)
      })
    } catch (error) {
      console.log(error);
    }
  }


mainMenu.addEventListener("click", fetchPosts())

//fetchPosts();

