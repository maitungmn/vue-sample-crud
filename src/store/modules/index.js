const files = require.context(".", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  if (key === "./index.js") return;

  const keyName = key.replace(/(\.\/|\.js)/g, "");
  const moduleContent = files(key).default;

  modules[keyName] = moduleContent;
});

export default modules;
