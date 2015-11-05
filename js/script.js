$(document).ready(function() {
    $('.home').fadeIn('slow');


var     article = $('article'),
        thumb = $('.work-gallery li'),
		projectsContainer = $('.projects'),
        projectContent = $('.project-content'),
        closeProject = $('.close-project');

        thumb.each(function () {
        var elem = $(this),
            thumbId = elem.attr('id'),
            thumbTopPosition = elem.position().top + sort.height() + (elem.width() * 0.5),
            thumbLeftPosition = elem.position().left + (elem.width() * 0.5),
            projectId = $('#detail-' + thumbId.split('-')[1]);
        projectId.css({top: thumbTopPosition, left : thumbLeftPosition});
        
        elem.click(function () {
            menuButton.addClass('grey-button');
            projectsContainer.addClass('visible');
            projectId.addClass('visible').removeAttr('style');
        });
        
        closeProject.click(function () {
            if (projectsContainer.hasClass('visible')) {
                projectsContainer.removeClass('visible');
                projectContent.removeClass('visible');
                $('.project-content').removeClass('visible');
});
