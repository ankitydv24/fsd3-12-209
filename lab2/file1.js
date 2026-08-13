import { writeFile , appendFile, readFile} from "fs/promises";

//await writeFile("hello.txt","JS is easy ");
await appendFile("hello.txt","\nFS is much easy than others 🌍🌍"); 
// await appendFile("helloe.txt", "\nMY NAME IS ANKIT YADAV"); 

const content = await readFile("hello.txt","utf-8");
console.log(content);



