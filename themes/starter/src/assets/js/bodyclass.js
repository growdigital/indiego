/* ==========================================================================
   Body Class
   ========================================================================== */

/**
 * Adds class of 'js' to body tag if JS working and once DOM loaded
 */

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.remove("no-js");
  document.body.classList.add("js");
});
