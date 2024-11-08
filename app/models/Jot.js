import { generateId } from "../utils/GenerateId.js"

export class Jot {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
        this.body = data.body
        this.color = data.color
        this.dateCreated = data.dateCreated == undefined ? new Date() : new Date(data.dateCreated)
        this.updatedDate = data.updatedDate == undefined ? new Date() : new Date(data.updatedDate)
    }

    get jotBodyTemplate() {
        return `
        <div class="row mt-4 mx-2 clickable-element jotBorder" type="button">
            <div class="col-6 mb-2 text-start fw-bold">
              <span>Note Title</span>
            </div>
            <div class="col-6 mb-2 text-end fw-bold">
              <span>Date Created</span>
            </div>
            <div class="noteBody">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, itaque porro reiciendis inventore
                aliquam nemo amet earum sint, molestias modi delectus nisi non possimus temporibus, alias ducimus quidem
                quos eveniet.</p>
            </div>
        </div>
        `
    }
}