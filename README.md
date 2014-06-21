# browserlib

Wrappers around common browser-based functionality.



## CSS

Provides support for changing CSS styles on DOM elements.

`css.add(el, str)`  
`css.remove(el, str)`  
`css.inject(el, str)`  



## Events

Provides support for DOM eventing.  

`events.add(obj, type, fn, scope)`  
`events.remove(obj, type, fn)`  



## Storage

Provides support for data storage using localStorage.  

`function Storage(name, duration)`
`storage.load()`  
`storage.save(data)`  
`storage.destroy()`  