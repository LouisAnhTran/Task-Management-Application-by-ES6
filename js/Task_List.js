class TaskList {
    constructor() {
        this.list_of_tasks = [];
    }
    add_task_to_list(task_obj) {
        this.list_of_tasks.push(task_obj);
    }
    display_all_pending_tasks_in_list() {
        let html_content = "";
        for (var i = this.list_of_tasks.length - 1; i >= 0; i--) {
            let task_obj=this.list_of_tasks[i];
            html_content += `
            <li class="format_li">
                <p class="format_li_text">${task_obj.task_detail}</p>
                <div>
                <button class="todo_button_trash" onclick="delete_task(event)" data_index="${i}">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="todo_button_complete" onclick="add_task_to_finish_list(event)" data_index="${i}">
                    <i class="fa fa-check-circle"></i>
                </button>
                </div>
            </li>
            `
        }
        return html_content;
    }
    check_if_task_detail_duplicate(task_detail){
        for(var item of this.list_of_tasks){
            if(item.task_detail==task_detail){
                return true;
            }
        }
        return false;
    }
    delete_one_task_from_the_list(index){
        this.list_of_tasks.splice(index,1);
    }
    display_all_finish_tasks_in_list(){
        let html_content = "";
        for (var i = this.list_of_tasks.length - 1; i >= 0; i--) {
            let task_obj=this.list_of_tasks[i];
            html_content += `
            <li class="format_li">
                <p class="format_li_text">${task_obj.task_detail}</p>
                <div>
                <button class="todo_button_trash_finish" onclick="delete_task_finish(event)" data_index=${i}>
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="todo_button_complete_finish" onclick="unfinish_the_task(event)" data_index="${i}">
                    <i class="fa fa-check-circle"></i>
                </button>
                </div>
            </li>
            `
        }
        return html_content;
    }
    
}