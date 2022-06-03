//============= START THEME SWITCHER ========================= //

// theme switch button
const themeSwitcher = document.getElementById("theme-switch");
themeSwitcher.checked = true;

function clickHandler() {

	if (this.checked) {
	  	
		//if dark switch to light
		document.body.setAttribute('data-theme', 'light');
		localStorage.removeItem('mct_data-theme'); //remove item if default
		
	} else {
		// if light switch to dark
		document.body.setAttribute('data-theme', 'dark');
		localStorage.setItem('mct_data-theme', 'dark'); //set local storage
	}
  }
  themeSwitcher.addEventListener("click", clickHandler);



//Reset theme from local Storage13
window.onload = checkTheme();

function checkTheme() {

	  const localStorageTheme = localStorage.getItem("mct_data-theme"); //get theme from local storage

	  if(localStorageTheme !== null && localStorageTheme === "dark"){
		  	document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "dark"){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "auto" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		themeSwitcher.checked = true;
  })

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
	themeSwitcher.checked = false;
})

//============= END THEME SWITCHER ========================= //

