import {readFile} from "fs/promises";

const readData=(filename)=>{
     const content = await readFile(filename,"utf-8");
     return content;
}

const writeData=(filename,content)=>{
     const content = await writeFile(filename,content);  
    return "Data return successfully";
}

const appendData=(filename,content)=>{
     const content = await appendFile(filename,content);  
    return "Data appended successfully";
}