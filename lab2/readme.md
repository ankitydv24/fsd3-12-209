# File System (FS Module)
- FS Module directly communicate with operating system other than             the common operation on the file on the folder are 
1. File - writeFile, readFlie, appendFile
2. Folder - Mkdir/md, rmdir/rm, readdir
3. File metadata- stat, lstat, rstat
4. watch - watch, unwatch
5. stream - readstream(), writestream()
all functions are promise so it must be called with await keyword 

# File System (FS Module)

# CRUD Project

assume we are making cart related project 
1. user can add any product (id,name,price,qty) into cart
2. user can see all the items of cart
3. user can remove item from cart
4. user can also update quantity of product
5. all the items should be stored after temination of project
 