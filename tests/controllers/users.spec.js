import chai from 'chai';
const { expect } = chai;
import { BaseTest } from '../index.spec.js';


describe('Test the users feature',  function() {
    let userId;
    beforeEach(async function () {
        const createdUser = {
            firstName: "Aretha",
            lastName: "Kayongo"
            }

        const newUser = await BaseTest.post('users').send(createdUser);
        userId = newUser.body.createUser.id
    });
        
    it('Should get all users', async () => {
        const response = await BaseTest.get('users').send({});
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');

    });

    it('Should get one user with an id', async () =>{
        const response = await BaseTest.get(`users/${userId}`).send({})
        expect(response.status).to.equal(200);
        expect(response.body.firstName).to.equal("Aretha")
        expect(response.body.id).to.equal(userId)


    })
    it('Should edit a users', async () => {
        const response = await BaseTest.patch(`users/${userId}`).send({
            firstName: "Agatha"
        });
        expect(response.status).to.equal(201);

    });
    it('Should create a user', async () => {
        const response = await BaseTest.post('users').send({
            firstName: "Aretha",
            lastName: "Kayongo"
        });
        expect(response.status).to.equal(201);
        expect(response.body).to.include({message: "user with the name Aretha added to the database!"})
    });

    // it('Should delete a user', async ()=>{
    //     const response = await BaseTest.delete(`users/${userId}`).send({})
    //     expect(response.status).to.equal(204)
    // })
});
