let vul = false

function myFunction() {
    document.getElementById("demo").style.display = 'block'
    document.getElementById("container").style.backgroundColor = '#505050'
}

function myClose() {
    document.getElementById("demo").style.display = 'none'
    document.getElementById("container").style.backgroundColor = "white"
    document.getElementById("container").style.opacity = 1
}

function myFeatures() {
    vul = !vul;
    var val = document.getElementById("dropDown").src

    let vel = val.replace("images/icon-arrow-down.svg","./images/icon-arrow-up.svg")
    if(vul === true){
        document.getElementById("dropDown").src = vel
        document.getElementById("sub-finish").style.display = 'block'
    }else{
        document.getElementById("dropDown").src = "images/icon-arrow-down.svg"
        document.getElementById("sub-finish").style.display = 'none'
    }
}
    
function myCompany() {
    vul = !vul;
    var val = document.getElementById("companyDrop").src
    let vel = val.replace("images/icon-arrow-down.svg","./images/icon-arrow-up.svg")
    if(vul === true){
        document.getElementById("sub-finish5").style.display = 'block'
        document.getElementById("companyDrop").src = vel   
    }else{
        document.getElementById("sub-finish5").style.display = 'none'
        document.getElementById("companyDrop").src = "images/icon-arrow-down.svg"
    }
}

function myiDont() {
    vul = !vul;
    var val = document.getElementById("iDontKnow").src
    let vel = val.replace("images/icon-arrow-down.svg","./images/icon-arrow-up.svg")
    if(vul === true){
        document.getElementById("snoop").style.display = 'block'
        document.getElementById("iDontKnow").src = vel   
    }else{
        document.getElementById("snoop").style.display = 'none'
        document.getElementById("iDontKnow").src = "images/icon-arrow-down.svg"
    }
}

function myiDonted() {
    vul = !vul;
    var val = document.getElementById("iDontKnow2").src
    let vel = val.replace("images/icon-arrow-down.svg","./images/icon-arrow-up.svg")
    if(vul === true){
        document.getElementById("snoop2").style.display = 'block'
        document.getElementById("iDontKnow2").src = vel   
    }else{
        document.getElementById("snoop2").style.display = 'none'
        document.getElementById("iDontKnow2").src = "images/icon-arrow-down.svg"
    }
}
