#### mongoose-nodejs-example

* new Schema({..}, { capped: 1024 }); // the capped option to the maximum size of the collection in bytes.
* new Schema({..}, { capped: { size: 1024, max: 1000, autoIndexId: true } });
* new Schema({..}, { collection: 'data' }); // This method pluralizes the name. Set this option if you need a different name for your collection.
* new Schema({ name: String }, { id: false }); // disabled id
* new Schema({ name: String, inventory: {} }, { minimize: false }); // Mongoose will, by default, "minimize" schemas by removing empty objects.
* new Schema({..}, { strict: false }); // The strict option may also be set to "throw" which will cause errors to be produced instead of dropping the bad data.
* new Schema({ status: String,photos: [String] }, { optimisticConcurrency: true }));
* new Schema({..}, { timestamps: { createdAt: 'created_at' } });
* new Schema({ child: childSchema }, { strict: 'throw', useNestedStrict: true });
```
    class MyClass {
        myMethod() { return 42; }
        static myStatic() { return 42; }
        get myVirtual() { return 42; }
      }
      
      const schema = new mongoose.Schema();
      schema.loadClass(MyClass);
      
      console.log(schema.methods); // { myMethod: [Function: myMethod] }
      console.log(schema.statics); // { myStatic: [Function: myStatic] }
      console.log(schema.virtuals); // { myVirtual: VirtualType { ... } }
```

