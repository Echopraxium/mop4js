//=============================================================================
// test.js
// Project: 'mop4js' npm package
// Purpose: Unit Test for 'mop4js' (Meta Object Protocol for Javascript)
// Note:    this is an early stage prototype 
// URL:     https://www.npmjs.com/package/mop4js
//=============================================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/
//==================== start of test.js ====================
const $$MetaClass = require('./src/mop4js.js').$$MetaClass;

console.log("====================================================");
console.log("========== Unit Test for 'mop4js' package ==========");
console.log("====================================================");

console.log("\n---------- MetaClass Factory ----------");
//console.log($$MetaClass);

var $$Class = new $$MetaClass({ 'name': "$$Class"});
console.log($$Class + "\n");

var $$Interface = new $$MetaClass({ 'name': "$$Interface" });
console.log($$Interface + "\n");

var $$Implementation = new $$MetaClass({ 'name': "$$Implementation" });
console.log($$Implementation);
console.log("---------- MetaClass Factory\n\n");


console.log("---------- Class Factory ----------");
var $ILogger = new $$Interface({ 'name': "$ILogger"});
console.log($ILogger + "\n");

var $UnnamedInterfaceClass = new $$Interface();
console.log($UnnamedInterfaceClass);
console.log("---------- Class Factory\n\n");


console.log("---------- Object instantiation and numbering ----------");
var logger_1 = new $ILogger();
console.log(logger_1 + "\n");

var logger_2 = new $ILogger();
console.log(logger_2);
console.log("---------- Object instantiation and numbering\n\n");


console.log("---------- Check: no further instanciation... ----------");
try 
{
  var o = new logger_1();	
} 
catch(e)
{
  var first_line = String(e).split('\n')[0];
  console.log(first_line + "\n...");	
}
console.log("---------- Check: no further instanciation...");

return;
//================================================================================================