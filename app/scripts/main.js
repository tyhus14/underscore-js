console.log('Type the following underscore functions:');
console.log('1. _.where(car, {year: 2010})');
console.log('2. _.pluck(car, \'model\')');
console.log('3. _.findWhere(car, {make: \'nissan\'}) ');
console.log('4. _.sortBy(car, \'year\')');
console.log('5. _.groupBy(car, \'make\')');
console.log('6. _.indexBy(car, \'year\')');
console.log('7. _.countBy(car, \'make\')');
console.log('8. _.size(car)');
console.log('9. _.first(car)');
console.log('10. _.initial(car)');
console.log('11. _.last(car)');
console.log('12. _.rest(car, \'model\')');
console.log('13. _.isBoolean(car)');
console.log('14. _.isArray(car)');
console.log('15. _.isObject(car)');
console.log('16. _.random(46, 50) ');
console.log('17. _.shuffle([\'tyler\', \'johnny\', \'steve\', \'alex\', \'sarh\'])');
console.log('18. _.sample([\'tyler\', \'johnny\', \'steve\', \'alex\', \'sarah\'], 2) ');
console.log('19. _.without([\'tyler\', \'johnny\', \'steve\', \'alex\', \'sarah\'], \'alex\')');
console.log('20. _.object([\'make\', \'model\', \'year\'], [\'ford\', \'f150\', \'1997\'])');
console.log('21. _.indexOf([\'tyler\', \'johnny\', \'steve\', \'alex\', \'sarah\'], \'alex\')');

// Example 1
// This will call back a random number between 46 and 50 
// ex: 47
_.random(46, 50) 

// Example 2
// This will find  in my list of cars all that are from year 2010

_.where(car, {year: 2010}) 

var car = [
	{make: 'ford', model: 'f150', year: 2001},
	{make: 'ford', model: 'escape', year: 2010},
	{make: 'ford', model: 'fusion', year: 2013},
	{make: 'ford', model: 'f150', year: 2003},
	{make: 'honda', model: 'accord', year: 1998},
	{make: 'honda', model: 'civic', year: 2010},
	{make: 'nissan', model: 'altima', year: 2007},
	{make: 'nissan', model: 'maxima', year: 2013},
	{make: 'nissan', model: 'maxima', year: 2010},
	{make: 'toyota', model: 'camry', year: 2013},
	{make: 'toyota', model: 'corolla', year: 2007},
];

// Example 3
// This will provide me with all model names of the cars using the list from Example 2

_.pluck(car, 'model')

// Example 4
// Using the car list this will find the first nissan in the list
_.findWhere(car, {make: 'nissan'}) 

// Example 5
// Using the car list this will sort the cars by the year they were made
_.sortBy(car, 'year')

// Example 6
// Using the car list this will group the cars by the make of the car
_.groupBy(car, 'make') 

// Example 7
// Using car list this takes one car per year
_.indexBy(car, 'year')

// Example 8
// Using car list this counts the number of each make
_.countBy(car, 'make')

// Example 9
// This shuffles these names into random order
_.shuffle(['tyler', 'johnny', 'steve', 'alex', 'sarh']) 

// Example 10
// This will sample two strings randomly
_.sample(['tyler', 'johnny', 'steve', 'alex', 'sarah'], 2) 

// Example 11
// This will return the amount of objects that I have in the array created
_.size(car) 

// Example 12
// Using car list this will return the first object of my array named car
_.first(car)

// Example 13
// Using car list this will return all objects excluding the last one in the list
_.initial(car) 

// Example 14
// Using car list this will return the last object in the list
_.last(car) 

// Example 15
// Using car list this returns all objects past the first one
_.rest(car, 'model')

// Example 16
// This will remove alex from the list within the array
_.without(['tyler', 'johnny', 'steve', 'alex', 'sarah'], 'alex')

// Example 17
// This turns these arrays into on object
_.object(['make', 'model', 'year'], ['ford', 'f150', '1997'])

// Example 18
// This will return the index of alex, which is 3
_.indexOf(['tyler', 'johnny', 'steve', 'alex', 'sarah'], 'alex')

// Example 19
// This will determine whether this is a true or false statement
// This example will result in false
_.isBoolean(car)

// Example 20
_.isArray(car)
// Why is this an array and and object?
// Is it because there are objects within the array?
_.isObject(car)  