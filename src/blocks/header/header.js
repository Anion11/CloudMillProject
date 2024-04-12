import $ from 'jquery';

export const header = () => {
  const header = $(".header")
  if (header) {
    let prevScroll
    $(window).on("scroll", function() {
      const scrolled = $(window).scrollTop()
      if (scrolled > 100 && scrolled > prevScroll) {
        header.addClass("header_hidden")
      } else {
        header.removeClass("header_hidden")
      }
      prevScroll = scrolled
    })
  }
}
