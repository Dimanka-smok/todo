let addInput = document.querySelector(".add")
let ul = document.querySelector("ul")
let date = new Date
console.log(date.getDay())

let weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let userDateInfo = document.querySelector("h3")
let month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августa", "Сентября", "Октябрь", "Ноябрь", "Декабрь"]

userDateInfo.innerHTML=`${weekdays[date.getDay()-1]}, ${date.getDate()} ${month[date.getMonth()]}`



addInput.addEventListener("keypress", function (event){
    if (inputValue.len.value>0 and event.key == "Enter"){
        let inputValue = document.querySelector(".add").value
        let li = document.createElement("li")
        let divText = document.createElement("div")
        let divImg = document.createElement("div")
        let img = document.createElement("img")
        let list = document.querySelector("ul")

        li.classList.add("todo")
        li.classList.add("animate__animated")
        li.classList.add("animate__bounceIn")
        divText.classList.add("text")
        divImg.classList.add("delete")
        img.setAttribute("src", "cross-sign.svg")
        
        divText.innerText=inputValue
        divImg.append(img)
        li.append(divText)
        li.append(divImg)
        list.append(li)
        document.querySelector("input").value=""
    }
})

ul.addEventListener("click", function (event){
    if (event.target.className=="delete"){
        event.target.parentElement.classList.add("animate__bounceOut")
        setTimeout(() => {
            event.target.parentElement.remove()
        }, 700)
    }
})

ul.addEventListener("click" , function(event){
    console.log(event.target.className)
    if (event.target.className=="text"){
        event.target.classList.toggle("done")
    }
})



