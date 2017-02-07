(function () {

  $(document).ready(() => {

    const todoModule = function() {

      const todoItems = {
        item1: {
          name: "1",
          id: null
        },
        item2: {
          name: "2",
          id: null
        },
        item3: {
          name: "3",
          id: null
        }
      }

    function generateTemplate(toBeReplaced) {
      const src = $('#list-item-template').html();
      const template = Handlebars.compile(src);
      const context = toBeReplaced;
      const html = template(context);
      $('.items'['li']).html(html).removeClass('hide');
      console.log(context);

    }

    function retrieveFormEntry() {
      $('form').on('submit', function (){
        event.preventDefault();

        let newListItem = $('.new-todo').val();
        generateTemplate(newListItem);
        updateIncompleteCounter();
      });
    }

    function updateIncompleteCounter() {
      let incCounter = 0;
      let itemLengths = $('.items').length;
      for (let i = 0; i < itemLengths; i++) {
        incCounter++;
      }
      $('.incomplete-items').html(incCounter);
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
