console.log("hello")

// HTML ELEMENTS

//// INPUT FIELDS
const billInput = document.getElementById("bill-num")
const peopleInput = document.getElementById("people-num")


//// BUTTONS
const tipBtn5 = document.getElementById("5-tip-btn")
const tipBtn10 = document.getElementById("10-tip-btn")
const tipBtn15 = document.getElementById("15-tip-btn")
const tipBtn25 = document.getElementById("25-tip-btn")
const tipBtn50 = document.getElementById("50-tip-btn")
const tipBtnCustom = document.getElementById("custom-tip-btn")

const allTipBtns = document.querySelectorAll(".tip-btns")

const resetBtn = document.getElementById("reset-btn")

//// RESULT FIELDS

const tipAmountResult = document.getElementById("tip-amount-num")
const totalAmountResult = document.getElementById("total-amount-num")

function clearResults() {
    tipAmountResult.innerHTML = ""
    totalAmountResult.innerHTML = ""
}

function calculateTip() {
    clearResults()

    billSubTotal = Number(billInput.value)
    numPeople = Number(peopleInput.value)
    activeTip = document.getElementsByClassName("active")[0].value;

    console.log((billSubTotal * activeTip) / numPeople)

    let tipResult = ((billSubTotal * activeTip) / numPeople)

    let totalResult = ((Number(billSubTotal) + Number(tipResult)) / Number(numPeople))

    tipAmountResult.innerHTML = tipResult.toFixed(2)
    totalAmountResult.innerHTML = totalResult.toFixed(2)
}

function removeClass(elements, className) {
    elements.forEach(element => {
        element.classList.remove(className)
    })
}

allTipBtns.forEach(tipBtn =>  {
    tipBtn.addEventListener("click", function() {
        removeClass(allTipBtns, "active")
        tipBtn.classList.add("active")
        calculateTip()
    })
})

billInput.addEventListener("input", function(){
    calculateTip()
})

peopleInput.addEventListener("input", function(){
    if (peopleInput.value != 0) {
        calculateTip()
    }
})