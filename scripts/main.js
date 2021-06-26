var yOffset;

function scrollIntoView(id)
{
	var y = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset - yOffset;

	window.scrollTo({top: y, behavior: 'smooth'});
}

$(function()
{
	yOffset = $(".sticky-header").outerHeight();

	$(".launcher-link").click(function ()
		{
			scrollIntoView("Launcher")
		});
	$(".about-link").click(function ()
		{
			scrollIntoView("About")
		});
	$(".hand-link").click(function ()
		{
			scrollIntoView("Hand")
		});
});