console.log("Initialized Okay");

//Gather primary elements to variables
var todoList = document.getElementById('todoList');
var completedList = document.getElementById('completedList');
var newTaskListItem = document.getElementById('newTask');

//As a user, I should be able to

var addNewTask = function(){
    console.log("addNewTask function started");
    //Add a new item by clicking on the add task item button
        //and it will create a new <li> item in the ul .todoList
            //and it will create a <label> with text from the first(new task) input,
            //and it will create a <input type="text" value=""> with placeholder = "new task"
            //and it will create a <label> with text from the second(time in) input,
            //and it will create a <input type="text" value=""> with placeholder = "time in"
            //and it will create a <button class="edit">Edit</button>
                //and it will bind the edit function to it
            //and it will create a <button class="save">Save</button>
                //and it will bind the save function to it
            //and it will create a <button class="markComplete">Complete</button>
                //and  bind the mark complete function to it
            //and it will create a <button class="delete">Delete</button>
                //and it will bind the delete function to it.

};

var deleteTask = function(){
    console.log("deleteTask function started");
    //Delete items by clicking on the delete item button
        //and it will remove the <li> and its contents from the page
};

var markComplete = function(){
    console.log("markComplete function started");
    //Mark an item complete by clicking on the completed button
        //and it will move the <li> and its contents to the .completedList <ul>
        //and, if necessary, it will delete it from the todoList <ul>
};

var markIncomplete = function(){
    console.log("markIncomplete function started");
    //Mark an item incomplete by clicking on the incomplete button
        //and it will move the <li> and its contents to the .todoList <ul>
        //and, if necessary, it will delete it from the completedList <ul>
};

var editTask = function(){
    console.log("editTask function started");
    //Edit an item by clicking on the edit item button
        //and it will toggle the class .editMode on the <li>
};

var saveTask = function(){
    console.log("saveTask function started");
    //Save an item by clicking on the save item button
       //and it will replace a the text for the first <label> with text from the first(new task) input,
        //and it will replace a the text for the first input with placeholder = "new task"
        //and it will replace a the text for the second <label> with text from the second(time in) input,
        //and it will replace a the text for the second input with placeholder = "time in"
        //and it will toggle .editMode on the <li>
};

var pageLoad = function(){
    console.log("pageLoad function started");
    //When the page loads
    //Bind the functions to the buttons
        //Each existing li should be cycled through in todoList
            //and it will bind the edit function to it <button class="edit">Edit</button>
            //and it will bind the save function to <button class="save">Save</button>
            //and  bind the mark complete function to  <button class="markComplete">Complete</button>
            //and it will bind the delete function to it <button class="delete">Delete</button>
        //Each existing li should be cycled through in completedList
            //and it will bind the edit function to it<button class="edit">Edit</button>
            //and it will bind the save function to <button class="save">Save</button>
            //and  bind the mark incomplete function to  <button class="markIncomplete">inComplete</button>
            //and it will bind the delete function to it <button class="delete">Delete</button>
        //The add task button should have the add task function bound to it
};
