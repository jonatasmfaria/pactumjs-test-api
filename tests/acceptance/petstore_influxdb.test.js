// // test.js
// const { spec, reporter } = require('pactum'),
//     pir = require('pactum-influxdb-reporter')

// describe('HealthCheck', () => {

//     before(() => {
//         pir.url = '<influxdb url>'
//         pir.db = '<db name>'
//         pir.measurement = '<measurement name>'

//         /* custom tags like - build version */
//         pir.tags = { Version: '1.0.12' } // optional
//         reporter.add(pir)
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
