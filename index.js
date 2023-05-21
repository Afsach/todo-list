
const taskText = document.querySelector('#task-text');
const addTaskBtn = document.querySelector('#add-task');
const taskContainer = document.querySelector('.task-container');

function addTask() {
  if (taskText.value.length < 3) {
    alert("please enter task of length more than 3 characters")
  } else {
    const task = document.createElement('div');
    task.setAttribute('id', 'task');
    task.innerHTML = `<div id="task-content"><input type="checkbox"><h4 id="task-content">${taskText.value}</h4></div><span><i class="fa fa-light fa-xmark"></i>`
    taskContainer.appendChild(task)
    taskContainer.style.textTransform = 'capitalize';
    taskText.value = '';
  }

  storeData()

}

taskText.addEventListener('keydown', (e)=>{
  if(e.key == 'Enter'){
    addTask()
  }
  storeData();
})

addTaskBtn.addEventListener('click', addTask)

taskContainer.addEventListener('click', function (e) {
  if (e.target.nodeName == 'INPUT') {
    if (e.target.checked) {
      e.target.nextSibling.style.textDecoration = 'line-through 2px solid #283E56';
      storeData()
    } else {
      e.target.nextSibling.style.textDecoration = 'none';
      storeData()
    }
  }

  if (e.target.nodeName == 'I') {
    e.target.parentElement.parentElement.remove()
    storeData()
  }

storeData()

})


function storeData(){
  if(taskContainer.childElementCount === 0){
    taskContainer.style.display = 'none';
  }else{
    taskContainer.style.display = 'block';
  }

  localStorage.setItem('data', taskContainer.innerHTML);
}

function getData(){
  taskContainer.innerHTML = localStorage.getItem('data');
 
}

getData()
storeData()
