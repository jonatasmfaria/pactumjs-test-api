
/* Documentação dos parâmetros: https://mochajs.org/#command-line-usage,
                                https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js
   Documentação do relatório mocha: https://github.com/adamgruber/mochawesome-report-generator */
module.exports = {
  reporter: 'node_modules/mochawesome',
  'reporter-option': [
    'json=true', 'reportDir=report',
    'reportFilename=api-test', 'autoOpen=true',
    'reportPageTitle=Page Title API Test', 'reportTitle=Title Report',
    'charts=true'
  ],
  timeouts: 20000,
  slow: 700, //https://mochajs.org/#test-duration
  colors: true,
  diff: true,
  exit: true,
  'inline-diffs': true,
  spec: ["tests/**/*.test.js"]
}