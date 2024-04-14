export const contactCard = () => {
  const block = document.querySelector('.contact-cards');

  if (block) {
    const cards = block.querySelectorAll('.contact-card');

    const calcHeightFoot = () => {
      const mediaQuery = window.matchMedia('(max-width: 1023px)')

      if (!mediaQuery.matches) {
        const maxHeight = [];

        for (const card of cards) {
          const foot = card.querySelector('.contact-card__foot');
          foot.style.minHeight = 'auto';
          maxHeight.push(foot.clientHeight);
        }

        for (const card of cards) {
          const foot = card.querySelector('.contact-card__foot');
          foot.style.minHeight = Math.max.apply(null, maxHeight) + 'px';
        }
      }
    }

    calcHeightFoot()
    window.addEventListener('resize', calcHeightFoot)
  }
};
