import React from 'react'
export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${
        darkMode ? 'bg-dark-blue' : 'bg-light'
      } navbar-${darkMode ? 'dark' : 'light'}`}
    >
        <div class="container-fluid">
            <a class="navbar-brand text-center" href="/">Todo List</a>
           
            <div class="form-check form-switch mx-4">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault "  checked={darkMode}
            onChange={toggleDarkMode}/>
                <label class={`form-check-label ${darkMode? 'dark': ''}`} for="flexSwitchCheckDefault">Dark Mode</label>
            </div>

        </div>
        </nav>
    </>
  )
}
