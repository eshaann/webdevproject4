const groceryList = [];

function init(){
    display();
    document.querySelector("#btn").addEventListener("click", function(){getInput(groceryList)});
    document.querySelector("#inc").addEventListener("click", function(){increment(1)});
    document.querySelector("#dec").addEventListener("click", function(){increment(-1)});
    document.querySelector("#del").addEventListener("click", function(){increment(0)});
    document.querySelector("#item").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          //stop from defaulting
          event.preventDefault();
          //
          document.querySelector("#btn").click();
        }
      });
      document.querySelector("#num").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

}
function display(){
    let listContainer = document.querySelector("#listContainer");
    listContainer.innerHTML = "<ol></ol>";
    let first = "Your List is Empty";
    listContainer.innerHTML = (groceryList.length === 0) ? `${first}` : listContainer.innerHTML;
    for(let i = 0; i<groceryList.length; i++){
        const node = document.createElement("li");
        const textnode = document.createTextNode(i+1 + ". " + groceryList[i]);
        node.appendChild(textnode);
        listContainer.appendChild(node);
    }
}



function getInput(){
    let inputContainer=document.querySelector("#input");  
    let item=inputContainer.item.value + "";
    if(item.length>1){
        inputContainer.item.value="";
        groceryList.push(item);
        display();
    }
}

function increment(com){
    let orderForm = document.querySelector("#order");
    let itemNum = minus(orderForm.num.value);
    //console.log(itemNum);
    (itemNum<0 || itemNum >= groceryList.length)? alert("Please pick a valid list index!"): console.log("valid");
    if(com===1){
        if(itemNum != null && (itemNum>=1 && itemNum<groceryList.length)){
            let temp = groceryList[itemNum-1];
            groceryList[itemNum-1] = groceryList[itemNum];
            groceryList[itemNum] = temp;
            orderForm.num.value=parseInt(orderForm.num.value)-1;
        }
    }
    else if(com === -1){
        if(itemNum != null && (itemNum>=0 && itemNum<groceryList.length-1)){
            let temp = groceryList[itemNum+1];
            groceryList[itemNum+1] = groceryList[itemNum];
            groceryList[itemNum] = temp;
            orderForm.num.value=parseInt(orderForm.num.value)+1;
        }
    }
    else if(com === 0){
        if(itemNum != null && (itemNum>=0 && itemNum<groceryList.length)){
            groceryList.splice(itemNum, 1);
        }
    }
    display();
}

const minus = (num) => (num-1);

setTimeout(function(){
    document.querySelector(".preloader").style.display = "none";
  }, 1000);