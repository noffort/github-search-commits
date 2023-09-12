let github_improve_search = {
    create_search_input: function() {
        console.info("Creating search input")
        var search_improve_input = '<div id="github-improve-search-element"><input type="text" class="form-control input-contrast mt-2 mb-3 input-block js-filterable-field js-your-repositories-search" placeholder="Search commits"></div>'
        var branch_menu = document.getElementById('branch-select-menu');
        branch_menu.insertAdjacentHTML('afterend', search_improve_input);

        github_improve_search.monitor_enter_event()
    },

    monitor_enter_event: function() {
        document.getElementById('github-improve-search-element').addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                console.log('keydown');
                var repo = document.querySelector('qbsearch-input').getAttribute('data-current-repository');
                var search_string = this.getElementsByTagName('input')[0].value;

                location.href = '/search?q=repo:' + repo + '+' + search_string + '&type=commits';
            }
          });
    }

}

github_improve_search.create_search_input();

