'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  const ajaxSettings = {
    method: 'GET',
  };
  $.ajax('http://localhost:3000/todo', ajaxSettings)
    .then(data => {
      renderThings(data);
    })

}

$(document).ready(function () {
  showThingsToDo();
});
