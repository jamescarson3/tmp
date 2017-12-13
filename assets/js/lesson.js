// Handle foldable challenges and solutions (on click and at start).
$(".solution").click(function(event) {
    var trigger = $(event.target).has(".fold-unfold").size() > 0 ||
        $(event.target).filter(".fold-unfold").size() > 0;
    if (trigger) {
        $(">*:not(h3)", this).toggle(400);
        $(">h2>span.fold-unfold", this).toggleClass("fa-caret-square-o-down fa-caret-square-o-up");
        event.stopPropagation();
    }
});

$(".solution").each(function() {
    $(">*:not(h3)", this).toggle();
    var h3 = $("h3:first", this);
    h3.append("<span class='fold-unfold spacer fa fa-caret-square-o-down'></span>");
});
