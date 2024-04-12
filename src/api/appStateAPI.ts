import { AppState } from "src/app/store/appState/appState.reducer";

const remote = require('@electron/remote')
const app = remote.app
const fs = require('fs');
const path = require('path');

export const dataPath = app.getPath('userData');
export const filePath = path.join(dataPath, 'config.json');

class AppStateAPI {

  _current_content = {
      route: "",
      theme: "",
      workspace: "",
  }

  load() {
    if(!fs.existsSync(filePath)) {
      return this._current_content
    }
    let result = fs.readFileSync( filePath, { encoding: 'utf8', flag: 'r' } )
    if(result) {
      try {
        this._current_content = JSON.parse(result)
      } catch (e) {
        console.log("JSON.parse of " + filePath + " failed.")
      }
    }
    else {
      console.log('Config file ' + filePath + ' is empty.')
    }
  }

  get() {
    this.load()
    return this._current_content
  }

  save(state:AppState) {
    fs.writeFileSync( filePath, JSON.stringify(state))
  }

  saveTheme(theme:string) {
    this.load()
    Object.assign(this._current_content, { theme: theme });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }

  saveWorkspace(path:string) {
    console.log(path)
    this.load()
    Object.assign(this._current_content, { workspace: path });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }
}

export const appStateAPI = new AppStateAPI();