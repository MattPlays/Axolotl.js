# Axolotl.js
 Axolotl.js utilizes the [AxolotlAPI](https://theaxolotlapi.netlify.app) to return pictures and facts about Axolotls

# Installation
```bash
npm i axolotl.js
```

# Usage
```javascript
const Axolotlt = require("axolotl.js")
Axolotl().then(({url, facts}) => {
    console.log(url, facts)
});
// Or
(async () => {
    let {url, facts} = await Axolotl();
    console.log(url, facts)
})();
```

# License
Axolotl.js is Licensed under the [MIT License](https://github.com/MattPlays/Axolotl.js/blob/main/LICENSE)