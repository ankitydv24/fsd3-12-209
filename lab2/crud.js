
import readline from  "readline/promises";
import {stdin,stdout} from "process";

const main =async()=>{
 let choice;
 const cin = readline.createInterface({input: stdin , output: stdout});
 do{
console.log("Welcome to Flipkart🌍");
console.log('1......show cart');
console.log('2......add product');
console.log("3......remove product");
console.log("4......update quality");
console.log("5......checkout");
choice = await cin.question ("Enter your choice");
switch(Number(choice)){
    case 1:
        console.log("show products");
        break;
    case 2:
        console.log("product added");
        break;
    case 4:
        console.log("remove product");
        break;
    case 5:
        console.log("update product quantity");
        break;
    case 6:
        console.log("see you later");
        break;
    default:
        console.log("invalid choice ! try again ❌");
        

    }
}while(choice!=5);

cin.close();
}

main();
