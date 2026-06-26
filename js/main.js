/* Plumber Xavier — main.js
   Header scroll state · mobile nav · current year · Web3Forms AJAX submit */
(function () {
  "use strict";

  /* ---- Header shadow on scroll ---- */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Mobile nav ---- */
  var toggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setNav(!document.body.classList.contains("nav-open"));
    });
  }
  if (mobileNav) {
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) setNav(false);
  });
  // Reset nav state if resized back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && document.body.classList.contains("nav-open")) setNav(false);
  });

  /* ---- Contact form (Web3Forms) ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    var statusEl = document.getElementById("form-status");
    var submitBtn = document.getElementById("form-submit");
    var PLACEHOLDER_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

    function showStatus(type, msg) {
      if (!statusEl) return;
      statusEl.className = "form-status is-" + type;
      statusEl.textContent = msg;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var key = data.get("access_key");

      if (!key || key === PLACEHOLDER_KEY) {
        showStatus("error", "This form isn’t connected yet. Please call (917) 396-9796 — or finish the quick Web3Forms setup in the README.");
        return;
      }

      var original = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) { submitBtn.classList.add("is-loading"); submitBtn.textContent = "Sending…"; }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            showStatus("success", "Thanks! Your request was sent — we’ll be in touch shortly. Need us right now? Call (917) 396-9796.");
          } else {
            throw new Error(json.message || "Submission failed");
          }
        })
        .catch(function () {
          showStatus("error", "Sorry, something went wrong sending your request. Please call (917) 396-9796 and we’ll help right away.");
        })
        .finally(function () {
          if (submitBtn) { submitBtn.classList.remove("is-loading"); submitBtn.textContent = original; }
        });
    });
  }
})();
