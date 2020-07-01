'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html;
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item)
    container.append(newItemHTML);
  });
}

function showThingsToDo() {

  let things = [
    { thing: 'watch tv' },
    { thing: 'take a nap' },
  ];
  renderThings(things.thing);

}

$(document).ready(function () {
  showThingsToDo();
});
