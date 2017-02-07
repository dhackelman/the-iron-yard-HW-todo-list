(function () {

  $(document).ready(() => {

    const todoModule = function() {

      const todoItems = [
        {
          task: "1",
          id: null
        },
        {
          task: "2",
          id: null
        },
        {
          task: "3",
          id: null
        }
      ]

    function displayAllTodoItems (){
      //nada
    }

    function generateTemplate(toBeReplaced) {
      const source = $('#list-item-template').html();
      const template = Handlebars.compile(source);
      const context = {task: toBeReplaced};
      const html = template(context);
      console.log(html);
      $('li').removeClass('hide');

    }

    function retrieveFormEntry() {
      $('form').on('submit', function (){
        event.preventDefault();
        let newListItem = {};
        newListItem.task= $('.new-todo').val();
        generateTemplate(newListItem.task);
        todoItems.push(newListItem.task)
        updateIncompleteCounter();
        // displayAllTodoItems();
        $('form')[0].reset();
      });
    }

    function updateIncompleteCounter() {
      let incCounter = 0;
      let itemLengths = todoItems.length;
      for (let i = 0; i < itemLengths; i++) {
        incCounter++;
      }
      $('.incomplete-items').html(incCounter);
    }


    function init() {
      retrieveFormEntry();
      console.log(todoItems);
    }

    return {
      init: init
    }

  }

  const todoApp = todoModule();

  todoApp.init();

});

})();
