let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function() {

    let item = document.createElement("li");
    item.innerText = inp.value;


    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


    ul.appendChild(item);
    inp.value = " ";
})



ul.addEventListener("click" ,function(e)
{
    if(e.target.nodeName == "BUTTON")
    {
        let tar = e.target.parentElement ;
        tar.remove();
        console.log("deleted");
    }

})

// let delbtns = document.querySelectorAll(".delete");

// for(delbt of delbtns)
// {
//     delbt.addEventListener("click",function()
// {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();

// })
// }