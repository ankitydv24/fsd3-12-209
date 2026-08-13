// if a function uses await keyword then the fuction must be async  
import {readFile, appendFile, writeFile } from "fs/promises";

const readData=async (filename)=>{
    try{
     const content = await readFile(filename,"utf-8");
     return content;
} 
catch(e)
{
    console.log(e.message);
    console.log("file not found");
}
finally{
   console.log("read data finished");
}
};

const writeData=async(filename,content)=>{
    try
    {
      await writeFile(filename,content);
    
}
catch(e)
{
    console.log(e.message);
  
}

};

const appendData=async(filename,content)=>{
    try{
     await appendFile(filename,content);  
    }
    catch(error){
        console.log(error.message);
    }
    
};

const deleteFile=async(filename)=>{
    try{
        await unlink(filename);
    }
    catch(error){
        console.log(error.message);
    }
};

const data=await readData("file1.js");
 console.log(data);