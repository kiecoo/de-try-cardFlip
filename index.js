// index.js

var makeGitterURL1 = require('./make-gitter-url.js')


module.exports = makeGitterChatbox1



 function makeGitterChatbox1 (username) {
    return bel`
    <div class=${css.cardContainer_hover}>
      <div class=${css.cardGitterChat} ><iframe class=${css.iframe} src=${ gitter}></iframe></div>
 `
  }
