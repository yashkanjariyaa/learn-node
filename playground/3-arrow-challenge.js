const tasks = {
    tasks: [{
        text: 'workon ctfd',
        completed: true
    }, {
        text: 'Clean dishes',
        completed: false
    }, {
        text: 'make a billion dollar company',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())