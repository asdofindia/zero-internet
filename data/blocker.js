self.port.on("block", function() {
  var bodyEl = document.createElement("body");
  document.documentElement.appendChild(bodyEl);
  window.stop();
});
