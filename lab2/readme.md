# File System (FS Module)
- FS Module directly communicate with operating system other than             the common operation on the file on the folder are 
1. File - writeFile, readFlie, appendFile
2. Folder - Mkdir/md, rmdir/rm, readdir
3. File metadata- stat, lstat, rstat
4. watch - watch, unwatch
5. stream - readstream(), writestream()
all functions are promise so it must be called with await keyword 
 