<script>
let text = '{"producttops":[' +
'{"id":"0","name":"Softwood Top","price":"300","description":"blah blah", "stripeid":"price_1MXfzXG47Qvg6QA2AfHSOQE3"},' +
'{"id":"1","name":"Hardwood Top","price":"350","description":"blah blah", "stripeid":"price_1MYDxlG47Qvg6QA2GxxzUwBG"},' +
'{"id":"2","name":"Stone Top","price":"300","description":"blah blah", "stripeid":"price_1MYDxFG47Qvg6QA2lAu0j7j4"},' +
'{"id":"21","name":"Stone Top 2","price":"300","description":"blah blah", "stripeid":"price_"}]}';

let text = '{"productbases":[' +
'{"id":"0","name":"Structural Steel Base","price":"400","description":"blah blah", "stripeid":"price_1MYDyoG47Qvg6QA2phNIxwsr"},' +
'{"id":"1","name":"Trapezoidal Steel Base","price":"450","description":"blah blah", "stripeid":"price_"},' +
'{"id":"2","name":"Hairpin Legs","price":"150","description":"blah blah", "stripeid":"price_"},' +
'{"id":"21","name":"Doe","price":"100","description":"blah blah", "stripeid":"price_"}]}';


const obj = JSON.parse(text);
document.getElementById("softwoodtop").innerHTML =
obj.producttops[0].id + " " + obj.producttops[0].name + " " + obj.producttops[1].price + " " + obj.producttops[0].stripeid;
</script>


<p id="checkout"></p>
