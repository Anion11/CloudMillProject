import $ from 'jquery';

export const header = () => {
  const header = $(".header")
  let prevScroll

  $(window).on("scroll", function() {
    const scrolled = $(window).scrollTop()
    if (scrolled > 100 && scrolled > prevScroll) {
      header.addClass("header-hidden")
    } else {
      header.removeClass("header-hidden")
    }
    prevScroll = scrolled
  })
}
