//produce window switch
let buttons = document.querySelector(".up");
let button1 = document.querySelector("#button1")
let button2 = document.querySelector("#button2")
let button3 = document.querySelector("#button3")
let button4 = document.querySelector("#button4")

let window1 = document.querySelector("#window1")
let window2 = document.querySelector("#window2")
let window3 = document.querySelector("#window3")
let window4 = document.querySelector("#window4")

let editCounter = 0;


window1.classList.add("active")

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let userName = params.user; // "some_value"
let point = params.point;
let avatar = params.avatar;

console.log(userName);
console.log(point);
console.log(avatar)

let headerLogo = document.querySelector(".header-logo");
headerLogo.textContent = userName;

let pointValue = document.querySelector(".point-value");
pointValue.textContent = point+" Pt";

let profileAvatar = document.querySelector(".profile-maru");
let profileAvatar2 = document.querySelector(".profile-maru2");
profileAvatar.style.backgroundImage = "url("+avatar+")";
profileAvatar2.style.backgroundImage = "url("+avatar+")";
console.log(profileAvatar.style.backgroundImage);


  

//making 文房具　tag selected from the first
let num = 1;
if(num === 1){
    button1.classList.add("active");
    num++;
}

buttons.addEventListener("click", (e) =>{
    
    window1.classList.remove("active")
    window2.classList.remove("active")
    window3.classList.remove("active")
    window4.classList.remove("active")
    
    
    
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    if(e.target === button1){
        window1.classList.add("active");
        button1.classList.add("active");
        console.log("button1")
    }
    else if(e.target === button2){
        window2.classList.add("active");
        button2.classList.add("active");
        console.log("button2")
    }
    else if(e.target === button3){
        window3.classList.add("active");
        button3.classList.add("active");
        console.log("button3")
    }
    else if(e.target === button4){
        
        window4.classList.add("active");
        button4.classList.add("active");
        console.log("button4")
    }else{

    }

})


//console.log(currWidth)


//plus minus button
let plus = document.querySelector(".fa.fa-plus");
let minus = document.querySelector(".fa.fa-minus");
let produce = document.querySelectorAll(".produce");
let one_produce = document.querySelector(".produce");
let miniCarts= document.querySelector(".mini-cart");

//data stuff
function fetchData(url, method){

  return fetch(url, {method:method})
  .then((data)=>{
    return data.json();
  })

}

//produces
let windowScroll = document.querySelector(".window-scroll");
let shopCounter = 0;
let recordArray = [];
let recordArrayStrage = [];
let producesCounter = document.createElement("div");

function stationary(){

  fetchData("https://youkai-data.vercel.app/api/produces", "GET")
  .then((data) =>{
  
    let statArray = data["stationary"];
    console.log(statArray)
    console.log(data)
  
    if(statArray.length > 0){
      for (const item of statArray){
  
        const template = document.querySelector(".template1"); 
        const clone = template.content.cloneNode(true);
  
        clone.querySelector(".produce-name").textContent = item.name;
        clone.querySelector(".produce-price").textContent = item.price+" 円";
        clone.querySelector(".produce-document").textContent = item.detail;
        clone.querySelector(".produce-picture").style.backgroundImage = "url("+item.picture+")";

        clone.querySelector(".mini-cart").addEventListener("click", (e)=>{
          const cartItemName = item.name;
          console.log(cartItemName)

          //click bigger
          e.target.classList.add("active");
          document.querySelector(".cart").classList.add("active");
          //e.target.style.cssText = "animation: 1s linear alternate infinite carts; background-color:red;"

          setTimeout(()=>{
            e.target.classList.remove("active");
            document.querySelector(".cart").classList.remove("active");

          }, 1000)

          //counter function
          let cartPast = document.querySelector(".cart-past");
          shopCounter++;
          console.log(shopCounter)
          // let producesCounter = document.createElement("div");
          producesCounter.classList.add("cart-count");
          producesCounter.textContent = shopCounter;
          cartPast.appendChild(producesCounter);

          //record counter 
          let recordObject = {name:item.name, price:item.price, picture:item.picture, count:1};
          
          let sameName = recordArray.find(e => e.name === item.name)

          console.log(recordArray)
          console.log(sameName)
          console.log(item.name)
          

          if(sameName !== undefined){
            
            sameName.count++
            console.log(sameName.count)
          }else{
            recordArray.push(recordObject);
            console.log("pushed")
            console.log(recordArray[0].name)
          }
          
          

        })
        windowScroll.appendChild(clone)
        
        
      }
      
      produce=document.querySelectorAll(".produce");
      one_produce = document.querySelector(".produce");
      

      console.log(miniCarts)
      
      
    }
    
  })
  
}





stationary();

//record add produces 
let recordHolder = document.querySelector(".records-holder")
let totalPrice = 0;
let totalPriceView = document.querySelector(".total-yen");
function addRecord(){
  for (const item of recordArray){

    //deplication caliculator 
    console.log(recordArrayStrage)
    console.log(item)
    let sameObject = recordArrayStrage.filter(value=>value.name === item.name)
    
    console.log(sameObject)

    sameObject.count += item.count;
    
    console.log(recordArrayStrage)

    
    
    
    //add each row 
    if(sameObject.length > 0){
      console.log("ストレージと選んだものに重複があるよ")
      // clone.querySelector(".record-counter").innerHTML = sameObject[0].count + item.count;
      let eachName = document.querySelectorAll(".record-name");
      
      eachName.forEach((name)=>{
        if(name.innerHTML === item.name){
          console.log(name.nextElementSibling.lastElementChild.innerHTML)
          let eachCounter = parseInt(name.nextElementSibling.lastElementChild.innerHTML.split(" ")[1]);
          eachCounter += item.count;

          name.nextElementSibling.lastElementChild.innerHTML = "× "+eachCounter.toString();
          console.log(name.nextElementSibling.lastElementChild.innerHTML)
          
          
        }
      })
      // for(let i = 0; i<recordRow.length; i++){
      //   if(recordRow.item(i).innerHTML === sameObject.name){
      //     console.log("けすよー")
      //   }
      // }
      
    }else{
      
      // clone.querySelector(".record-counter").innerHTML = item.count
      //add element by using template
    const template = document.querySelector(".template2"); 
    const clone = template.content.cloneNode(true);
    clone.querySelector(".record-name").innerHTML = item.name;
    clone.querySelector(".record-price").innerHTML = item.price+" 円";
    clone.querySelector(".record-picture").style.backgroundImage = "url("+item.picture+")"
    clone.querySelector(".record-counter").innerHTML = "× "+item.count
    
    //delete produces
    let garbageBox = clone.querySelector(".garbage-box");

    garbageBox.addEventListener("click", (e)=>{
      
      
      
      
      let produceQuantity = e.target.closest(".record-row").lastElementChild.lastElementChild.innerHTML.split(" ")[1]; 
      produceQuantity--;
      e.target.closest(".record-row").lastElementChild.lastElementChild.innerHTML = "× " + produceQuantity.toString();
      if(produceQuantity <= 0){
        e.target.closest(".record-row").remove();
      }

      //substitude from recordArrayStrage

      let produceName = e.target.closest(".record-row").firstElementChild.nextElementSibling.innerHTML;
      let indexNumber = recordArrayStrage.findIndex((e) =>{
        return e.name === produceName;
      })
      
      recordArrayStrage[indexNumber].count--;
      if(recordArrayStrage[indexNumber].count <= 0){
        recordArrayStrage.splice(indexNumber, 1);
      }
      console.log(recordArrayStrage);


      //big cart counter count
      shopCounter--
      producesCounter.textContent = shopCounter;

      //subsutitude from total 
      let producePrice = parseInt(e.target.closest(".record-row").lastElementChild.firstElementChild.innerHTML.split(" ")[0]);
      totalPrice -= producePrice;
      totalPriceView.innerHTML = totalPrice+" 円";
      console.log(producePrice)
    })

    
    recordHolder.appendChild(clone);
    }
    
    

    //add to strage
    if(recordArrayStrage.length>0){
      let countIwatani = false;
      recordArrayStrage.forEach(element => {
        if(element.name === item.name){
          element.count += item.count;
          countIwatani = true;
        }
      });

      if(!countIwatani){
        recordArrayStrage = recordArrayStrage.concat(item);
      }
      
    }else{
      recordArrayStrage = recordArrayStrage.concat(item)
    }

    
  }
  
  
  
  recordArray = [];
  
  //total calcurating and showing
  recordArrayStrage.forEach(element => {
    totalPrice += element.price*element.count;
  });
  totalPriceView.innerHTML = totalPrice+" 円";
  console.log(totalPriceView.innerHTML)
  
  
  
  

}




//record apper
let recordCart = document.querySelector(".cart");
let record = document.querySelector(".record");
let recordApper = false;
recordCart.addEventListener("click", (e)=>{
  // console.log(recordArray)
  
  if(recordApper === false){
    recordApper = true;
    addRecord();
    record.style.opacity = "1";
    record.style.zIndex = "1000";
  }else if(recordApper === true){
    recordApper = false;
    record.style.opacity = "0";
    record.style.zIndex = "-1";
  }

})




//plus minus button

plus.addEventListener("click", (e)=>{
  const currWidth = parseInt(getComputedStyle(one_produce).width)
  produce.forEach(item1 => { 
    item1.style.width = currWidth +  100 + "px";
  })    
    
})

minus.addEventListener("click", (e)=>{
    
    const currWidth = parseInt(getComputedStyle(one_produce).width)
    produce.forEach(item1 => { 
        item1.style.width = currWidth -  50 + "px";
    })
   
})








//avator edit

let youkaiParent = document.querySelector(".youkai-edit-window-scroll") 

function youkaiOption(){
  fetchData("https://youkai-data.vercel.app/api/youkais", "GET")
  .then((data)=>{
    let youkaisArray = data.a;
    console.log(youkaisArray)
    for(const youkai of youkaisArray){
      let youkaiDiv = document.createElement("div");
      youkaiDiv.classList.add("one-youkai");

      youkaiDiv.style.backgroundImage = "url(../youkai/"+youkai+".png)"

      youkaiParent.appendChild(youkaiDiv)

      //avatar change
      
      youkaiDiv.addEventListener("click", (e)=>{
        console.log(youkaiDiv.style.backgroundImage)
        let profilePicture = document.querySelectorAll(".profile-maru");
        let profilePicture2 = document.querySelector(".profile-maru2");
        //profilePicture.style.backgroundImage = youkaiDiv.style.backgroundImage;
        profilePicture.forEach(each =>{
          each.style.backgroundImage = youkaiDiv.style.backgroundImage;
        })
        profilePicture2.style.backgroundImage = youkaiDiv.style.backgroundImage;
        console.log(profilePicture.style.backgroundImage)
      })

    }


  })
}

youkaiOption();


//go to main-menu
let menuBar = document.querySelector(".menu-bar")
let menuMain = document.querySelector(".menu-big")
menuBar.addEventListener("click", (e)=>{
  menuMain.style.opacity = 1;
  menuMain.style.zIndex = 9999999;
})

//close main-menu
let closeMenu = document.querySelector(".close-button-big");
closeMenu.addEventListener("click", (e)=>{
  menuMain.style.opacity = 0;
  menuMain.style.zIndex = -555;
})


//color change
let colorTagParent = document.querySelector(".color-change-window-left")
let youkaiWindowColor1 = document.querySelectorAll(".header");
let youkaiWindowColor2 = document.querySelectorAll(".option");
let i = document.querySelectorAll("i");

function colorChange(){

  fetchData("https://youkai-data.vercel.app/api/colors", "GET")
  .then((data)=>{

    
    let colorArray = data.color;
    
    colorArray.forEach(eachArray => {
      let colorTag = document.createElement("div");
      colorTag.classList.add("each-color-tag");
      colorTag.style.backgroundColor = "rgb("+ eachArray.color2+")"
      colorTag.innerHTML = eachArray.name;
      colorTagParent.appendChild(colorTag)
      

      colorTag.addEventListener("click", (e)=>{
        
        youkaiWindowColor1.forEach(eachWindow =>{
          eachWindow.style.backgroundColor = "rgb("+ eachArray.color1+")"
        })

        youkaiWindowColor2.forEach(eachBox =>{
          eachBox.style.backgroundColor ="rgb("+ eachArray.color2+")"
        })

        i.forEach(each =>{
          each.style.color = "rgb("+ eachArray.color2+")"
        })
        



      })

    });

  })
}

colorChange()






//edit window close
let editBoolean = false;
//let iwataniboddata = [{name:"pei", body:}]
let crossSign = document.querySelector(".cross-sign");
let NameCatch = document.querySelector(".header-logo").innerHTML;
crossSign.addEventListener("click", (e)=>{
  
  if(editBoolean === true){

    editWindow.style.zIndex = "-1";
    editWindow.style.opacity = "0";
    blackBack.style.zIndex = "-1";
    blackBack.style.opacity = "0";

    editBoolean = false;
  }

  //NameCatch = "lastNameInput";
  
  let lastNameInput = document.querySelector("#last-name").value;
  let firstNameInput = document.querySelector("#first-name").value;

  document.querySelector(".header-logo").innerHTML = lastNameInput;
  document.querySelector(".header-logo").innerHTML += " "+firstNameInput;
  console.log(lastNameInput);
  
  

})

//edit window appear
let profilePicture = document.querySelector(".profile")
let editWindow = document.querySelector(".profile-edit");
let blackBack = document.querySelector(".blackBack");
profilePicture.addEventListener("click", (e)=>{
  console.log("open");
  
  if(editBoolean === false){

    editWindow.style.zIndex = "99999";
    editWindow.style.opacity = "1";
    blackBack.style.zIndex = "99998";
    blackBack.style.opacity = "1";

    editBoolean = true;
  }
  
})

//変更だびょーん

let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (e)=>{
  if(editBoolean === true){

    editWindow.style.zIndex = "-1";
    editWindow.style.opacity = "0";
    blackBack.style.zIndex = "-1";
    blackBack.style.opacity = "0";

    editBoolean = false;
  }

  let lastNameInput = document.querySelector("#last-name").value;
  let firstNameInput = document.querySelector("#first-name").value;

  document.querySelector(".header-logo").innerHTML = lastNameInput;
  document.querySelector(".header-logo").innerHTML += " "+firstNameInput;
  console.log(lastNameInput);
})






