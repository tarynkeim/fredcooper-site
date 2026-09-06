/* =========================================================
   GALLERY AUTOPLAY — DESKTOP ONLY
   ========================================================= */

setInterval(function () {
  if (window.innerWidth > 768) {
    var nextButton = document.querySelector('.ViewToggle .next');

    if (nextButton) {
      nextButton.click();
    }
  }
}, 15000);


/* =========================================================
   LIFE ON EARTH NAVIGATION TEXT
   ========================================================= */

function addLifeText() {
  var items = document.querySelectorAll('.navTop .group > span');

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (
      item.dataset.lifeEnhanced === 'true' ||
      item.textContent.trim() !== 'LIFE ON EARTH'
    ) {
      continue;
    }

    item.dataset.lifeEnhanced = 'true';

    item.innerHTML =
      '<span class="life-before">Thoughts Regarding </span>' +
      '<span class="life-title">LIFE ON EARTH</span>' +
      '<span class="life-after">,' +
        '<span>Developed During My 70+ Years</span>' +
        '<span>Beginning December 13th, 1949</span>' +
      '</span>';
  }
}


/* =========================================================
   INITIALIZE + WATCH FOR PHOTOSHELTER NAV REBUILDS
   ========================================================= */

function initLifeText() {
  addLifeText();

  var observer = new MutationObserver(function () {
    addLifeText();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLifeText);
} else {
  initLifeText();
}
