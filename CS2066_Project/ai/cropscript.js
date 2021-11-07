var snap = document.getElementById("snap")
var noneObj = document.getElementById("noneObj")

var skinCondition = document.getElementById("skinCondition")
var skinStatus = document.getElementById("skinStatus")
var skinType = document.getElementById("skinType")

// var skinCondition2 = document.getElementById("skinCondition2")
var skinStatus2 = document.getElementById("skinStatus2")
var skinType2 = document.getElementById("skinType2")

var skinStatusRec = document.getElementById("skinStatusRec")
var skinTypeRec = document.getElementById("skinTypeRec")

var Conditions = new Array("Well", "Good", "Fine", "Bad", "Average")
var Status = new Array("Wet", "Dry", "Neutral")
var Types = new Array("Oil", "Neutral")

var recConditions = new Array("Well", "Good", "Fine", "Bad", "Average") // Recommendations
var recStatus = new Array("Use a facial mask to absorb additional water", "Use a Moisturizer to lock water", "Your skin is in a well condition! No additional skincare need to be done for this!")
var recTypes = new Array("Use a cleanser to equalize your oil conditions", "Your skin type is in a well condition! No additional skincare need to be done for this!")


snap.onclick = () => {
    iconToSpinner()
    setTimeout(getAnalysis, 1500)
}

function ran(num){
    return Math.floor(Math.random()*num);
}

function iconToSpinner(){
    var icon = document.getElementById("cameraIcon")
    var spinner = document.getElementById("spinner")
    var btnText=  document.getElementById("btnText")

    icon.classList.add("d-none")
    spinner.classList.remove("d-none")

    btnText.innerHTML = "Analyzing your face..."
}


function getAnalysis(){
    crop(facialData);
    
    clearInterval(interval1)
    clearInterval(interval2)

    displayCanvas.remove()
    video.remove()
    canvas.remove()
    snap.remove()
    stopVideo()

    noneObj.classList.remove("d-none")

    conditionNum = ran(Conditions.length)
    statusNum = ran(Status.length)
    typeNum = ran(Types.length)


    skinCondition.innerHTML = Conditions[conditionNum]
    skinStatus.innerHTML = Status[statusNum]
    skinType.innerHTML = Types[typeNum]

    // skinCondition2.innerHTML = Conditions[conditionNum]
    skinStatus2.innerHTML = Status[statusNum]
    skinType2.innerHTML = Types[typeNum]

    skinStatusRec.innerHTML = recStatus[statusNum]
    skinTypeRec.innerHTML = recTypes[typeNum]


}