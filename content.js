document.addEventListener("DOMContentLoaded", function () {
    // Crie um novo elemento div
    var newElement = '<div id="github-improve-search-element"><input type="text" class="form-control input-contrast mt-2 mb-3 input-block js-filterable-field js-your-repositories-search" placeholder="Search commits"></div>'
    var branch_menu = document.getElementById('branch-select-menu');
    branch_menu.insertAdjacentHTML('afterend', newElement);
  });

