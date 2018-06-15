Mocha (create-react-app, OS:windows)

從零開始安裝


    npx create-react-app my-app
    cd my-app
    npm start


    yarn add mocha chai

我們有用到ES6的語法(ex: import…)，所以要用babel轉成mocha認識的ES5，又因為我們用create-react-app，不能只單純的加個 `babel-preset-es2015` 就完成，要用以下的…


    yarn add -D babel-preset-react-app //-D: for DEVENV: developer only

package.json  要設定script和babel轉譯

    {
      {
        ...
      },
      "scripts": {
        ...
        //這裡是Windows的寫法，注意&兩個指令的前後不能有空白
        //可以指定一個資料夾
        "test3": "SET NODE_ENV=development&mocha --compilers js:babel-core/register test"
        //or 只指定一個檔案
        "test3": "SET NODE_ENV=development&mocha --compilers js:babel-core/register test/sometest.js"
        //Linux寫法
        //"test3":NODE_ENV=development mocha --compilers js:babel-core/register src/test/
      },
      "babel": {
        "presets": [
          "react-app"
        ],
        "plugins": [
          "transform-es2015-modules-commonjs"
        ]
      }
      

For detail, find the ‘Getting Mocha to work again - Steps’ part of this reference.
參考上述的網站時唯一要注意的就是寫scripts指令時，windows的寫法會略有不同(見註解)
(整篇有87%都在哭FB想要用create-react-app來綁住開發者，讓開發者只用他們家的Jest)


以上設定完了! 先試個簡單的確定能用ES6的import


----------


簡單測試

這時你的package.json 至少要有增加這些東西

```
package.json
    {
      "dependencies": {
        "chai": "^4.1.2",
        "mocha": "^5.2.0",    
        "react": "^16.4.1",
        "react-dom": "^16.4.1",
        "react-scripts": "1.1.4"
      },
      "scripts": {
        //這裡我指定要測試根目錄底下的test資料夾
        "test": "SET NODE_ENV=development&mocha --compilers js:babel-core/register test"
      },
      "devDependencies": {
        "babel-preset-react-app": "^3.1.1"
      },
      "babel": {
        "presets": [
          "react-app"
        ],
        "plugins": [
          "transform-es2015-modules-commonjs"
        ]
      }
    }
```


設定test  (用assert.equal)
    
    // test/test1.js
    
    import assert from "assert";
    
    describe("Array", function() {
      describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
    });
    


執行

在vscode的終端機(或是其他terminal也可以)，指定路徑到你的根目錄
`yarn test`

成功長這樣

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7EBFFD726ED4F6784822CA5BB5B257CE24E8C10F06CD6F5D9573C4670210AC54_1528980160573_image.png)


失敗長這樣
(我把測試改成assert.equal([1, 2, 3].indexOf(1), -1);)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7EBFFD726ED4F6784822CA5BB5B257CE24E8C10F06CD6F5D9573C4670210AC54_1528980275302_image.png)



更多測試 (加法, 用chai expect) reference
```
    function add(x, y) {
      return x + y;
    }
    import { expect } from "chai";
    describe("測試 add", () => {
      it("1 + 2 = 3", () => {
        expect(add(1, 2)).to.equal(3);
      });
      it("3 + 4 = 7", () => {
        expect(add(3, 4)).to.equal(7);
      });
    });
``` 


Object測試 (要比較Object，用to.deep.equal)
test.js
```
    import reducer from "../src/test/shop_reducer";
    import actions from "../src/test/shop_actions";
    import { expect } from "chai";
    const fakeOrder = {
      id: 10,
      lineItems: [
        {
          id: 483,
          quantity: 2,
          product: {
            id: 924,
            name: "Carrots",
            price: 1.5
          }
        }
      ]
    };
    describe("shopReducer", () => {
      describe("DESERIALIZE_ORDER", () => {
        let state;
        beforeEach(() => {
          state = reducer(undefined, actions.deserializeOrder(fakeOrder));
        });
        it("should deserialize the order correctly", () => {
          expect(state.orders[10]).to.deep.equal({
            id: 10,
            lineItems: [483]
          });
        });
        it("should deserialize the lineItems correctly", () => {
          expect(state.lineItems[483]).to.deep.equal({
            id: 483,
            quantity: 2,
            product: 924
          });
        });
        it("should desialize the product correctly", () => {
          expect(state.products[924]).to.deep.equal({
            id: 924,
            name: "Carrots",
            price: 1.5
          });
        });
      });
    });
```


shop reducer
```  
    // shop_reducer.js
    
    import { normalize } from 'normalizr';
    import { orderSchema } from './schema';
    // We use seamless-immutable but thats for another time.
    import Immutable from 'seamless-immutable';
    const defaultState = Immutable({
      order: [],
      product: [],
      lineItem: []
    });
    export default function shopReducer(state = defaultState, action) {
      switch (action.type) {
        case 'DESERIALIZE_ORDER':
          // This is the magic part - the normalize method will flatten
          // my deeply nested order according to my schemas defined
          // above.
          var normalizedOrder = normalize(action, {
            order: orderSchema
          });
          // Due to using seamless-immutable we have to merge the new
          // entities into the state.
          return state.merge(normalizedOrder.entities);
        default:
          return state;
      }
    }
```    


shop actions
```
// shop_actions.js
    
    module.exports = {
      deserializeOrder: order => {
        return {
          type: 'DESERIALIZE_ORDER',
          order: order
        };
      }
    };
```


schema
```  
    // schema.js
    
    import { schema } from 'normalizr';
    const orderSchema = new schema.Entity('orders');
    const lineItemSchema = new schema.Entity('lineItems');
    const productSchema = new schema.Entity('products');
    // An Order has an array of line items
    orderSchema.define({
      lineItems: new schema.Array(lineItemSchema)
    });
    // A Line Item has one product attached
    lineItemSchema.define({
      product: productSchema
    });
    export { orderSchema, lineItemSchema, productSchema };
```    

整理一下:
要測試某個action是否正常，在根目錄底下建一個檔案，然後把你要測的東西通通import進來
這樣測試的程式碼才不會和你的src混在一起
