function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let input = $('#input');
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    input.val('')
  }

  function crossOut() {
    li.toggleClass('strike');
  }

  function deleteListItem() {
    li.addClass('delete');
  }

  li.on('dblclick', crossOut);


  let deleteIcon = $('<div></div>');
  deleteIcon.append(document.createTextNode('X'));
  li.append(deleteIcon);

  deleteIcon.on('click', deleteListItem);


  $('#list').sortable();

}
$(window).on('keypress', function (e){
  if(e.which == 13) {
    newItem();
    return false;
  }
});
