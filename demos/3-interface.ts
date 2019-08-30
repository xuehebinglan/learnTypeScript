interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

// let myObj = {size: 10, label: "Size 10 Object"};
let myObj = {size: 10, label: {}};
printLabel(myObj);