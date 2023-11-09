# chrome-docs-focus-mode-extension

A simple chrome extension that grants users the ability to enable / disable focus mode on the chrome extension and webstore documentation pages.

<br>

* The extension, upon being clicked (Hotkey - Ctrl/Cmd + B), will either activate or deactivate focus mode.

<br>

* Upon activation, the so called "focus mode" is brought about by using the scripting API to safely inject a stylesheet (focus-mode.css) which simplifies styling and reduces clutter, while retaining all the relevant information on the webpage.
  
<br>

* Upon deactivation, the same scripting API is used to remove the stylesheet, returning us to the original view of the webpage. 
