let sourceNo = 0;
let targetNo = 0;
let observer = null;

function emitChange() {
  observer(sourceNo, targetNo);
}

export function observe(o) {
  if (observer) {
    throw new Error("multiple observers not implemented");
  }
  observer = o;
  emitChange();
}

export function moveInputBox(source, target) {
    // console.log(source, target);
  sourceNo = source;
  targetNo = target;
  emitChange();
}
