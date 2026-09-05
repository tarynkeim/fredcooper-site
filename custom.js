/* =========================================================
   GALLERY AUTOPLAY
   ========================================================= */

setInterval(function () {
  var nextButton = document.querySelector('.ViewToggle .next');

  if (nextButton) {
    nextButton.click();
  }
}, 15000);


/* =========================================================
   LIFE ON EARTH NAVIGATION TEXT
   ========================================================= */

function addLifeText() {

  var elements = document.querySelectorAll(
    '.navTop span, .navTop a, .Nav span, .Nav a'
  );

  for (var i = 0; i < elements.length; i++) {

    var item = elements[i];

    if (item.classList.contains('life-before') ||
        item.classList.contains('life-after')) {
      continue;
    }

    if (item.textContent.trim() !== 'LIFE ON EARTH') {
      continue;
    }

    var parent = item.parentNode;

    if (!parent) {
      continue;
    }

    if (!parent.querySelector('.life-before')) {
      item.insertAdjacentHTML(
        'beforebegin',
        '<span class="life-before">Thoughts Regarding </span>'
      );
    }

    if (!parent.querySelector('.life-after')) {
      item.insertAdjacentHTML(
        'afterend',
        '<span class="life-after">,<span>Developed During My 70+ Years</span><span>Beginning December 13th, 1949</span></span>'
      );
    }
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
