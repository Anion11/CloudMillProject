export const footer = () => {
  const footer = document.querySelector('.footer')

  if (footer) {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    const footerButton = footer.querySelector('.footer__partner .button')
    const footerText = footer.querySelector('.footer__dev span')

    const calcLeftButton = () => {
      setTimeout(() => {
        if (!mediaQuery.matches) footerText.style.width = footerButton.getBoundingClientRect().width + 'px'
        else footerText.style.width = 'auto'
      }, 500)
    }

    calcLeftButton()
    window.addEventListener('resize', calcLeftButton)
  }
}

