var tag = "p";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.mozilla.org",
  contentScriptWhen: "start",
  contentScriptFile: data.url("blocker.js"),
  onAttach: function(worker) {
    worker.port.emit("block");
  }
})
