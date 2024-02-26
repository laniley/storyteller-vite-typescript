const remote = require('@electron/remote')
const app = remote.app
const fs = require('fs');
const path = require('path');

const config_file_name = '.storyteller.workspace.config.json'

class WorkspaceAPI {

  _current_content = {
    current_project_title: ""
  }

  get(workspacePath:string) {
    this.load(workspacePath)
    return this._current_content
  }

  load(workspacePath:string) {
    let filePath = path.join(workspacePath, config_file_name)
    if(!fs.existsSync(filePath)) {
      console.log("File " + filePath + " does not exist yet.")
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

  save(workspacePath:string, state:Workspace) {
    let filePath = path.join(workspacePath, config_file_name)
    fs.writeFileSync( filePath, JSON.stringify(state))
  }

  saveCurrentProjectTitle(workspacePath:string, title:string) {
    let filePath = path.join(workspacePath, config_file_name)
    console.log(filePath)
    Object.assign(this._current_content, { current_project_title: title });
    fs.writeFileSync(filePath, JSON.stringify(this._current_content))
  }

  getProjects(appState:AppState, workspace:Workspace) {
    let projects: Project[] = [];
    fs.readdirSync(appState.workspace).forEach((project_title: string) => {
      let current_path = path.join(appState.workspace, project_title)
      if(fs.lstatSync(current_path).isDirectory()) {
        projects.push({ 
          title: project_title,
          path: current_path,
          isCurrentlyOpen: project_title === workspace.current_project_title,
          cover: '',
          route: { current: 'script' }
        }); 
      }
    });
    return projects;
  }
}

export const storage = new WorkspaceAPI();