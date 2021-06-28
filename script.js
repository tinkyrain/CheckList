//Obtain all the necessary blocks and input fields
let input = document.getElementById('input');
let main = document.getElementById('main');
let main_placeholder = document.getElementById('main-placeholder');

//When updating the page, the pure value
input.value = '';

//massive tasks
let tasks_arr = [];

//Function for creating a block with a task
function createTaskBlock(){
  let task_block = document.createElement('div');
  main.appendChild(task_block);
  task_block.className = 'task_block';

  task_block.innerText = `${input.value}`;
}

function tasks(){
  tasks_arr.push(input.value);
  //clear field
  input.value = '';

  let numTasks = tasks_arr.length;

  if(numTasks > 0){
    main_placeholder.style.display = 'none';
  } else {
    main_placeholder.style.display = 'block';
  }
}

//Check Field value
function CheckFieldFill(){
  if(input.value == ''){
    input.style.border = '1px solid red';
  } else {
    createTaskBlock();
    tasks();
  }
}

//Creating an ENTER Press Block
document.addEventListener('keydown', function(event){
  if(event.which === 13){
    CheckFieldFill();
  }
});
