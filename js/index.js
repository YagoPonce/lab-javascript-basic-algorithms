// Iteration 1: Names and Input
let hacker1 = "Marc Galindo"
console.log("The driver's name is " + hacker1)

let hacker2 = "Yago Ponce";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hackers2.length} characters.`)
} else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${jacker1.length} characters!`)
} /* dudo de si es mejor acabar con un ELSE, en vez de un ELSE IF, ya que no haría falta poner condición.
     Se entiende que si no cumple la condición de ser mas alto uno o el otro, es que son iguales */

// Iteration 3: Loops

let driverName = "";
for (let i=0; i < hacker1.length; i++) {
    driverName = `${driverName} ${hacker1[i].toUpperCase()}`
}
console.log(driverName); 


count = hacker2.length;
navigatorReverse = "";
for (count; count > 0 ; count--) {
navigatorReverse = `${navigatorReverse} ${hacker2[count-1]}`;
}
console.log(navigatorReverse);



for (let i = 0; i < 1; i++) {
 if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
 } else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")    
 } else if (hacker1[0] < hacker2[0]) {
    console.log("What?! You both have the same name?")
 }
}



//BONUS

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo quis ante id egestas. Nunc ac tortor at mauris facilisis varius. Praesent vel turpis eget purus pulvinar varius nec et mi. Nunc tristique sodales turpis, ac tempor nunc ornare a. Morbi ut nunc et dui luctus laoreet nec eu enim. Quisque volutpat mattis auctor. Phasellus maximus enim lorem, eget finibus ipsum malesuada nec. Suspendisse faucibus tellus in neque pellentesque sagittis. Fusce aliquam ligula at facilisis rutrum. Suspendisse potenti. Integer finibus imperdiet venenatis. Integer egestas libero ac nisl rhoncus, et pellentesque massa rhoncus. Donec semper, arcu a egestas aliquet, urna felis dictum tellus, in vehicula leo urna non nisl.
Sed non nunc in odio porta iaculis non ut lectus. Suspendisse lobortis, enim non luctus pellentesque, nisl tellus accumsan risus, quis blandit orci ligula ac ligula. Etiam consectetur nunc purus, ac ullamcorper lacus consectetur quis. Pellentesque ultrices laoreet dui, et sagittis est scelerisque quis. Pellentesque dapibus tempor elit, at ullamcorper dui euismod vel. Morbi eu mauris vel nisi laoreet interdum. Sed malesuada eleifend neque, sit amet lacinia felis vestibulum eu. Vestibulum dapibus fringilla libero. Sed feugiat dui id magna congue, iaculis vehicula elit sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Vestibulum facilisis, velit sed dictum luctus, dui nunc aliquet est, ut pharetra justo risus nec sapien. Donec congue nibh sit amet tempor laoreet. Cras dictum dapibus magna, in tempor tellus posuere facilisis. Fusce accumsan erat tellus. Aliquam erat volutpat. Quisque sed lectus lobortis, vehicula nulla ac, auctor velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla tincidunt ante ante, eget tempor ligula consequat vel. Phasellus in fringilla tortor. Sed elementum nisi ante, sit amet elementum sapien ultricies a. Aliquam augue mi, tristique sed urna a, pellentesque rhoncus elit. Nunc fermentum venenatis nisl non volutpat. Sed sollicitudin ullamcorper vehicula.`


let countText = text.split(" ").length;
console.log(countText);

let countEt = 0
for (let i = 0; i < countText; i++) {
    if (text.charAt(i) === " " && text.charAt(i+1) === "e" && text.charAt(i+2) === "t" && text.charAt(i+3) === " ") {
        countEt++;
    }
}
console.log(countEt)

//no he conseguido entender porqué no ha funcionado del todo!