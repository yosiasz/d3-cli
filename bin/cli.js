#!/usr/bin/env node
var program = require('commander');

program
 .version('0.0.1', '-v, --version')
 .description('d3 viz scaffolding utility')
 .option('-ct, --chartype <charttype>', 'The chart type to use')
 .option('-ds, --datasource <datasource>', 'The data source to use: api url, local file with path')
 .action(function(file) {
   console.log('charttype: %s pass: %s file: %s',
       program.chartype, program.datasource, file);
 })
 .parse(process.argv);
