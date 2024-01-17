export const remote = require('@electron/remote')
export const app = remote.app
export const fs = require('fs');
export const path = require('path');

export const dataPath = app.getPath('userData');
export const filePath = path.join(dataPath, 'config.json');

import { initialState as initialProjectState } from './../app/store/project/project.model'

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

  createProject(title_of_new_project:string) {
    this.load()
    let projectPath = path.join(this._current_content.data.workspace, title_of_new_project);
    // create new project folder if it does not exist yet
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath);
    }
    let src_path = path.join(projectPath, "src")
    if (!fs.existsSync(src_path)) {
      fs.mkdirSync(src_path);
    }
    let project_json_path = path.join(src_path, "project.json")
    fs.writeFile(project_json_path, JSON.stringify(initialProjectState), (err:any) => {
      if (err) throw err;
    });
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
}

export const storage = new Storage();