let settings = {};
const O365_ACCESS_TOKEN = 'O365_ACCESS_TOKEN';

const storage = sessionStorage;

function setOrRemove(key, val) {
  if (val === null) {
    storage.removeItem(key);
  }
  else {
    storage.setItem(key, val);
  }
}

Object.defineProperties(settings, {
  o365Token: {
    get: ()=> storage.getItem(O365_ACCESS_TOKEN),
    set: (value)=> setOrRemove(O365_ACCESS_TOKEN, value)
  }
});

export default settings;
