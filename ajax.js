const xhr = new XMLHttpRequest()
const url = "https://api.github.com/users"

xhr.open('GET', url)
xhr.readyState

xhr.onreadystatechange = ()=>{
    if (xhr.readyState == 4 && xhr.status==200){
       const response = JSON.parse(xhr.responseText)
       console.log(response);

       for(let i=0; i<30; i++){
        const image = document.createElement('img')
        image.src = response[i].avatar_url
        console.log(image);
 
        const hr = document.createElement('hr')
 
        const para = document.createElement('p')
        para.className = 'lead'
        para.innerHTML = `<b>${response[i].login}</b>`
        para.style.textAlign = 'center'
        console.log(para);
 
        const box = document.getElementById('main')
        box.appendChild(image)
        box.appendChild(hr)
        box.appendChild(para)
       }

    }
}
xhr.send()