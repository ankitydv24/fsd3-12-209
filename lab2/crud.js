
import readline from  "readline/promises";
import {stdin,stdout} from "process";
import {readFile, writeFile}from "fs/promises";


const FILE="product.json";

const getCart = async()=>{
      const data = await readFile(FILE,"utf-8");
      return JSON.parse(data); 
};

const saveCart = async (myCart)=>{
      await writeFile(FILE,JSON.stringify(myCart, null, 2));
};


const addtocart=async (product)=>{
    const myCart = await getCart();
    const isFound = myCart.find((item)=>item.id===product.id);
    if(isFound){
        isFound.qty += product.qty;
    }
    else{
        myCart.push(product);
    }
    await saveCart(myCart);
    console.log(`product added/updated with id ${product.id} into cart`);
};

const showcart=async()=>{
    const data = await getCart();
    console.table(data);

    let total=0;
    // for(let i=0;i<data.length;i++)
    // {
    //     total=total+data[i].qty*data[i].price;
    // }
    // console.log("total price: ",total);

    total=data.reduce((acc,item) => acc + item.qty * item.price,0);
    console.log("you have to pay",total);

};

const removefromcart = async(pid)=>{
    const data=await getCart();
    const count = data.length;
    const newdata=data.filter((item)=>item.id !=pid);
    const newcount=newdata.length;
    if(count==newcount){
        console.log(`product with id ${pid} not found`);
    }
    else
    {
        await saveCart(newdata);
        console.log(`product with id ${pid} deleted successfully`);
    }
};

const updatecart = async (pid,value)=>
{
    const data=await getCart();
    const isfound = data.find((item)=> item.id===pid);
    if(isfound)
    {
        isfound.qty+=value;
        await saveCart(data);
        console.log("product quantity update successfully");

    }
    else{
        console.log("product id not found");
    }
}

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
        await showcart();
        break;
    case 2:
        let data = await cin.question("enter id , name , price, qty:");
         const [id,name,price,qty] = data.split(',').map((item)=>item.trim())
         const product={id:Number(id),name,price:Number(price),qty: Number(qty)

         };
         await addtocart(product);
         break;

    case 3:
        // console.log("remove product");
        let pid=await cin.question("enter product id to remove")
        await removefromcart(Number(pid));
        break;
   
    case 4:
        // console.log("update product quantity");
        let pid2=await cin.question("enter product id to update");
        let value = await cin.question("+1 increase,-1 decrease");
        await updatecart(Number(pid2),Number(value));
        break;
    case 5:
        console.log("see you later");
        break;
    default:
        console.log("invalid choice ! try again ❌");
        

    }
}while(choice!=5);

cin.close();
}

main();
