import { useState } from "react";

// 1st build a function 
export const useLocalStorage = (key, initValue) => {

    // 2nd set up a state prop
    const [storedValue, setStoredValue] = useState(() => {

        //check to see if value passed already exists in localStorage - then return the value
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;

    });

    // function setValue takes in a parameter value
    // set value to localStorage using the key
    
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];

};