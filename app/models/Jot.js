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
        <div class="row mt-4 mx-2 clickable-element jotBorder" type="button" style="border-color: ${this.color};">
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
      <h3 class="p-4" style="color: black;">JOT NAME</h3>
      <div class="row d-flex align-items-center justify-content-around">
        <div class="col-4 pl-4">
          <p>Created: </p>
          <p>Last Updated: </p>
        </div>
        <div class="col-2"></div>
        <div class="col-4 text-end">
          <button class="btn btn-success text-center" type="submit">Save Jot <span
          class="mdi mdi-download-box"></span></button>
          <button class="btn btn-danger text-center">Delete Jot <span class="mdi mdi-trash-can"></span></button>
        </div>
      </div>
      <form onsubmit="" class="form-control p-4 textInput">
        <textarea name="body" id="jotBody" class="w-100 form-control" style="border: 3px solid black;"
        rows="16"></textarea>
      </form>
    `
  }
  get shortCreatedTime() {
    return this.dateCreated.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit', })
  }
}