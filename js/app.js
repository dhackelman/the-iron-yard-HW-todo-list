(function () {

  $(document).ready(() => {

    const todoModule = function() {
    const todoItems = [
      {
        task: "",
        id: null
      }
    ];
    let itemCounter = 0;

    function bindEvents() {
      clickTheX();
      completeTheItem();
      updateDisplayActive();
      updateDisplayCompleted();
      updateDisplayAll();
      clearCompleted();
      editTheItems();
      retrieveFormEntry();
    }


    function displayAllTodoItems(htmlArg){
      //nada
        $('.items').prepend(htmlArg);
        console.log(todoItems);

    }

    function generateTemplate(task) {
      todoItems.push({task});
      const source = $('#list-item-template').html();
      const template = Handlebars.compile(source);
      const context = {task: task};
      const html = template(context);
      displayAllTodoItems(html);
      $('.items li').removeClass('hide');
      $('.items li').addClass('active');

    }

    function retrieveFormEntry() {
      $('form').on('submit', function (){
        event.preventDefault();
        let newListItem = {};
        newListItem.task= $('.new-todo').val();
        generateTemplate(newListItem.task);
        adjustCounter();
        $('form')[0].reset();
      });
    }

    function adjustCounter() {

        $('.incomplete-items').html(itemCounter);
      }

    function clickTheX() {
      $('.delete').on('click', function (){
        todoItems.pop();
        $('li:hover').remove();
        adjustCounter();
        console.log(todoItems);
      });

    }

    function completeTheItem() {
      $('.check').on('click', function() {
        $('li:hover').toggleClass('completed');
        adjustCounter();
        });
    }

    function updateDisplayActive() {
      $('.show-active').on('click', function() {
        $('.items li').removeClass('hide');
        $('.items li.completed').addClass('hide');
        });
    }

    function updateDisplayCompleted() {
      $('.show-completed').on('click', function() {
        $('.items li').addClass('hide');
        $('.items li.completed').removeClass('hide');
        });
    }
    function updateDisplayAll() {
      $('.show-all').on('click', function() {
        $('.items li').removeClass('hide');
        });
    }
    function clearCompleted() {
      $('.clear').on('click', function() {
        $('.items li.completed').remove();
        });
    }

    function editTheItems() {
      $('.items p').on('click', function() {
        $('p').attr('contenteditable', true);
      });
    }


    function init() {
      bindEvents();


    }

    return {
      init: init
    }

  }

  const todoApp = todoModule();

  todoApp.init();

});

})();
