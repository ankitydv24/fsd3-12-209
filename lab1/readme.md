
# EventLoop
JavaSript is a synchronous and single threaded bydefault

## There can be async behaviour 
- with brouserAPI - setTimeout,setInterval,,setImmediate,nextTick
- with promises 
- with event handlers
- promise - a function not executed immediately but it must be executed after a while it has some status during the execution  at final it may resolve() - success , reject - unsuccess

- call back function => that pass as argument or the parameter to another function
- modern java sript is devided into two categories
  1. common js(cjs)  -> supports OOPS -> require
     - priority (nextTick, promise, setImmediate, setTimeout)
  2. module js(mjs)  -> follow modular approach ->  import 
     - priority (Promise, nextTick, setImmediate/setTimeout) 
