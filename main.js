function getReminder()  {
  console.log(`Water the plants.`)
}

function greetInSpanish() {
  console.log(`Buenas tardes.`)
}

// -------------------------------------------------------------------------------------------------------

function sayThanks () {
  console.log(`Thank you for your purchase! We appreciate your business.`)
}

sayThanks();

sayThanks();
sayThanks();


// ----------------------------------------------------------------------------------------------------------

function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.')
}

sayThanks(`Cole`);


// -----------------------------------------------------------------------------------------------------------


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
};


//------------------------------------------------------------------------------------------------------------

const numOfMonitors = monitorCount(5, 4);

function monitorCount(rows, columns) {
  const numOfMonitors = rows * columns;
  return numOfMonitors;
}


console.log(numOfMonitors);




//-------------------------------------------------------------------------------------------------------------


// Helper Functions
//Another way to define a function is to use a function expression. 
//To define a function inside an expression, we can use the function keyword. 
//In a function expression, the function name is usually omitted. 
//A function with no name is called an anonymous function. 
//A function expression is often stored in a variable in order to refer to it. 

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost)


//----------------------------------------------------------------------------------------------------------
// Function Expressions.

const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
} else{
    return false
}
}

console.log(plantNeedsWater('Tuesday'));




