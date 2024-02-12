const desagree = document.getElementById('no')
const agree = document.getElementById('yes')
const img = document.getElementById('img')
const h1 = document.getElementById('h1')
const text = document.getElementById('text')
const video = document.getElementById('video')
const section = document.getElementById('section')

let array = []

desagree.addEventListener("click" , () => {
    if (array.length == 0){
        desagree.innerHTML = 'Are u shure?';
        agree.className = 'firstno'
        img.src = "https://i.pinimg.com/564x/0f/c7/9e/0fc79e2c3f8a112cdfb94d1cdfbcc11b.jpg"
        array.push(1) 
        console.log(array);
    } else if (array.length == 1){
        desagree.innerHTML = 'realy shure?';
        agree.className = 'secondno'
        img.src = "https://i.pinimg.com/564x/79/fd/cc/79fdcc3179f1815e2a60657dff5f5e2b.jpg"
        array.push(2) 
        console.log(array);
    }else if (array.length == 2){
        desagree.innerHTML = 'are u positive?';
        agree.className = 'threeno'
        img.src = "https://i.pinimg.com/564x/b2/b5/a1/b2b5a139af3de43ffb08dc6d173bed52.jpg"
        array.push(3) 
        console.log(array);
    }else if (array.length == 3){
        desagree.innerHTML = 'think carefully';
        agree.className = 'fourno'
        img.src = "https://i.pinimg.com/564x/59/1a/d6/591ad6c1f7a80ba93ad49da3ac68ca51.jpg"
        array.push(4)   
        console.log(array);
    }else if (array.length == 4){
        desagree.innerHTML = 'ok , just say yes';
        agree.className = 'fiveno'
        img.src = "https://i.pinimg.com/564x/22/45/8a/22458a43758290613986202b7bdd3299.jpg"
        array.push(5)
        console.log(array);
    }else if (array.length == 5){
        desagree.innerHTML = 'ooooh , cmn giiirle';
        agree.className = 'sixno'
        img.src = "https://i.pinimg.com/564x/55/cb/4e/55cb4e9ac8475603987473504cbe39ab.jpg"
        array.push(6)
        console.log(array);
    }
})


agree.addEventListener("click" , () => {
    img.className = 'none'
    // img.src = "https://i.pinimg.com/564x/e4/21/40/e42140d617bfaf19b04f9b0bd4982108.jpg"
    h1.innerHTML = "Okeeeyyy  🥰 "
    h1.className ='h1'
    text.innerHTML = "Enjoy the show 😜 !!! "
    text.className = 'p'
    agree.className = 'okok'
    desagree.className = 'okok'
    video.className = 'after'
    section.className = 'new-section'
})

