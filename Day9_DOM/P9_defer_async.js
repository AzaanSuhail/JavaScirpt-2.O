/*
Let us understand defer and async

Let say when we put the script in the end of body then first load the entire CSS && HTMl and after that script will be loaded and start will applied 

Sometimes it may create a bad user experience : let say script is loaded but html not and vice-versa

to solve this we can use defer or async 

defer: Defer loads the JavaScript and Paint the Html & CSS simultaneously when the HTML & CSS is loaded it will wait,  then the javascript is loaded

async: loads javascript and Paint HTML & CSS simultaneously when the any javascript file loaded fully it will not wait for the HTML and CSS to be loaded completely, that javascript start applying to the website.

*/