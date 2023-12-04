$(document).ready(function() {
    $('#sort-by-date').click(function() {
        var posts = $('.post');
        posts.sort(function(a, b) {
            return new Date($(b).data('created')) - new Date($(a).data('created'));
        });
        $('.post-container').html(posts);
    });

    $('#sort-by-title').click(function() {
        var posts = $('.post');
        posts.sort(function(a, b) {
            return $(a).data('title').localeCompare($(b).data('title'));
        });
        $('.post-container').html(posts);
    });

    $('#search-bar').on('input', function() {
        var searchVal = $(this).val().toLowerCase();

        $('.post').each(function() {
            var title = $(this).data('title').toLowerCase();

            if (title.includes(searchVal)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});