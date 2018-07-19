window.myFirstAPI = function (nodeOrSelector) {
  let nodes = { length: 0 };
  if (typeof nodeOrSelector === 'string') {
    nodes = document.querySelectorAll(nodeOrSelector);    //nodes是一个伪数组
    console.log(1);
  } else if (nodeOrSelector instanceof Node) {             //如果是一个节点
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }

  nodes.getSiblings = function () {
    var allChildren = nodeOrSelector.parentNode.children;
    var array = {
      length: 0
    }
    for (let i = 0; i < allChildren.length; i++)
      if (allChildren[i] !== nodeOrSelector) {
        array[array.length] = allChildren[i];
        array.length += 1;
      }
  
  return array;
}
nodes.addClass = function (value) {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].classList.add(value)
  }
}
return nodes;
}
var a = myFirstAPI(item3)
// console.log(document.getElementById("item3"));
// console.log(a[0].parentNode.children);
a.addClass('cyan');
// console.log(a.getSiblings());




// return {
//   getSiblings: function(){
//     var allChildren = nod.parentNode.children;
//     var array = {
//       length :0
//     }
//     for(let i=0;i<allChildren.length;i++){
//       if(allChildren[i] !== node){
//         array[array.length] = allChildren[i];
//         array.length += 1;
//       }
//     }
//     return array;
//   },
//   addClass: funtion(classes){
//     classes.forEach( (value) => {
//       node.classList.add(value);
//     })
//   }
// }