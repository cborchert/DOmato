console.log("Initialized Okay");

//Gather primary elements to variables
var todoList = document.getElementById('todoList');
var completedList = document.getElementById('completedList');
var newTaskListItem = document.getElementById('newTask');
var addTaskButton = document.getElementById('addTaskButton');

//As a user, I should be able to

//Add a new item by clicking on the add task item button
var addNewTask = function(){
    console.log("addNewTask function started");
    var currentInputs = this.parentElement.getElementsByTagName("input");
    var childToAdd;

    //and it will create a new <li> item in the ul .todoList
    var liToAdd = document.createElement("li");
    console.log(liToAdd);

    //and it will create a <label> with text from the first(new task) input,
    childToAdd = document.createElement("label");
    childToAdd.innerHTML = currentInputs[0].value;
    liToAdd.appendChild(childToAdd);
    console.log(liToAdd);


    //and it will create a <input type="text" value="new task"> with placeholder = "new task"
    childToAdd = document.createElement("input");
    childToAdd.setAttribute("type","text");
    childToAdd.setAttribute("value",currentInputs[0].value);
    liToAdd.appendChild(childToAdd);
    console.log(liToAdd);
    //clear current input
    currentInputs[0].value = "";


    //and it will create a <label> with text from the second (task time) input,
    childToAdd = document.createElement("label");
    childToAdd.innerHTML = currentInputs[1].value;
    liToAdd.appendChild(childToAdd);
    console.log(liToAdd);

    //and it will create a <input type="text" value="task time"> with placeholder = "task time"
    childToAdd = document.createElement("input");
    childToAdd.setAttribute("type","text");
    childToAdd.setAttribute("value",currentInputs[1].value);
    liToAdd.appendChild(childToAdd);
    liToAdd.innerHTML += " min";
    console.log(liToAdd);
    //clear current input
    currentInputs[1].value = "";

     //and it will create a <button class="edit">Edit</button>
     childToAdd = document.createElement("button");
     childToAdd.innerHTML = "Edit";
     childToAdd.classList.add("edit");
     liToAdd.appendChild(childToAdd);
     console.log(liToAdd);

    //and it will create a <button class="save">Save</button>
     childToAdd = document.createElement("button");
     childToAdd.innerHTML = "Save";
     childToAdd.classList.add("save");
     liToAdd.appendChild(childToAdd);
     console.log(liToAdd);

    //and it will create a <button class="markComplete">Complete</button>
     childToAdd = document.createElement("button");
     childToAdd.innerHTML = "Complete";
     childToAdd.classList.add("markComplete");
     liToAdd.appendChild(childToAdd);
     console.log(liToAdd);

     //and it will create a <button class="markIncomplete">Incomplete</button>
     childToAdd = document.createElement("button");
     childToAdd.innerHTML = "Incomplete";
     childToAdd.classList.add("markIncomplete");
     liToAdd.appendChild(childToAdd);
     console.log(liToAdd);


    //and it will create a <button class="delete">Delete</button>//and it will create a <button class="markIncomplete">Incomplete</button>
     childToAdd = document.createElement("button");
     childToAdd.innerHTML = "Delete";
     childToAdd.classList.add("delete");
     liToAdd.appendChild(childToAdd);
     console.log(liToAdd);

    //append the list item to the todo list
    todoList.appendChild(liToAdd);
    //bind the buttons to the functions of only this list item
    bindFunctionsToButtons(todoList, true);

};

//Delete items by clicking on the delete item button
var deleteTask = function(){
    console.log("deleteTask function started");
         //and it will remove the <li> (its parent element) and its contents from the page
    this.parentElement.parentElement.removeChild(this.parentElement);
};

//Mark an item complete by clicking on the completed button
var markComplete = function(){
    console.log("markComplete function started");
    var currentTask = this.parentElement;
    console.log(currentTask);
        //and it will move the <li> and its contents to the .completedList <ul>
        //and, if necessary, it will delete it from the todoList <ul>
    completedList.appendChild(currentTask);
};

var markIncomplete = function(){
    console.log("markIncomplete function started");
    //Mark an item incomplete by clicking on the incomplete button
        //and it will move the <li> and its contents to the .todoList <ul>
        //and, if necessary, it will delete it from the completedList <ul>
    var currentTask = this.parentElement;
    console.log(currentTask);
        //and it will move the <li> and its contents to the .completedList <ul>
        //and, if necessary, it will delete it from the todoList <ul>
    todoList.appendChild(currentTask);
};

var editTask = function(){
    console.log("editTask function started");
    //Edit an item by clicking on the edit item button
        //and it will toggle the class .editMode on the <li>
    this.parentElement.classList.add('editMode');
};

var saveTask = function(){
    console.log("saveTask function started");
    //Save an item by clicking on the save item button
    var currentInputs = this.parentElement.getElementsByTagName("input");
    var currentLabels = this.parentElement.getElementsByTagName("label");

    //double check that there are 2 inputs and 2 labels
    if(currentInputs.length == 2 && currentLabels.length == 2){
        //and it will replace the text for the first <label> with text from the first(new task) input,
        currentLabels[0].innerHTML = currentInputs[0].value;

        //and it will replace a the text for the second <label> with text from the second(time in) input,
        currentLabels[1].innerHTML = currentInputs[1].value;
    }
    else {
        alert("Error: Input mismatch. Delete the task and create new duplicate task");
    }

    //and it will toggle .editMode on the <li>
    this.parentElement.classList.remove('editMode');
};

//dummy function to test button clicks
var dummyAlert = function() {
        alert("You clicked on the <"+this.tagName+"> #"+this.id);
};

 //Bind the functions to the buttons, if single is set to "true" only the most recent item will be bound
var bindFunctionsToButtons = function(currentList, single){
     var currentButton = null;
     var startIndex = 0;
     (typeof(single)=='undefined' || !single)?"":startIndex = currentList.children.length-1;
     for(var i = startIndex; i < currentList.children.length; i++){
                //and it will bind the edit function to it <button class="edit">Edit</button>
                currentButton = currentList.children[i].getElementsByClassName('edit');
                if (currentButton.length>0) currentButton[0].addEventListener("click", editTask, false);
                //and it will bind the save function to <button class="save">Save</button>
                currentButton = currentList.children[i].getElementsByClassName('save');
                if (currentButton.length>0) currentButton[0].addEventListener("click", saveTask, false);
                //and  bind the mark complete function to  <button class="markComplete">Complete</button>
                currentButton = currentList.children[i].getElementsByClassName('markComplete');
                if (currentButton.length>0) currentButton[0].addEventListener("click", markComplete, false);
                //and  bind the mark incomplete function to  <button class="markInomplete">Incomplete</button>
                currentButton = currentList.children[i].getElementsByClassName('markIncomplete');
                if (currentButton.length>0) currentButton[0].addEventListener("click", markIncomplete, false);
                //and it will bind the delete function to it <button class="delete">Delete</button>
                currentButton = currentList.children[i].getElementsByClassName('delete');
                if (currentButton.length>0) currentButton[0].addEventListener("click", deleteTask, false);
            }
};

//Each existing li should be cycled through in todoList and functions bound to the buttons
bindFunctionsToButtons(todoList);
//Each existing li should be cycled through in completedList and functions bound to the buttons
bindFunctionsToButtons(completedList);

//The add task button should have the add task function bound to it
addTaskButton.addEventListener("click", addNewTask, false);


