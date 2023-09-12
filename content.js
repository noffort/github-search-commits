let github_improve_search = {
    create_search_input: function() {
        const page_id_element = document.head.querySelector("[name~=selected-link][value]");
        var page_id = false;

        if (page_id_element) {
            page_id = page_id_element.getAttribute('value');
        }

        if (page_id == false || page_id != 'repo_commits') {
            return false;
        }

        if (!document.getElementById('github-improve-search-element')) {
            const branch_menu = document.getElementById('branch-select-menu');
            if (branch_menu) {
                console.info("Creating search input")
                var search_improve_input = '<div id="github-improve-search-element"><input type="text" class="form-control input-contrast mt-2 mb-3 input-block js-filterable-field js-your-repositories-search" placeholder="Search commits"></div>'
                branch_menu.insertAdjacentHTML('afterend', search_improve_input);

                github_improve_search.monitor_enter_event();
            }
        }
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
    },

    monitor_change: function() {
        let lastUrl = location.href; 
        new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            
            setTimeout(() => {
                github_improve_search.create_search_input();
            }, 300);
        }
        }).observe(document, {subtree: true, childList: true});
    },

    on_change: function() {

    }
}

github_improve_search.create_search_input();
github_improve_search.monitor_change();