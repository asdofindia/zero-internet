var tag = "p";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  exclude: ["*.internet.org", "*.facebook.com", "*.fb.com", "*.aajtak.in", "*.intoday.in", "*.indiatoday.in", "*.m.accuweather.com", "*.amarujala.com", "*.apspeaks.com", "*.apspeaks-web.herokuapp.com", "*.babajob.com", "*.babycenter.com", "*.mobilemamaalliance.org", "*.in.mama.hub.unicore.io", "*.bbc.com", "*.bing.com", "*.bhaskar.com", "*.dictionary.com", "*.espncricinfo.com", "*.cricinfo.com", "*.factsforlifeglobal.org", "*.factsforlife.org", "*.girleffect.org", "*.hub.unicore.io", "*.hungama.com", "*.202.87.41.147", "*.ibnlive.com", "*.in.com", "*.empowerwomen.org", "*.220.226.104.36", "*.m.jagran.com", "*.m.jagranjosh.com", "*.m.maalaimalar.com", "*.manoramanews.com", "*.messenger.com", "*.olx.in", "*.220.226.188.56", "*.rmlglobal.com", "*.blood.is", "*.reference.com", "*.m.wikipedia.org", "*.m.wikihow.com"],
  contentScriptWhen: "start",
  contentScriptFile: data.url("blocker.js"),
  onAttach: function(worker) {
    worker.port.emit("block");
  }
})
