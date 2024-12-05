
const loadData = () => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : [
        { "Name": "Gagan", "Age": 12, "Tech": "MERN", "Role": "TP" },
    ];
};

let data=loadData()
const addDetails=()=>{
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let tech=document.getElementById("tech").value
    let role=document.getElementById("role").value
    if(name=="" || age=="" || tech=="" || role==""){
        document.getElementById("inner").innerHTML="Give proper Entry"
    }
    else{
        data.push({ "Name":name,
            "Age":age,
            "Tech":tech,
            "Role":role})
       localStorage.setItem('data',JSON.stringify(data))
       document.getElementById("modal").style="display:block"
       showCard()
       
    }
  
}
const showCard=()=>{
    let card=document.getElementById("data")
    card.innerHTML= "" ;
    data.forEach(values=>{
        let listItem=document.createElement("div")
        listItem.className="data"
        listItem.innerHTML=`
         <li>Name:${values.Name}</li>
         <li>Age:${values.Age}</li>
         <li>Tech:${values.Tech}</li>
         <li>Role:${values.Role}</li>
        `
        card.appendChild(listItem)
    })
    
}

const eraseData=()=>{   
    localStorage.clear()
    alert("Data cleared Sucessfully..")
}

showCard()
