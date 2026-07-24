import { EventEmitter} from"node:events";
const login =(name)=>
{
    console.log(`${name} logged in`);
};

login ("Ankit");

const start = () =>{
    console.log("system starts");

};

const working =(name)=>{
    console.log(`${name} add items to cart`);
};

const checkout = (name)=>{
    console.log(`${name} logged out`);
};



start();
working("Ankit");
checkout("Ankit");

const task = new EventEmitter();
task.once("greet", start);
task.on("greet",login);
task.on("greet",working);
task.on("greet",checkout);

task.once("exit", ()=>
{
    console.log("system shutting down");
});


task.emit("greet","Mayank");
task.emit("greet","yadav");

task.off("greet",working);  // remove the working event 

task.emit("greet","goyal");
task.emit("exit");

