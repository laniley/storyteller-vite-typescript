const remote = require('@electron/remote')
const app = remote.app
const fs = require('fs');
const path = require('path');

export const dataPath = app.getPath('userData');
export const filePath = path.join(dataPath, 'config.json');

class AppStateAPI {

  _current_content = {
    data: {
      theme: "",
      workspace: "",
      current_project_title: "",
      current_project_path: ""
    }
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

  getProjects(state:any) {
    let projects: Project[] = [];
    fs.readdirSync(state.workspace.path).forEach((project_title: string) => {
			projects.push({ 
        title: project_title,
        path: path.join(state.workspace.path, project_title),
        isCurrentlyOpen: state.appState.path === path.join(state.workspace.path, project_title),
        cover: ''
      }); 
		});
    return projects;
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

  saveCurrentProjectTitle(title:string) {
    this.load()
    Object.assign(this._current_content.data, { current_project_title: title });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }

  saveCurrentProjectPath(path:string) {
    this.load()
    Object.assign(this._current_content.data, { current_project_path: path });
    fs.writeFileSync( filePath, JSON.stringify(this._current_content))
  }
}

export const storage = new AppStateAPI();