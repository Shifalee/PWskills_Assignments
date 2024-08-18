/*1. In the following shopping cart add, re9ove, and edit ite9s
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
1. add 'Meat' in the beginning of your shopping cart if it has not been already added.
2. add Sugar at the end of your shopping cart if it has not been already added.
3. remove 'Honey' if you are allergic to honey.
4. modify Tea to 'Green Tea'.*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' in the beginning of your shopping cart if it has not been already added.
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' at the end of your shopping cart if it has not been already added.
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if you are allergic to honey.
const allergicToHoney = true; 
if (allergicToHoney && shoppingCart.includes('Honey')) {
    const honeyIndex = shoppingCart.indexOf('Honey');
    shoppingCart.splice(honeyIndex, 1);
}

// 4. Modify 'Tea' to 'Green Tea'.
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
