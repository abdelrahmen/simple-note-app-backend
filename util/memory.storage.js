let MemoryStorage = require("memorystorage");
// here, the MemoryStorage function is available
let store = new MemoryStorage("note-app");

exports.getKeys = (store) => {
  let keys = [];
  for (let i = 0; i < store.length; i++) {
    let key = store.key(i);
    keys.push(key);
  }
  return keys;
};

exports.getValues = (store) => {
  console.log(`store.length: ${store.length}`);
  let values = [];
  for (let i = 0; i < store.length; i++) {
    let key = store.key(i);
    let value = store.getItem(key);
    values.push(value);
  }
  return values;
};

exports.store = store;
