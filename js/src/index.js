

const WeexTest = {
  create(options, callbackID) {

  }
};

if(window.Vue) {
  weex.registerModule('WeexTest', WeexTest);
}

function init(weex) {
  weex.registerApiModule('WeexTest', WeexTest, meta);
}

module.exports = {
  init
};
