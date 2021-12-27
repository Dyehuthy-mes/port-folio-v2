import React from 'react'
import '../styles/Header.css'
import { useEffect, useState } from 'react';

function Header() {

  /*   const [checked, setOnclick] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);
  
  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setOnclick(true);
    } else {
      localStorage.setItem("theme", "light");
      setOnclick(false);
    }
  }; */

    return (
        <div className="header__title">
{/*              <button
               className='changeTheme'           
               defaultChecked={checked}
               onClick={() => toggleThemeChange()}
             /> */}
            <h1>ברוך הבא</h1> 
        </div>
    )
}

export default Header
