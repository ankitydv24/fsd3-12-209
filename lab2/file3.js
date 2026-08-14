import {stat} from "fs/promises";

const fstat = await stat("file1.js");

console.log("file size ",fstat.size,"bytes");
console.log(`id file: ${fstat.isFile()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is syslink:${fstat.isSymbolicLink()}`);
console.log(`is syslink :${fstat.birthtime}`);
console.log(`is syslink:${fstat.atime}`);
console.log(`Created on:${fstat.birthtimee}`);
console.log(`last used:${fstat.atime}`);