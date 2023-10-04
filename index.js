document.querySelector(".start-game span").onclick = function(){

    var yourName= prompt("whats are your name");

    if(yourName==null || yourName==""){
        document.querySelector(".name span").innerHTML='UnKnown';
    }else{
        document.querySelector(".name span").innerHTML=yourName;
    }

    document.querySelector(".start-game").style.visibility=`hidden`;
    
    
}

let duration=1000;

let BlockContainer = document.querySelector(".memory-container");

let blocks=Array.from(BlockContainer.children);

let OrderRange = [...Array(blocks.length).keys()];
console.log(OrderRange);
shaffell(OrderRange);
console.log(OrderRange);

blocks.forEach(function(block,index){
    block.style.order=OrderRange[index];

    block.addEventListener("click",function(){

    flipeBlock(block);
    })
})


function flipeBlock(selectedBlock){
    selectedBlock.classList.add('is-flipped');

    let AllFlippedBlocks = blocks.filter(flipeBlock => flipeBlock.classList.contains('is-flipped'));

    if(AllFlippedBlocks.length === 2){
        stopCliking()
    }
    
    ChackMathedBlock(AllFlippedBlocks[0],AllFlippedBlocks[1]);

}



function stopCliking(){
    BlockContainer.classList.add('no-cliking');

    setTimeout(() => {
    
        BlockContainer.classList.remove('no-cliking');

    },duration);
}


function ChackMathedBlock(firstBlock,secoundBlock){
let wrongElement = document.querySelector(".wrong span");

if(firstBlock.dataset.memory === secoundBlock.dataset.memory){
firstBlock.classList.remove('is-flipped');
secoundBlock.classList.remove('is-flipped');

firstBlock.classList.add('has-match');
secoundBlock.classList.add('has-match');

document.getElementById('wiin').play();

}else{
    wrongElement.innerHTML=parseInt( wrongElement.innerHTML) + 1;

    setTimeout(() => {
        
    firstBlock.classList.remove('is-flipped');
    secoundBlock.classList.remove('is-flipped');
    }, duration);
    document.getElementById('faild').play();
}
}

function shaffell (array){
    let current=array.length,
    temp,
    random;

    while(current > 0){
        random = Math.floor(Math.random() * current);

        current--;

        temp= array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array;
}
