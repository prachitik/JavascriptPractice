const myTodos =[];
myTodos.push('Buy Bread');
myTodos.push('Record videos for youTube');
myTodos.push('Go to gym');

myTodos.forEach(function(todo, i){
console.log(`Your task number ${i+1}  is: ${todo}`);
});

// push tasks from the top, above we pushed tasks from the bottom
// dont use foreach, instead use for

const todos =[];
todos.unshift('Buy Bread');
todos.unshift('Record videos for youTube');
todos.unshift('Go to gym');
var i;
for(i=0;i<todos.length;i++){
console.log(`Your task number ${i+1}  is: ${todos[i]}`);
}
