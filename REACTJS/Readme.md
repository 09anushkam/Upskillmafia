# React Notes  

## Chai Aur Code React Js Playlist

react  
react-dom -> web  
react-native -> app  

npm - node package manager  
npx - node package executer  

React App  

1. npx create-react-app appname (not recommended)  
2. npm run start  (to run react app)  

<!-- Main content starts -->
Vite App  (Same steps for react app)  

1. npm create vite@latest (recommended)  
2. npm install (use inside react folder that u just created)  
3. Delete useless files/folders  
4. make changes in code (App.jsx,main.jsx)  
5. npm run dev (to run vite app)  
6. npm i react-router-dom (for routing)  
7. npm i react-hook-form (optional but useful and handy for using form)  
other packages or dependencies could be axios,@reduxjs/toolkit,react-redux,etc.

<!-- shortcut snippets -->  
rafce -> gives react component  

## Tailwind  
<!-- 1st of all follow above steps -->
<!-- then   -->

1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. make changes in content in tailwind.config.js

        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
   
5. inject tailwind in index.css

        @tailwind base;  
        @tailwind components;  
        @tailwind utilities;  

## Notes  

01. in vite/react  keep name of component function starting with capital letter  
02. in vite keep name of files as .jsx  
03. in react if html n js both are used in a file then keep name as .jsx else if only js is used then keep name as .js  
04. setCounter takes callback in case of appyling some logic on previous variable

           const [counter,setCounter]=useState(5);  
           // not gonna work!  (+1 hi hoga)  
           setCounter(counter++);  
           setCounter(counter++);  
           setCounter(counter++);  
           // this will work!  (+3 hoga)  
           setCounter(prevCount=>prevCount+1);  
           setCounter(prevCount=>prevCount+1);  
           setCounter(prevCount=>prevCount+1);
    
6. hooks eg:  useState,useCallBack,useEffect,useRef,useNavigate  
7. props - reusablity of Components  
8. onClick expects function now the value that func is returning `onClick={()=>setColor("lavender")}`  
9. useState updates state of variable  
`const [variable, setVariable] = useState(initial value);`  

10. useEffect avoids clicking rendering something instead it directly renders that something on page  
life cycle of react component (mount,unmount,update)  
then try to understand useEffect  
useEffect(callback,dependency);

        useEffect(() => {  
            return () => {  
              // Cleanup code (optional)  
            };  
          }, [count]); // Dependency array - on updating these values, re-render  

12. useRef allows you to persist values across renders without causing the component to re-render when the value changes. It provides a way to access and interact with DOM elements directly.  

        const passwordRef=useRef(null);  
        const copyPasswordToClipboard=useCallback(()=>{  
            passwordRef.current?.select();  
            passwordRef.current?.setSelectionRange(0,length);  
            window.navigator.clipboard.writeText(password);  
          },[password]);  
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>

13. useCallback helps you `optimize your app's performance by memoizing a function`. This means that it returns the same function instance between renders, unless one of its dependencies changes. This can be useful when you want to avoid unnecessary re-renders of child components that depend on this function.  
useCallback(callback,dependency);  

        const passwordGenerator=useCallback(()=>{  
            let pass="";  
            let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";  
            if(numberAllowed) str+="0123456789";  
            if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";  

            for(let i=1;i<=length;i++){  
              let char=Math.floor(Math.random()*str.length+1);  
              pass+=str.charAt(char);  
            }

            setPassword(pass);  

          },[length,numberAllowed,charAllowed,setPassword]); // Dependency array - keeps in cache memory for memoization and optimization

12. onChange is used inside input tag to set the state  
  
          onChange={()=>{  
            setNumberAllowed((prev) => !prev);  
          }}  

13. Custom hook  

14. React router dom  
BrowserRouter  
outlet  
Routes,Route,Link,NavLink  

15. useParams() hook  

16. useLoader() hook  
used while calling api  
used for optimization  

### Context Api  

- `src/Context/Theme.js` -  

        import React,{useContext,createContext} from "react";

        export const ThemeContext=createContext({
            themeMode:'light',
            darkTheme:()=>{},
            lightTheme:()=>{},
        });

        export const ThemeProvider=ThemeContext.Provider;

        export default function useTheme(){
            return useContext(ThemeContext);
        }

- `src/App.jsx` -  

        import React, { useEffect, useState } from 'react'
        import './App.css'
        import { ThemeProvider } from './Context/Theme'
        import ThemeBtn from './Components/ThemeBtn';
        import Card from './Components/Card';

        const App = () => {

          const [themeMode,setThemeMode]=useState("light");

          const lightTheme=()=>{
            setThemeMode("light");
          }

          const darkTheme=()=>{
            setThemeMode("dark");
          }

          // actual change in theme

          useEffect(() => {
            document.querySelector('html').classList.remove('light','dark');
            document.querySelector('html').classList.add(themeMode);
          }, [themeMode]);
  
          return (
            <>

            <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
              <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                    <Card/>
                  </div>
                </div>
              </div>
            </ThemeProvider>

            </>
          )
        }

        export default App  

- `src/Components/ThemeBtn.jsx` -  

        import React from 'react'
        import useTheme from '../Context/Theme';

        export default function ThemeBtn() {

            const {themeMode,lightTheme,darkTheme}=useTheme();

            const onChangeBtn=(e)=>{
                const darkModeStatus=e.currentTarget.checked;
                if(darkModeStatus) {
                    darkTheme();
                }
                else {
                    lightTheme();
                }
            }
    
            return (
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        onChange={onChangeBtn}
                        className="sr-only peer"
                        checked={themeMode==="dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
                </label>
            );
        }

- `tailwind.config.js` -  

        /** @type {import('tailwindcss').Config} */
        export default {
          content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
          darkMode: "class", // something new
          theme: {
            extend: {},
          },
          plugins: [],
        };

## LocalStorage

<!-- this part requires debugging -->

          useEffect(() => {
            const todos=JSON.parse(localStorage.getItem("todos")); //error
            if(todos && todos.length>0){
              setTodos(todos);
            }
          }, []);

          useEffect(() => {
            localStorage.setItem("todos",JSON.stringify(todos));
          }, [todos]);

## Redux Toolkit  

npm install @reduxjs/toolkit -> reduxjs toolkit which is an independent library  
npm install react-redux -> to connect or use redux with react we use react-redux  

reduxjs toolkit  
store, //global valiable kinda  
reducers, //functionality to manipulate values of store  
react-redux  
useSelector, //selecting some value  
useDispatcher, //sending some value  

1. create Store  
2. create Slice including name,intialState,reducers(includes state,action)  
3. then export the actions and reducer  
4. in App.jsx use useDispatch to use reducers and use useSelector to get intialState variables  
5. Wrapping App and BrowserRouter by Provider and importing store and applying it on Provider  

<!-- Deploy Vite React App on Netlify -->

1. npm run build  
2. Drag and Drop dist folder on netlify  
