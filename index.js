var inputField = document.getElementById("text")
var btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    var feildValue = inputField.value 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${feildValue}&appid=5e354d366709c44523875f6bffdf2cd2`)
    .then ((data)=>{
        return data.json()
    })
    .then((res)=>{
        console.log(res)
        
        document.write(`<h2>Humidity :${res.main.humidity}</h2>`)
        document.write(`<h2> Pressure :${res.main.pressure}</h2>`)
        document.write(`<h2>Temperature :${res.main.temp-273.15}</h2>`)
    })
    .catch ((error)=>document.write("no city available"))
})