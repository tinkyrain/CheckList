//Obtain all the necessary blocks and input fields
let input = document.getElementById('input');
let main = document.getElementById('main');
let main_placeholder = document.getElementById('main-placeholder');

//When updating the page, the pure value
input.value = '';

//numbers tasks
let tasks_num = 0;

//Function for creating a block with a task
function createTaskBlock(){
  let task_block = document.createElement('div');
  main.appendChild(task_block);
  task_block.className = 'task_block';
  task_block.id = 'task_block';

  task_block.innerText = `${input.value}`;

  task_block.onclick = remove_block;
}

function tasks(tasks_num){
  if(tasks_num > 0){
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
    tasks_num++;
    tasks(tasks_num);
    //clear field
    input.value = '';
  }

  return tasks_num;
}

//Creating an ENTER Press Block
document.addEventListener('keydown', function(event){
  if(event.which === 13){
    CheckFieldFill();
  }
});

function remove_block(){
  //Removal block from page
  this.remove();
  tasks_num--;

  tasks(tasks_num);
}
