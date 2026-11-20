# Frontend using React 
## Create React Project
```
1. cd frontend #goto frontend folder (should be small case) folder
2. npm create vite@latest  # press y if asked to install 
3. press . to as project name
4. select react as framework
5. Select JavaScript as variant 
6. Select Eslint as Linter 
7. Select Yes and continue
```

## Add Tailwind CSS for ui
```
1. goto https://tailwind.com/ and ckick on get started 
2. install by 
npm.install.tailwindcss @tailwindcss/vite
3. open vite.config.js then add dependency as below 
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    tailwindcss(),

  ],
})

4. open src/index.css and remove all contents then paste @import "tailwinds" ; as first line 


```

