//1. Select the ul element and add the class "my-list" to it. 
$("ul").addClass("my-list");

//2. Select the first <div> element and then use the .children() method to select the <h3> child of that <div>. (Hint: you'll need to pass a selector into the .children() method). Log the text of the <h3> element to the console.
var firstDiv = $("div:first"); 
var h3Element = firstDiv.children("h3"); 

console.log($("div:first").children("h3").text());

//3. Select the <section> element and then use the .children() method to select the <section> element's child with an id of "paraTwo". Append the following text to it: "jQuery is the coolest"
$("section").children("#paraTwo"); 
paraTwo.append("jQuery is the coolest?"); 

//4. Select the element with class "replace-h3" and replace its text with "Some clever and hilarious text"
$(".replace-h3").text("The job hunt is BRUTAL");

/*Selects the <ul> element on the page using the $("ul") selector and adds the class "my-list" to it using the .addClass() method. The new variable addListClass stores the reference to the modified <ul> element.

Selects the first <div> element on the page using the $("div:first") selector and then uses the .children() method to select its child element with an <h3> tag. The text content of the selected <h3> element is logged to the console using the .text() method. Alternatively, the code can be simplified to one line by chaining the selectors and methods together using $("div:first").children("h3").text().

Selects the <section> element on the page using the $("section") selector and then uses the .children() method to select its child element with an id of "paraTwo" using the $("#paraTwo") selector. The text "jQuery is the coolest" is appended to the selected element using the .append() method. The modified element is logged to the console using console.log().

Selects the element(s) with class "replace-h3" on the page using the $(".replace-h3") selector and replaces their text content with "Some clever and hilarious text" using the .text() method. The modified element(s) are logged to the console using console.log(). Note that since .text() method doesn't return anything, the funnyText variable will be undefined.*/