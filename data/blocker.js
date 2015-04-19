self.port.on("block", function() {
  document.title="Zero Internet - No Internet for you";
  var bodyEl = document.createElement("body");
  bodyEl.innerHTML = '<div id="blocked"><p>Sorry. You are on Zero Internet. You cannot browse the Internet. You are allowed to browse only the websites that I allow you to.</p><p>If you would rather not have this experience, please uninstall the Zero Internet addon and if you care about others, raise your voice against zero-rating.</p></div>';
  document.documentElement.appendChild(bodyEl);
  window.stop();
});
