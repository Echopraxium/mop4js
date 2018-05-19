# mop4js
A toy project motivated by implementing _MOP_ (_Meta Object Protocol_) for _Javascript_ ES6.

A "learn by doing" prototype of MOP for Javascript. This project follows my quest of an _Interface class_ for Javascript (see [mixin-interface-api](https://www.npmjs.com/package/mixin-interface-api)). 

As I now think that using _mixins_ is more a workaround than a _nice piece of OOP cake_, I remembered the _Meta Object Protocol_ and sought how it was applied / applicable to Javascript. I found [_JOOSE_](https://www.npmjs.com/package/joose) a successor of _JOOP_ which is itself inspired from especially _Perl's_ [_MOOSE_](https://metacpan.org/pod/distribution/Moose/lib/Moose/Manual.pod). 

Regarding MOP (Meta Object Protocol), this paradigm is there for a while, since 1991 at least in the _"The Art of the Metaobject Protocol"_ book which describes _CLOS_, a _MOP for LISP_ (_CLOS_ is the acronym of _Common Lisp Object System_). 

My intent in this toy project is twofold:
* First is: _"Give it a try"_ and share a naive and this  prototype
* Second is: promote the usage/knowledge of _MOP_ among _Javascript developers_.  

## Release 0.0.9 changelog
* First Prototype (_"Proof of concept"_) at a very early stage

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
* _The Art of the Metaobject Protocol_
  https://en.wikipedia.org/wiki/The_Art_of_the_Metaobject_Protocol
* _JOOSE_
  https://www.npmjs.com/package/joose
* _MOOSE_
  https://metacpan.org/pod/distribution/Moose/lib/Moose/Manual.pod
* _What's wrong with extending the DOM_  
  http://perfectionkills.com/whats-wrong-with-extending-the-dom/

