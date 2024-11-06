import { generateId } from "../utils/GenerateId.js"


export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    // this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl || 'Not listed' // works as a sort of default if not milage was listed
    // NOTE ternary statement
    // condition ?  if true : if false
    this.listedAt = data.listedAt == undefined ? new Date() : new Date(data.listedAt)
  }


  get Card() {
    return `
         <div class="col-md-4">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               ${this.bedrooms} ${this.bathrooms} ${this.year}
             </p>
             <p class="mb-0">
               ${this.sqft}
             </p>
             <p class="mb-0">
               ${this.price}
             </p>
             <p class="mb-0">
               ${this.description}
             </p>
             <p class="mb-0">
               ${this.FormattedTime}
             </p>
             <div>
              <button onclick="app.CarsController.deleteCarListing('${this.id}')" class="btn btn-danger w-100" title="Delete ${this.year} ${this.sqft} ${this.bedrooms} ${this.bathrooms}"><i class="mdi mdi-delete-empty"></i></button>
             </div>
           </div>
         </div>
       </div>
    `
  }

  get FormattedTime() {
    return this.listedAt.toLocaleDateString('en-us', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric', minute: '2-digit', second: "2-digit" })
  }
}