setInterval(function () {
  var nextButton = document.querySelector('.ViewToggle .next');

  if (nextButton) {
    nextButton.click();
  }
}, 15000);


function addLifeText() {
  var spans = document.querySelectorAll('.navTop span');
  var lifeSpan = null;

  for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent.trim() === 'LIFE ON EARTH') {
      lifeSpan = spans[i];
      break;
    }
  }

  if (!lifeSpan) {
    return;
  }

  var parent = lifeSpan.parentNode;

  if (!parent.querySelector('.life-before')) {
    lifeSpan.insertAdjacentHTML(
      'beforebegin',
      '<span class="life-before">Thoughts Regarding </span>'
    );
  }

  if (!parent.querySelector('.life-after')) {
    lifeSpan.insertAdjacentHTML(
      'afterend',
      '<span class="life-after">,<span>Developed During My 70+ Years</span><span>Beginning December 13th, 1949</span></span>'
    );
  }
}


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
