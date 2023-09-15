/*
Project Req:

Change The Background Color By Rendom RGB Color Click a Button.
Also Display The Hex Code Collor Desibled Input Filed

*/

window.onload = () =>{
    main()
}
function main (){
    const root = document.getElementById('root');
    const button = document.getElementById('change-btn')
    const output = document.getElementById('output')
    const copyBtn = document.getElementById('copy-btn')

    button.addEventListener('click', function(){
        const bgColor = generateHEXcolor()
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
        alert("Opps Well Done Copid.")
    })
}

function generateHEXcolor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}