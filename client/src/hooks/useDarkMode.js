import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { getElementError } from '@testing-library/react';


// build function useDarkMode
export const useDarkMode = (key, initValues) => {


    // call useLocalStorage and pass in they key. 
    // This hook returns an array with a value and 
    // a setter in an array, exactly like the state hook 

    const [ darkMode, setDarkMode ] = useLocalStorage(key, initValues);

    const toggleMode = e => {
        e.preventDefault();

        return darkMode ? setDarkMode(false) : setDarkMode(true);
        
    }
    console.log(darkMode);



    useEffect(() => {
        if (darkMode == true) {
            document.body.classList.add('dark-mode')
            
        }
        else if(darkMode == false) {
            document.body.classList.remove('dark-mode')
        }

    }, [darkMode]
    
    );

    return [ darkMode, setDarkMode, toggleMode ];

}

