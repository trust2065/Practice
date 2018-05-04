This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


!!not working for this version of create-react-app
enable @ on babel
ex:
```
@DragSource(ItemTypes.KNIGHT, knightSource, collect)
class Knight extends Component {
  ...
}
```
npm install --save-dev babel-plugin-transform-decorators

Write in other way instead of using decoration(@):
```
class Board extends Component {
  ...
}
export default DragDropContext(HTML5Backend)(Board);
```

Adding the Drag and Drop Interaction 
npm install --save react-dnd react-dnd-html5-backend

import the folling extension to highest component you want to use
```
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
  ...
}
export default DragDropContext(HTML5Backend)(Board);
```

put the following code in Knight.js
```
const ItemTypes = {
  KNIGHT: 'knight'
};

DragSource accepts: type, spec, and collect
const knightSource = {
  beginDrag(props) {
    return {};
  }
};
```
what's props does the Knight need?
```
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
```
