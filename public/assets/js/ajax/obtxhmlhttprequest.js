(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment()
    xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState!==4)return
        if(xhr.status>=200&&xhr.status<300){
            let json = JSON.parse(xhr.responseText)
            json.forEach((el)=>{
                const $li = document.createElement("li")
                $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            $xhr.appendChild($fragment)
        }else{
            console.log("Error")
            let message = xhr.statusText || "OCURRIÓ UN ERROR"
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
        console.log("Este mensaje cargará de cualquier forma")
    })
    // xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    xhr.open("GET","../../public/assets/js/ajax/obtxhmlhttprequest&fetch.json")
    xhr.send()
})();