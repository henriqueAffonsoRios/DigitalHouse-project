const computer = document.querySelector("#brand1")
const notebooks = document.querySelector("#brand2")
const smartphones = document.querySelector("#brand3")
const perifericos = document.querySelector("#brand4")
const tablet = document.querySelector("#brand5")
const tvs = document.querySelector("#brand6")
const gamer = document.querySelector("#brand7")

const computerContainer = document.querySelector(".brand1")
const notebookContainer = document.querySelector(".brand2")
const smartphoneContainer = document.querySelector(".brand3")
const perifericoContainer = document.querySelector(".brand4")
const tabletContainer = document.querySelector(".brand5")
const tvsContainer = document.querySelector(".brand6")
const gamerContainer = document.querySelector(".brand7")


function checkBox(){
    if(computer.checked){
        notebookContainer.style.display = "none"
        smartphoneContainer.style.display = "none"
        perifericoContainer.style.display = "none"
        tabletContainer.style.display = "none"
        tvsContainer.style.display = "none"
        gamerContainer.style.display = "none"
    }if(!computer.checked){
        notebookContainer.style.display = "block"
        smartphoneContainer.style.display = "block"
        perifericoContainer.style.display = "block"
        tabletContainer.style.display = "block"
        tvsContainer.style.display = "block"
        gamerContainer.style.display = "block"
    } if(notebooks.checked){
        computerContainer.style.display = "none"
        smartphoneContainer.style.display = "none"
        perifericoContainer.style.display = "none"
        tabletContainer.style.display = "none"
        tvsContainer.style.display = "none"
        gamerContainer.style.display = "none"
    }if(smartphones.checked){
        computerContainer.style.display = "none"
        notebookContainer.style.display = "none"
        perifericoContainer.style.display = "none"
        tabletContainer.style.display = "none"
        tvsContainer.style.display = "none"
        gamerContainer.style.display = "none"
    }if(perifericos.checked){
    computerContainer.style.display = "none"
    notebookContainer.style.display = "none"
    smartphoneContainer.style.display = "none"
    tabletContainer.style.display = "none"
    tvsContainer.style.display = "none"
    gamerContainer.style.display = "none"
}if(perifericos.checked){
    computerContainer.style.display = "none"
    tvsContainer.style.display = "none"
    notebookContainer.style.display = "none"
    smartphoneContainer.style.display = "none"
    gamerContainer.style.display = "none"
}if(gamer.checked){
    tvsContainer.style.display = "none"
    tabletContainer.style.display = "none"
    computerContainer.style.display = "none"
    notebookContainer.style.display = "none"
    smartphoneContainer.style.display = "none"
    perifericoContainer.style.display = "none"
}if(tablet.checked){
    tvsContainer.style.display = "none"
    gamerContainer.style.display = "none"
    computerContainer.style.display = "none"
    notebookContainer.style.display = "none"
    smartphoneContainer.style.display = "none"
    perifericoContainer.style.display = "none"
}if(tvs.checked){
    tabletContainer.style.display = "none"
    gamerContainer.style.display = "none"
    computerContainer.style.display = "none"
    notebookContainer.style.display = "none"
    smartphoneContainer.style.display = "none"
    perifericoContainer.style.display = "none"
}if(!tablet.checked && !perifericos.checked && !computer.checked && !notebooks.checked && !smartphones.checked && !gamer.checked && !tvs.checked){
    computerContainer.style.display = "block"
    notebookContainer.style.display = "block"
    smartphoneContainer.style.display = "block"
}
}

const priceUp = document.querySelector("#priceUp")
const priceDown = document.querySelector("#priceDown")
const priceUpClass = document.querySelector(".priceUp")
const priceDownClass = document.querySelector(".priceDown")

function order(){
    if(priceUp.checked){
        priceDownClass.style.display = "none"
    }if(!priceUp.checked){
        priceDownClass.style.display = "block"
    } if(priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "none"
    }if(!priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "block"
    }
}

const value1Class = document.querySelector(".value1Class")
const value2Class = document.querySelector(".value2Class")
const value3Class = document.querySelector(".value3Class")
const value4Class = document.querySelector(".value4Class")
const value5Class = document.querySelector(".value5Class")

function valueCheck(){
    if(value1.checked){
        value2Class.style.display = "none"
        value3Class.style.display = "none"
        value4Class.style.display = "none"
    }if(!value1.checked){
        value2Class.style.display = "block"
        value3Class.style.display = "block"
        value4Class.style.display = "block"
    } if(value2.checked){
        value1Class.style.display = "none"
        value3Class.style.display = "none"
        value4Class.style.display = "none"
    }if(!value2.checked && !value1.checked){
        value1Class.style.display = "block"
        value3Class.style.display = "block"
        value4Class.style.display = "block"
    }if(value3.checked){
        value1Class.style.display = "none"
        value2Class.style.display = "none"
        value4Class.style.display = "none"
    }if(!value3.checked && !value2.checked && !value1.checked){
        value1Class.style.display = "block"
        value2Class.style.display = "block"
        value4Class.style.display = "block"
}if(value4.checked){
    value1Class.style.display = "none"
    value2Class.style.display = "none"
    value3Class.style.display = "none"
}if(!value4.checked && !value1.checked && !value2.checked && !value3.checked){
    value1Class.style.display = "block"
    value2Class.style.display = "block"
    value3Class.style.display = "block"
}
}