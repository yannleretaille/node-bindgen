let addon = require('./dist');
const assert = require('assert');


addon.hello(1,function(val,msg){
  assert.strictEqual(val,10);
  assert.strictEqual(msg,"hello world");
  console.log("callback test succeed");
});


addon.basic(10,function(val,val2){
  assert.strictEqual(val,10);
  assert.strictEqual(val2,20);
  console.log("callback test succeed");
});

