let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#button");
let box = document.querySelector(".box");
let loginbox = document.querySelector(".login-box");
let counter = 0;

let userName = "";
let userPoint = "";
let userAvatar = "";



button.addEventListener("click", (e)=>{
    e.preventDefault();
    let vEmail = email.value;
    let vPassword = password.value;
    console.log("button click")
    

    dataFetch("https://youkai-data.vercel.app/api/user", "GET")
    .then((data) =>{
       
        let userArray = data["a"];
        let emailArray = userArray.map(obj => obj.email)
        let passArray = userArray.map(obj => obj.password)
        //console.log(emailArray.includes(vEmail))
        //console.log(passArray.includes(vPassword))
        console.log(emailArray.includes(vEmail) && passArray.includes(vPassword))
        if(emailArray.includes(vEmail) && passArray.includes(vPassword)){
            //loginbox.style.backgroundColor = "red";
            let thisUser = userArray.filter((obj)=>{
                return obj.email === vEmail;
            })
            userName = thisUser[0]["name"];
            userPoint = thisUser[0]["point"];
            userAvatar = thisUser[0]["avatar"];

            console.log(userName)
            console.log(userPoint)
            console.log(userAvatar)
            console.log(";lkj")
            
            //sessionStorage.setItem(userName, userPoint);
            
            window.location = "shop.html?user="+ userName + "&point=" + userPoint + "&avatar=" + userAvatar;
            
        }

    })
})

//data stuff

if(counter === 1){
    console.log(";lkj");
}


function dataFetch(url, method, data){
    return fetch(url, {method:method})
    .then((data)=>{
        return data.json();
    })
}


//shop html
let headerLogo = document.querySelector(".header-logo");
headerLogo.style.color = "red";
headerLogo.innerHTML(userName);

localStorage.setItem("name", "jumpei")
