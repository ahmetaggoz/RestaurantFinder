// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//elements import
import { elements } from './base.js';

import { executeStudentCrudOperations } from './models/mongo.js';

// import { config } from 'dotenv';

// config();
await executeStudentCrudOperations();
console.log(process.env.DB_URI);



elements.searchBtn.addEventListener("click", ()=>{
    let name = elements.searchBox.value;
    
    console.log(name)
})