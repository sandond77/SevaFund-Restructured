import axios from "axios";

export default {
  // Gets all projects
  getProjects: function() {
    return axios.get("/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/projects/" + id);
  },  
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/projects", projectData);
  },
  //User: donor/charity API
  registerDonor: function(formData) {
    return axios.post("/donor/register", formData);
  },
  registerCharity: function(formData) {
    return axios.post("/charity/register", formData);
  },
  donorAuth: function(credentials) {
    return axios.get("/donor/login", credentials);
  },
  charityAuth: function(credentials) {
    return axios.get("/charity/login", credentials);
  },
}
