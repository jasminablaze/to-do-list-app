function newItem() {

    //1. Explanation: Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('Add some content');
    } else {
        $('#list').append(li);
    }

    //2. Explanation: Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', crossOut);

    //3(i). Explanation: Adding the delete button 'X':
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);

    //3(ii). Explanation: Adding the class 'delete' (display: none) from the css:
    function deleteListItem() {
        li.addClass('delete');
    }

    // 4. Reordering the items: 
    $('#list').sortable();
}