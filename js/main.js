let list_of_task_pending=new TaskList();
let list_of_task_finished=new TaskList();

let add_task_to_list=()=>{
    var task_detail=document.getElementById("newTask");
    if(task_detail.value=="" || list_of_task_pending.check_if_task_detail_duplicate(task_detail.value)){
        alert("Task detail is empty or duplicate, kindly input again your task detail");
        task_detail.value="";
        return;
    }
    var new_task=new Task(task_detail.value);
    list_of_task_pending.add_task_to_list(new_task);
    console.log(list_of_task_pending);
    task_detail.value="";

    display_pending_task();
    // let to_do_session=document.getElementById("todo").innerHTML=list_of_task_pending.display_all_pending_tasks_in_list();
    
}

let display_pending_task=()=>{
    let to_do_session=document.getElementById("todo").innerHTML=list_of_task_pending.display_all_pending_tasks_in_list();
}

let delete_task=(e)=>{
    console.log(e.currentTarget.getAttribute("data_index"));
    list_of_task_pending.delete_one_task_from_the_list(e.currentTarget.getAttribute("data_index"));
    // let to_do_session=document.getElementById("todo").innerHTML=list_of_task_pending.display_all_pending_tasks_in_list();
    display_pending_task();
}

let add_task_to_finish_list=(e)=>{
    console.log(e.currentTarget.getAttribute("data_index"));
    list_of_task_finished.add_task_to_list(list_of_task_pending.list_of_tasks[e.currentTarget.getAttribute("data_index")]);
    console.log(list_of_task_finished);

    list_of_task_pending.delete_one_task_from_the_list(e.currentTarget.getAttribute("data_index"));
    display_pending_task();
    display_finish_task();
}

let display_finish_task=()=>{
    let to_do_session=document.getElementById("completed").innerHTML=list_of_task_finished.display_all_finish_tasks_in_list();
}

let delete_task_finish=(e)=>{
    console.log(e.currentTarget.getAttribute("data_index"));
    list_of_task_finished.delete_one_task_from_the_list(e.currentTarget.getAttribute("data_index"));
    display_finish_task();
}

let unfinish_the_task=(e)=>{
    // console.log(e.currentTarget.getAttribute("data_index"));
    // console.log(list_of_task_finished.list_of_tasks[e.currentTarget.getAttribute("data_index")]);

    list_of_task_pending.add_task_to_list(list_of_task_finished.list_of_tasks[e.currentTarget.getAttribute("data_index")]);

    list_of_task_finished.delete_one_task_from_the_list(e.currentTarget.getAttribute("data_index"));
    display_finish_task();
    display_pending_task();

}

document.getElementById("addItem").addEventListener("click",function(){
    add_task_to_list();
})
