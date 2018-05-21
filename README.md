# mop4js 
A toy project motivated by implementing [MOP](https://en.wikipedia.org/wiki/Metaobject) (_Meta Object Protocol_) for Javascript ES6.

A "learn by doing" prototype of MOP for Javascript. This project follows my quest of an _Interface class_ for Javascript (see [mixin-interface-api](https://www.npmjs.com/package/mixin-interface-api)). 

I now think that using _mixins_ is more a workaround than a "nice piece of cOOPcake". Recently, I remembered the _Meta Object Protocol_ and sought if it was applied / applicable to Javascript. I found [JOOSE](https://www.npmjs.com/package/joose) and [JOOP](https://github.com/pylover/joop), there is also a reference MOP for PERL: [MOOSE](https://metacpan.org/pod/distribution/Moose/lib/Moose/Manual.pod). 

Regarding MOP (Meta Object Protocol), this paradigm is there for a while, since 1991 at least in the ["The Art of the Metaobject Protocol"](https://en.wikipedia.org/wiki/The_Art_of_the_Metaobject_Protocol) book which describes [CLOS](https://en.wikipedia.org/wiki/Common_Lisp_Object_System), a MOP for [LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)) (CLOS is the acronym of _Common Lisp Object System_). 

My intent in this toy project is two-fold: 
* First: _"Give it a try"_ and share a naive implementation. 
* Second: promote the usage and knowledge of MOP among Javascript developers.   

## Release 0.0.10 changelog 
* Documentation update. 

## Release 0.0.9 changelog 
* First Prototype (_"Proof of concept"_) at a very early stage (the implementation is clumsy ATM). 

Please find below a code sample:

```javascript
const $$MetaClass = require('./src/mop4js.js').$$MetaClass;

var $$Interface = new $$MetaClass({ 'name': "$$Interface" }); // MetaClass Factory
console.log($$Interface + "\n");

var $ILogger = new $$Interface({ 'name': "$ILogger"}); // Class Factory
console.log($ILogger + "\n");

var logger = new $ILogger(); // Object instantiation and numbering
console.log(logger + "\n");
```

## References
* The Art of the Metaobject Protocol  
  https://en.wikipedia.org/wiki/The_Art_of_the_Metaobject_Protocol  
* GOOPS Manual: Metaobjects and the Metaobject Protocol  
  https://www.gnu.org/software/guile/docs/goops/Metaobjects-and-the-Metaobject-Protocol.html  
* JOOSE  
  https://www.npmjs.com/package/joose  
* MOOSE  
  https://metacpan.org/pod/distribution/Moose/lib/Moose/Manual.pod  
* What's wrong with extending the DOM  
  http://perfectionkills.com/whats-wrong-with-extending-the-dom/  