const express = require("express");
const app = express();
const port = 8000;


// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');

// we can create a function to return a random / fake "User"
const createUser = () => {
    const user = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
    return user;
};


//  function to generate a random Company Obj
const createCompany = () => {
    const company = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
    return company;
};

// Create an api route "/api/users/new" that returns a new user
app.get('/api/users/new', (req, res) => {
    const user = createUser();
    res.json(user);
});


// Create an api route "/api/companies/new" that returns a new company
app.get('/api/companies/new', (req, res) => {
    const company = createCompany();
    res.json(company);
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );