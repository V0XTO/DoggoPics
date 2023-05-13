const getData= async()=>{
let response = await fetch('https://dog.ceo/api/breeds/image/random');
return await response.json()
}

const createHtml =async()=>{
    let data=await  getData();
    let containerD = `
    <figure class="figure"><img src="${data.message}"></figure>
    `

    const container = document.getElementById("container");
    container.innerHTML=containerD
    
}

createHtml()

document.getElementById("button").addEventListener("click", createHtml)