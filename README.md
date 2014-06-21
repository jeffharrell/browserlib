# browserlib

Wrappers around common browser-based functionality.



## CSS

Provides support for changing CSS styles on DOM elements.

`browserlib.css.add(el, str)`  
`browserlib.css.remove(el, str)`  
`browserlib.css.inject(el, str)`  



## Events

Provides support for DOM eventing.  

`browserlib.events.add(obj, type, fn, scope)`  
`browserlib.events.remove(obj, type, fn)`  



## Storage

Provides support for data storage using localStorage.  

`new browserlib.Storage(name, duration)`  
`storage.load()`  
`storage.save(data)`  
`storage.destroy()`  