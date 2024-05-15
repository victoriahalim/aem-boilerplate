import { getMetadata } from '../../scripts/aem.js';
import { addClasses } from '../../scripts/scripts.js';
import { loadFragment } from '../fragment/fragment.js';

function hoverEffect(socialIcons) {
  socialIcons.forEach(img => {
    const defaultImgSrc = img.getAttribute('src');
    const hoverImgSrc = defaultImgSrc.slice(0, -4) + "-hover.svg";

    img.addEventListener('mouseenter', () => {
        img.src = hoverImgSrc
    });

    img.addEventListener('mouseleave', () => {
        img.src = defaultImgSrc;
    });
  });
}

export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  block.append(footer);

  // social icons mouse hover effect
  const socialIcons = footer.querySelectorAll('[data-social-icons="true"] img');
  hoverEffect(socialIcons)

  // add classes for styling
  addClasses(footer, 'p, a', 'body-small');

  console.log(socialIcons);
}
