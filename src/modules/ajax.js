const ajax = (method,url,data,callback)=>{
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = ()=>{
        if(xhr.status===200&&xhr.readyState===XMLHttpRequest.DONE){
            callback(JSON.parse(xhr.responseText))
        }
    }
    xhr.open(method,url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(data))
}

export default ajax