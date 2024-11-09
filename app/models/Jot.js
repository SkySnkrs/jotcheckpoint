import { generateId } from "../utils/GenerateId.js"

export class Jot {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.body = data.body || ''
    this.color = data.color || '#133E87'
    this.dateCreated = data.dateCreated == undefined ? new Date() : new Date(data.dateCreated)
    this.updatedDate = data.updatedDate == undefined ? new Date() : new Date(data.updatedDate)
  }

  get jotBodyTemplate() {
    return `
        <div onclick="app.JotController.selectActiveJot('${this.id}')" class="row mt-4 mx-2 clickable-element jotBorder" type="button" style="border-color: ${this.color};">
            <div class="col-7 mb-2 text-start fw-bold">
              <span>${this.title}</span>
            </div>
            <div class="col-5 mb-2 text-end fw-bold">
              <span>${this.shortCreatedTime}</span>
            </div>
            <div class="noteBody">
              <p>${this.body}</p>
            </div>
        </div>
        `
  }

  get activeJotTemplate() {
    return `
    <form onsubmit="app.JotController.saveActiveJots()">
      <h3 class="p-4" style="color: ${this.color};">${this.title}</h3>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-6 pl-4">
          <p>Created: ${this.shortCreatedTime}</p>
          <p>Last Updated: ${this.UpdatedAt}</p>
        </div>
        
        <div class="col-4 text-end">
          <button class="btn btn-success text-center" type="submit">Save Jot <span
          class="mdi mdi-download-box"></span></button>
          <button onclick="app.JotController.deleteJot('${this.id}')" class="btn btn-danger text-center" type="button">Delete Jot <span class="mdi mdi-trash-can"></span></button>
        </div>
      </div>
      <div class="p-4">
        <textarea name="body" id="jotBody" class="w-100 textInput form-control" style="border: 3px solid ${this.color};"
        rows="14">${this.body}</textarea>
      </div>
    </form>
    `
  }

  get originalActivePage() {
    return `
    <div class="center-content">
      <h3 class="mb-3 fw-bold">Create Or Select A Jot To Begin Jotting!</h3>
      <img class="imageFit" src="assets/img/noteImage.png" alt="">
    </div>
    `
  }
  get shortCreatedTime() {
    return this.dateCreated.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit', })
  }

  get UpdatedAt() {
    return this.updatedDate.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }
}