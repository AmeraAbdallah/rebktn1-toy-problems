/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function iterate (list, cb) {
  cb(list.value);
  if(list.next!== null) iterate(list.next, cb);
}

function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  let l1 = [];
  let l2 = [];
  let l3 = [];

  iterate(list1, (val1) => {
    l1.push(val1);

  });
  iterate(list2, (val2) => {
    l2.push(val2);
  });
  l1.map(elt1 => {
    l2.map(elt2 => {
      if(elt1 === elt2 && !l3.includes(elt1)){
        l3.push(elt1);
        l1 = l1.filter(e => e !== elt1);
        l2 = l2.filter(e => e !== elt1);
      }
    })
  });

  return `
      ${l1.join('→')}
                      ↘
                        ${l3.join('→')}
                      ↗
      ${l2.join('→')}
  `
}

