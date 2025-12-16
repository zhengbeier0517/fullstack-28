const shoppingList = ['牛奶', '鸡蛋', '面包'];
console.log('初始购物清单:', shoppingList);

shoppingList.push('水果', '蔬菜');
console.log('添加两项后的购物清单:', shoppingList);

shoppingList.pop();
console.log('删除最后一项后的购物清单:', shoppingList);

console.log('==================================================');

function checkCount(list) {
  if (list.length > 5) {
    console.log('你的购物车满了');
  }
}

checkCount(shoppingList);

console.log('==================================================');

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}

console.log('==================================================');

function checkItem(list, item) {
  if (list.includes(item)) {
    console.log(`"${item}"在购物清单中`);
  } else {
    console.log(`"${item}"不在购物清单中`);
  }
}

checkItem(shoppingList, '牛奶');
checkItem(shoppingList, '蔬菜');

console.log('==================================================');

const item = {
  name: '牛奶',
  price: 12,
  quantity: 1,
};

console.log('商品信息:', item);
