let input = document.getElementById('input');
let main = document.getElementById('main');

function createTaskBlock(){
  let task_block = document.createElement('div');
  main.appendChild(task_block);
  task_block.className = 'task_block';

  task_block.innerText = `${input.value}`;

  console.log('-');
}

function CheckFieldFill(){
  if(input.value == ''){
    input.style.border = '1px solid red';
  } else {
    createTaskBlock();
  }
}

document.addEventListener('keydown', function(event){
  if(event.which === 13){
    CheckFieldFill();

    console.log('*');
  }
});
