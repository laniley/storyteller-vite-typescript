export const remote = require('@electron/remote')
export const app = remote.app
export const fs = require('fs');
export const path = require('path');

export const dataPath = app.getPath('userData');
export const filePath = path.join(dataPath, 'config.json');

interface StorageData {
  data: {
    theme: string,
    workspace: string,
    current_project: string
  }
};

class Storage {

  _current_content = {
    data: {
      theme: "",
      workspace: "",
      current_project: "",
    }
  }

  load() {
    let result = fs.readFileSync( filePath, { encoding: 'utf8', flag: 'r' } )

    if(result) {
      try {
        this._current_content = JSON.parse(fs.readFileSync( filePath, { encoding: 'utf8', flag: 'r' } ))
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

  getProjects(state:any) {
    let projects: Project[] = [];
    fs.readdirSync(filePath).forEach((project: Project) => {
			projects.push({ 
        name: project, 
        path: path.join(filePath, project),
        isCurrentlyOpen: state.appState.path === path.join(filePath, project)
      });
      return projects;
		});
  }

  saveTheme(theme:string) {
    this.load()
    Object.assign(this._current_content.data, { theme: theme });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }

  saveWorkspace(path:string) {
    console.log(path)
    this.load()
    Object.assign(this._current_content.data, { workspace: path });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }
}

export const storage = new Storage();