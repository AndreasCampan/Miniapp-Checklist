let checklist = (function() {
  function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let input = $('#input');
    let deleteIcon = $('<div></div>');

    function crossOut() {
      li.toggleClass('strike');
    }

    function deleteListItem() {
      li.addClass('delete');
    }

    //If an input has been accepted then the form will become blank
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      $('#list').append(li);
      input.val('')
    }
    
    deleteIcon.append(document.createTextNode('X'));
    li.append(deleteIcon);
    li.append(inputValue);
    
    deleteIcon.on('click', deleteListItem);
    li.on('dblclick', crossOut);

    //Alows items to be rearranged
    $('#list').sortable();
  }
  //Allows access to the newItem function in the IIFE
  return {
    newItemf: newItem
  };

})();

//If the Add button is pushed the newItem function will run
$('#button').on('click', checklist.newItemf)

//Allows enter to submit the written input
$('form').on('submit', checklist.newItemf)