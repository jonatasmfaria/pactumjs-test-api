// // test.js
// const { spec, reporter } = require('pactum'),
//     psc = require('pactum-swagger-coverage')

// describe('HealthCheck', () => {

//     before(() => {
//         // name of the report file - defaults to "swagger-cov-report.json"
//         psc.file = 'report-name.json';

//         // folder path for the report file - defaults to "./reports"
//         psc.path = './reports-path';

//         // Swagger json url of the server - defaults to ""
//         psc.swaggerJsonUrl = "http://localhost:3010/api/server/v1/json";

//         // Swagger Yaml file path - defaults to ""
//         psc.swaggerYamlPath = './testObjects/swagger.yaml';

//         reporter.add(psc)
//     })

//     /**
//      * Ponta 
//      * spec() método retornará uma instância de objeto de especificação que expõe todos os métodos para construir uma solicitação.
//      */
//     const _spec = spec()

//     it('get /pet/findByStatus', async () => {
//         _spec.get('https://petstore.swagger.io/v2/pet/findByStatus')
//     })

//     it('1 - should get status available with StatusCode 200', async () => {
//         await _spec.withPathParams('status', 'available')
//             .expectStatus(200)
//     })

//     it('2 - should get status pending with StatusCode 200', async () => {
//         await _spec.withPathParams('status', 'pending')
//             .expectStatus(200)
//     })

//     it('3 - should get status sold with StatusCode 200', async () => {
//         await _spec.withPathParams('status', 'sold')
//             .expectStatus(200)
//     })

//     after(() => {
//         return reporter.end()
//     })
// })

// /**
//  * PERIGO
//  * Métodos normais de afirmação como ou só funcionarão se chamados antes do
//  * método. expectStatus, expectJson e toss
//  */
