const count=document.querySelector(".counter");

//function for decrement

const decrement=()=>{
    let value =parseInt (count.innerText);//parseInt ke dwara int(numbr aate hai)
    value=value-1;
    count.innerText=value;
}

//function for increment

const increment=()=>{

    let value =parseInt (count.innerText);//parseInt ke dwara int(numbr aate hai)
    value=value+1;
    count.innerText=value;

}