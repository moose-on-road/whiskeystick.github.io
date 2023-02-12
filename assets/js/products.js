

//tops
//const softwoodtop = {id:11, name: "Softwood Top", price: 300, stripeid: 'price_1MXfzXG47Qvg6QA2AfHSOQE3'}
//const hardwoodtop = [id=12, name= "Hardwood Top", price= 350, stripeid= "price_1MYDxlG47Qvg6QA2GxxzUwBG",];
//const stonetop = [id=13, name= "Stone Top", price= 300, stripeid= "price_1MYDxFG47Qvg6QA2lAu0j7j4",];

//class product {
//constructor(id, name, price, description, stripeid) {
//this.id= id;
//this.name= name;
//this.price = price;
//this.stripeid = stripeid;
//}

//}

const softwoodtop = new Map([

 ["id", 1],
 ["name", 'Softwood Top'],
 ["retail", 300],
 ["price", 'price_1MXfzXG47Qvg6QA2AfHSOQE3'],
 ["desc", 'Pine, 22" x 36:", Pecan Stain'],
]);

//Bases
//const steelbase = [id=21, name= "Structural Steel Base", price= 400, stripeid= "price_1MYDyoG47Qvg6QA2phNIxwsr",];

document.getElementById("productname").innerHTML =
softwoodtop.get("name");

document.getElementById("productprice").innerHTML =
"$" +softwoodtop.get("retail");

document.getElementById("addtocart").innerHTML =
softwoodtop.get("id")
+ "," + softwoodtop.get("name")
+ "," + softwoodtop.get("retail")
+ "," + softwoodtop.get("price")

const softwoodtopATC = softwoodtop.get("id")
+ "," + softwoodtop.get("name")
+ "," + softwoodtop.get("retail")
+ "," + softwoodtop.get("price")
