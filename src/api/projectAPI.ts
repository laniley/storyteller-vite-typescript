const remote = require('@electron/remote')
const app = remote.app
const fs = require('fs');
const path = require('path');

import { initialState as initialProjectState } from '../app/store/project/project.model'

class ProjectAPI {

  save(projectPath:string, projectState:Project) {
    console.log("saving project...")
    let content = JSON.stringify(projectState);
    console.log(content)
    if (!content) {
      console.error("no content");
      return;
    }
    if (!projectPath) {
      console.error("path: " + projectPath);
      return;
    }
    let err = fs.writeFileSync(path.join(projectPath, "src", "project.json"), content)
    if (err) {
      console.error("FAILURE: ", err)
    }
    else {
      console.log("Saved to " + projectPath)
    }
  }

  createProject(workspace: string, title_of_new_project:string) {
    let projectPath = path.join(workspace, title_of_new_project);
    // create new project folder if it does not exist yet
    if (!fs.existsSync(projectPath)) {
      console.log('Project path ' + projectPath + ' gets created...')
      fs.mkdirSync(projectPath);
    }
    let src_path = path.join(projectPath, "src")
    if (!fs.existsSync(src_path)) {
      console.log('src directory gets created...')
      fs.mkdirSync(src_path);
    }
    let project_json_path = path.join(src_path, "project.json")
    let project_data = Object.assign({}, initialProjectState, { title: title_of_new_project })
    fs.writeFile(project_json_path, JSON.stringify(project_data), (err:any) => {
      if (err) throw err;
    });
  }

  storytellerProjectFileExists(projectPath:string) {

    let fileNameExists = false;
  
    fs.readdirSync(projectPath).forEach((fileName: string) => {
      if (fileName == "project.json") fileNameExists = true;
    });
  
    return fileNameExists;
  }

  getProjectData(workspace:string, title:string) {
    let projectPath = path.join(workspace, title);
    if (fs.existsSync(projectPath)) {
      let src_path = path.join(projectPath, "src")
      if(this.storytellerProjectFileExists(src_path)) {
        console.log("project.json file exists");
				console.log("reading project.json file...");
        let result = fs.readFileSync(path.join(src_path, 'project.json'))
        if(result) {
          try {
            return JSON.parse(result)
          } catch (e) {
            console.log("JSON.parse of " + title + " failed.")
          }
        }
        else {
          console.log('Config file of' + title + ' is empty.')
        }
      }
      else {
        // TO DO: Show UI dialog that directory is not empty, ask user if it should be used for a new project
				console.log("project.json file does not exist");
      }
    } 
    else {
      console.log("Path " + projectPath + " is not valid!")
    }
  }
}

export const projectAPI = new ProjectAPI();