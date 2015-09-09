import keyMirror from 'keymirror';

let settings = {};

const keys = keyMirror({
  SHAREPOINT_ACCESS_TOKEN: null,
  RETURN_URL: null
});

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
  sharePointToken: {
    get: ()=> storage.getItem(keys.SHAREPOINT_ACCESS_TOKEN),
    set: (value)=> setOrRemove(keys.SHAREPOINT_ACCESS_TOKEN, value)
  },
  returnUrl: {
    get: ()=> storage.getItem(keys.RETURN_URL),
    set: (value)=> setOrRemove(keys.RETURN_URL, value)
  }
});

export default settings;
