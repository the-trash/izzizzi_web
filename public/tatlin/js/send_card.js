function create_image() {
    var items = $('.ui-draggable');

    var pane = $('.Stage_cf_id');
    var parent = $('.ui-draggable').parent();

    items.each(function(index, item) {
        pane.append(item);
    });

    html2canvas(pane[0], {
        onrendered: function(canvas) {
            items.each(function(index, item) {
                parent.append(item);
            });

            var img = canvas.toDataURL("image/png");

            var popup = $('<div class="popup">')
                .append($('<a href="#">закрыть</a>')
                    .click(function() {
                        $(this).parent().remove();
                    }))
                .append($('<br>'))
                .append($('<img>')
                    .attr('src', img))
                .append($('<form id="mail_form" method="post">')
                    .append($('<input type="text" name="email">'))
                    .append($('<br>'))
                    .append($('<input type="hidden" name="image" value=' + img + '>'))
                    .append($('<input type="submit" value="отправить">')));

            $('body').append(popup);
        }
    });
}