import { EventEmitter } from "events"

class DomClass extends EventEmitter{
     addEventListener(eventname,callback){
        this.on(eventname,callback);
     }
     removeEventListener(eventname,callback)
     {
        this.off(eventname,callback);
     }

     dispatchEvent(eventname,eventdata={}){
        const event={
            type: eventname,
            timespam: new Date(),
            ...eventdata,
        };
        this.emit(eventname,event);
     }
}

const button= new DomClass();
const handleclick=(event)=>{
    console.log(`button clicked type: ${event.type}at ${event.timespam}`);
};

button.addEventListener('click',handleclick);
button.dispatchEvent('click',{
    target: "submitbtn",

});

button.removeEventListener("click", handleclick);
button.dispatchEvent("click", {
  target: "resetbtn",
});

