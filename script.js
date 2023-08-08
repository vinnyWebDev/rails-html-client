const displayTenant = document.querySelector("#display-data")
const displayTicket = document.querySelector("#display-data-tickets")

//GET DATA ON TENANTS
async function getTenantData(){
   
    let url = "http://localhost:3000/tenants"
    let response = await fetch(url, {headers: {"Accept": "application/json"}})
    let myData = await response.json();
    return myData;
}


async function displayTenantJson(){
    const data = await getTenantData();
    let displayData = data.map((object) =>{
        console.log(object)
        const {apartment, first_name, last_name, phone, email} =  object;

        return `
        <div class="container">
            <p>Apartment: ${apartment} </p>
            <p>First Name: ${first_name}</p>
            <p>Last Name: ${last_name}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
        </div>
        `

    })

    displayTenant.innerHTML = displayData;
}

//GET DATA ON TICKETS
async function getTicketData(){
   
    let url = "http://localhost:3000/tickets"
    let response = await fetch(url, {headers: {"Accept": "application/json"}})
    let myData = await response.json();
    return myData;
}


async function displayTicketJson(){
    const data = await getTicketData();
    let displayData = data.map((object) =>{
        console.log(object)
        const {title, body, completed} =  object;

        return `
        <div class="container">
            <p>Ticket: ${title} </p>
            <p>Body: ${body}</p>
            <p>Completed: ${completed}</p>
        </div>
        `

    })

    displayTicket.innerHTML = displayData;
}

displayTenantJson();
displayTicketJson();