function convertedValue(id){
    const price=document.getElementById(id).innerText;
    const convertPrice=parseInt(price); 
    
    return convertPrice;
}
const price=550;


function updateTotalCost(value){
    const totalCost=convertedValue('total-cost');

    const sum=totalCost+parseInt(value);
    document.getElementById("total-cost").innerText=sum;
    
}


function updateGrandTotal(status){
    const totalCost=convertedValue('total-cost');
    if(status==undefined){
        document.getElementById("grand-total").innerText=totalCost;
    }else{
        const cuponCode=document.getElementById('cupon-code').value;

        if(cuponCode=='NEW15'){
            if(cuponCode=='NEW15'){
                const discountedPrice=totalCost*0.15;
                document.getElementById("grand-total").innerText=totalCost-discountedPrice;
            }
            else{
                alert("Enter a valid value");
            }
        }else{
            if(cuponCode=='COUPLE20'){
                const discountedPrice=totalCost*0.20;
                document.getElementById("grand-total").innerText=totalCost-discountedPrice;
            }
            else{
                alert("Enter a valid value");
            }
        }
        
        
    }

    
}








const allseat=document.getElementsByClassName('btnn');
console.log(allseat);

for(const seat of allseat){
    seat.addEventListener("click",function(event){
        const name=event.target.parentNode.innerText;
        console.log(name)
        event.target.setAttribute('disabled',false);
        event.target.style.backgroundColor='#1DD100'
        
       



        const leftCount=convertedValue('left');
        document.getElementById('left').innerText=leftCount-1;

        const seatCount=convertedValue("left");
        if(seatCount+1<37){
            alert('limit sesh, barit jan');
            return;
        }


        const selectedSeat=document.getElementById('selectedSeat');

        const div=document.createElement("div");
        div.classList.add("flex")
        div.classList.add("gap-12")

        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const p3=document.createElement("p");

        p1.innerText=name;
        p2.innerText='Economy';
        p3.innerText='550';

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedSeat.appendChild(div);

        updateTotalCost(parseInt(550))
        updateGrandTotal();
        
    })
}

function done(){
    document.getElementById("hide").classList.add('hidden');
    document.getElementById("main").classList.add('hidden');
    document.getElementById("footer").classList.remove('hidden');

}