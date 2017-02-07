(function () {

  $(document).ready(() => {

    const todoModule = function() {
    let itemCounter = null;
    const todoItems = [
      {
        task: "",
        id: null
      }
    ];

    function bindEvents() {
      clickTheX();
      completeTheItem();
    }


    function displayAllTodoItems(htmlArg){
      //nada
        $('.items').prepend(htmlArg);
        console.log(todoItems);
        bindEvents();
    }

    function generateTemplate(task) {
      todoItems.push({task});
      const source = $('#list-item-template').html();
      const template = Handlebars.compile(source);
      const context = {task: task};
      const html = template(context);
      displayAllTodoItems(html);
      $('li').removeClass('hide');

    }

    function retrieveFormEntry() {
      $('form').on('submit', function (){
        event.preventDefault();
        let newListItem = {};
        newListItem.task= $('.new-todo').val();
        generateTemplate(newListItem.task);
        incrementCounter(true);
        $('form')[0].reset();
      });
    }

    function incrementCounter(arg) {
        itemCounter = todoItems.length -1;
        $('.incomplete-items').html(itemCounter);
      }

    function clickTheX() {
      $(':button').filter('.delete').on('click', function (){
        $('li:hover').remove();
        todoItems.pop();
        incrementCounter();
        console.log(todoItems);
      });

    }

    function completeTheItem() {
      $(':button').filter('.check').on('click', function() {
        $('li:hover').toggleClass('completed');
        incrementCounter();
        });
    }

    function init() {
      retrieveFormEntry();

    }

    return {
      init: init
    }

  }

  const todoApp = todoModule();

  todoApp.init();

});

})();
