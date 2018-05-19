//==============================================================
// mop4js.js
// Project: 'mop4js' npm package
// Purpose: MOP (Meta Object Protocol) for Javascript
// Note:    this is an early stage prototype 
// URL:     https://www.npmjs.com/package/mop4js
//-----------------------------------------------------------------------------
// Inspired by: 
// - JOOP:  https://www.sitepen.com/blog/2008/03/18/javascript-metaclass-programming/
// - MOOSE: https://en.wikipedia.org/wiki/Moose_(Perl)
//=============================================================================
//--------------------------------------------------------------
// Code sample:
// //---------- Create '$$Interface' metaclass ----------
// var $$Interface = new $$MetaClass({ 'name': "$$Interface" });
// console.log($$Interface);
//
// //---------- Create '$ILogger' interface class ----------
// var $ILogger = new $$Interface({ 'name': "$ILogger"});
// console.log($ILogger);
//
// /---------- Instanciate '$ILogger' interface class ----------
// var logger = new $ILogger();
// console.log(logger);
//--------------------------------------------------------------
// Notes:
//   - Global scope '$$MetaClass':
//     - Is an IIFE MetaClass factory
//	   - Is the Singleton instance of '$$MetaMetaClass' ('$$MetaMetaClass_singleton', encapsulated within IIFE)
//--------------------------------------------------------------
// Inspired by: 
// JOOP:            https://www.sitepen.com/blog/2008/03/18/javascript-metaclass-programming/
//
// A selection of interesting papers:
// const, let, var: http://putaindecode.io/fr/articles/js/es2015/const-let-var/
// https://www.dotprogs.com/function-iife-usages-javascript/
// https://stackoverflow.com/questions/1535631/static-variables-in-javascript #485
// IIFE: // https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
//==============================================================
'use strict';
/*jshint node: true*/
/*jshint esversion: 6*/

// define is a function that binds "constants" to an object (commonly exports)
var constants = require("node-constants")(exports);

var $$ = constants({"META_META_CLASS": '$$MetaMetaClass', "META_CLASS": '$$MetaClass'});

var $$MetaClass = (function(...args) { 
    var $$MetaClass_this = this;
	
	var getArg = function(instance, arg_name, ...args) {
        //console.log("$$.getArg args: " + args);
	    if (args == undefined || args.length==0)
		    return null;
	
  	    if (args!= undefined  &&   args.length>=1)
	    {    
            for (var i=0; i<args.length; i++)
            { 
                var arg = args[i];
		        //console.log("getArg arg[" + i + "] = " + arg);
  	            if (arg_name in arg)
		            return arg[arg_name];   	  
	        } 
	        return null;
        }
    }; // getArg()
				
	//------------------------------ $$MetaMetaClass ------------------------------
    var $$MetaMetaClass_var = class {	
	    constructor(...args) {	
			this.name = init_klass(this, ...args);	
			//console.log("meta_meta_klass>  name: " + this.name); 
			var $$MetaMetaClass_this = this;
					
            var $$MetaMetaClass = class {
			    constructor(...args) {
				    var name = init_klass(this, $$MetaMetaClass_this, ...args);
					if (name == null)
					{
						if ($$MetaMetaClass_this.instance_count == undefined)
							$$MetaMetaClass_this.instance_count = 0;
						name = $$MetaMetaClass_this.name + "_" + $$MetaMetaClass_this.instance_count++;
					}					
					this.name = name;				
                    //console.log("---------- name_value: " + name_value);
                    //console.log(">>      name: " + this.name); 
                    var meta_meta_klass_this = this;					
			
					var meta_klass = class {
						constructor(...args) {
							var name = init_klass(this, meta_meta_klass_this, ...args);
					        if (name == null)
					        {
						        if (meta_meta_klass_this.instance_count == undefined)
							        meta_meta_klass_this.instance_count = 0;
						        name = meta_meta_klass_this.name + "_" + meta_meta_klass_this.instance_count++;
					        }					
					        this.name = name;	
					
							//console.log(">>      name: " + this.name);								
                            var meta_klass = this;								
								
						    var klass = class {
							    constructor(...args) {
								    var name = init_klass(this, meta_klass, ...args);
							        if (name == null)
								    {
										if (meta_klass.instance_count == undefined)
											meta_klass.instance_count = 0;
										name = meta_klass.name + "_" + meta_klass.instance_count++;
									}											
									this.name = name;
									
									this.toString = function() {
							            //return " ----> klass: " + this.name;
								        return "{ name: '" + this.name + "',  klass: '" + meta_klass.name + "' }";
						            }; // klass.toString()
						            this.inspect = function() {
							            return this.toString();
						            }; // klass.inspect()
									//console.log(">>      name: " + this.name); 
							    } // 'klass' constructor	
						    }; // 'klass' class variable definition
								
						    Object.defineProperty(klass, 'name', {value: this.name});			
						    klass.toString = function() {
							    //return " ----> klass: " + this.name;
								return "{ name: '" + this.name + "',  klass: '" + meta_meta_klass_this.name + "' }";
						    }; // klass.toString()
						    klass.inspect = function() {
							    return this.toString();
						    }; // klass.inspect()
								 
					        return klass;
					    } // meta_klass constructor	
					}; // meta_klass
						
                    Object.defineProperty(meta_klass, 'name', {value: this.name});						
		            meta_klass.toString = function() {
                        return "{ name: '" + this.name + "',  klass: '" + $$.META_CLASS + "' }";
                    }; // meta_klass.toString()
                    meta_klass.inspect = function() {
                        return this.toString();
			        }; // meta_klass.inspect()						
				
				    return meta_klass;
				} // meta_meta_klass constructor	
			}; // 'meta_meta_klass' class variable definition
				
            Object.defineProperty($$MetaMetaClass, 'name', {value: $$.META_CLASS});				
		    $$MetaMetaClass.toString = function() {
                return " --> meta_klass: " + this.name;
            }; // meta_meta_klass.toString()
            $$MetaMetaClass.inspect = function() {
                return this.toString();
			}; // meta_meta_klass.inspect()
						
            //console.log("----------- return $$MetaMetaClass");			
			return $$MetaMetaClass;
		} // $$MetaMetaClass_var constructor
	}; // set '$$MetaMetaClass_var' class variable
	//------------------------------ $$MetaMetaClass
	
	var init_klass = function(instance, klass, ...args) {
		var name = getArg(instance, 'name', ...args);
		
		var msg = null;
		if (klass.name == $$.META_META_CLASS)
		{
			//msg = "\n>> META META Klass constructor";
		    msg = null;
		}
		else if (klass.name == $$.MMETA_CLASS)
			msg = ">> Meta Klass constructor";
		else if (name != null  ||  klass.constructor.name == $$.META_CLASS)
		    msg = ">> Klass constructor";
		else
            msg = ">> Instance constructor";
		
		if (msg != null)
		    console.log(msg);
		
		/*
		if (klass.name != null)
		    console.log("init_klass:   klass = " + klass.name);
		
		if (name != null)
		    console.log("init_klass:   name  = " + name);
		*/
		
		//console.log("******** " + klass.constructor.name);
		
		//console.log(" ==== init_klass: name: " + name);
		if (name != null)
			instance.name = name;
		else
			instance.name = instance.constructor.name;
		return name;
	}; // init_klass()
	
	
	Object.defineProperty($$MetaMetaClass_var, 'name', {value: $$.META_META_CLASS});
	$$MetaMetaClass_var.toString = function() {
        return " ----> meta_meta_klass.toString: " + this.name;
    }; // meta_klass.toString()
    $$MetaMetaClass_var.inspect = function() {
        return this.toString();
	}; // meta_klass.inspect()

	
    // returned once (when IIFE is evaluated)
    var $$MetaMetaClass_singleton = new $$MetaMetaClass_var({ 'name': $$.META_META_CLASS}); 
	return $$MetaMetaClass_singleton; 
})(); // $$MetaClass

exports.$$MetaClass = $$MetaClass;