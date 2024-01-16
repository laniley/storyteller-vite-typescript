export const remote = require('@electron/remote')
export const app = remote.app
export const fs = require('fs');
export const path = require('path');

export const dataPath = app.getPath('userData');
export const filePath = path.join(dataPath, 'config.json');

interface StorageData {
  data: {
    path: string,
    theme: string
  }
};

class Storage {

  _current_content = {
    data: {
      path: "",
      theme: "",
      workspace: "",
    }
  }

  get(filePath:string) {
    this._current_content = JSON.parse(fs.readFileSync( filePath, { encoding: 'utf8', flag: 'r' } ))
    return this._current_content
  }

  saveTheme(theme:string) {
    let new_content:StorageData = Object.assign({}, this._current_content, { data: {
      theme: theme
    }});
    fs.writeFileSync( filePath, JSON.stringify(new_content))
  }
}

export const storage = new Storage();