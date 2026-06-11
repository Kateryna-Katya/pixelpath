document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_4_131" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
    <rect width="48" height="48" fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_4_131)">
    <path d="M12 28C10.9 28 9.95833 27.6083 9.175 26.825C8.39167 26.0417 8 25.1 8 24C8 22.9 8.39167 21.9583 9.175 21.175C9.95833 20.3917 10.9 20 12 20C13.1 20 14.0417 20.3917 14.825 21.175C15.6083 21.9583 16 22.9 16 24C16 25.1 15.6083 26.0417 14.825 26.825C14.0417 27.6083 13.1 28 12 28ZM24 28C22.9 28 21.9583 27.6083 21.175 26.825C20.3917 26.0417 20 25.1 20 24C20 22.9 20.3917 21.9583 21.175 21.175C21.9583 20.3917 22.9 20 24 20C25.1 20 26.0417 20.3917 26.825 21.175C27.6083 21.9583 28 22.9 28 24C28 25.1 27.6083 26.0417 26.825 26.825C26.0417 27.6083 25.1 28 24 28ZM36 28C34.9 28 33.9583 27.6083 33.175 26.825C32.3917 26.0417 32 25.1 32 24C32 22.9 32.3917 21.9583 33.175 21.175C33.9583 20.3917 34.9 20 36 20C37.1 20 38.0417 20.3917 38.825 21.175C39.6083 21.9583 40 22.9 40 24C40 25.1 39.6083 26.0417 38.825 26.825C38.0417 27.6083 37.1 28 36 28Z" fill="white" />
  </g>
</svg>
    `;
  
    const crossIcon = `
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 28.244L34.6059 38.85C35.1687 39.4128 35.932 39.729 36.7279 39.729C37.5238 39.729 38.2871 39.4128 38.8499 38.85C39.4127 38.2872 39.7289 37.5239 39.7289 36.728C39.7289 35.9321 39.4127 35.1688 38.8499 34.606L28.2399 24L38.8479 13.394C39.1265 13.1153 39.3474 12.7845 39.4981 12.4205C39.6488 12.0565 39.7263 11.6663 39.7262 11.2723C39.7261 10.8783 39.6484 10.4882 39.4975 10.1242C39.3467 9.76023 39.1256 9.42953 38.8469 9.151C38.5683 8.87247 38.2375 8.65155 37.8734 8.50086C37.5094 8.35017 37.1192 8.27265 36.7252 8.27275C36.3312 8.27284 35.9411 8.35053 35.5771 8.5014C35.2132 8.65226 34.8825 8.87334 34.6039 9.152L23.9999 19.758L13.3939 9.152C13.1173 8.86534 12.7864 8.63664 12.4205 8.47925C12.0545 8.32185 11.6609 8.23891 11.2626 8.23526C10.8642 8.23161 10.4692 8.30733 10.1004 8.458C9.73166 8.60867 9.3966 8.83127 9.11479 9.11281C8.83298 9.39436 8.61006 9.72921 8.45904 10.0978C8.30803 10.4664 8.23194 10.8614 8.23521 11.2598C8.23848 11.6581 8.32105 12.0518 8.4781 12.4179C8.63516 12.784 8.86354 13.1151 9.14994 13.392L19.7599 24L9.15194 34.608C8.86554 34.8849 8.63716 35.216 8.4801 35.5821C8.32305 35.9482 8.24048 36.3419 8.23721 36.7402C8.23394 37.1386 8.31003 37.5336 8.46104 37.9022C8.61206 38.2708 8.83498 38.6056 9.11679 38.8872C9.3986 39.1687 9.73366 39.3913 10.1024 39.542C10.4712 39.6927 10.8662 39.7684 11.2646 39.7647C11.6629 39.7611 12.0565 39.6782 12.4225 39.5208C12.7884 39.3634 13.1193 39.1347 13.3959 38.848L23.9999 28.244Z" fill="white" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });