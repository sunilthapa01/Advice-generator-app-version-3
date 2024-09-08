

window.onload = () => {

    
    document.getElementById('contain').innerHTML = `<h3>Loading......</h3>`


    let AdvicAPI = 'https://api.adviceslip.com/advice'

    fetch(AdvicAPI)

    .then(Response => Response.json())
    .then(data => {


        
try {
    let Advice = data.slip
    

    let goodAdvice = document.getElementById('contain')

    goodAdvice.innerHTML = ""
    
    let show = document.createElement('h3')

    show.textContent = Advice.advice

    goodAdvice.append(show)

    


    let Count = document.getElementById('count')

    Count.innerHTML = ""
    
    Count.textContent = `#${Advice.id}`

}catch(Err){

    alert("Something Went Wrong !!")
}
})
}


document.getElementById('btn').addEventListener('click', () => {



    document.getElementById('contain').innerHTML = `<h3>Loading......</h3>`



    let AdvicAPI = 'https://api.adviceslip.com/advice'

    fetch(AdvicAPI)

    .then(Response => Response.json())
    .then(data => {


        
try {
    let Advice = data.slip
    

    let goodAdvice = document.getElementById('contain')

    goodAdvice.innerHTML = ""
    
    let show = document.createElement('h3')

    show.textContent = Advice.advice

    goodAdvice.append(show)


    let Count = document.getElementById('count')

    Count.innerHTML = ""
    
    Count.textContent = `#${Advice.id}`

}catch(Err){

    alert("Something Went Wrong !!")
}
})


})
