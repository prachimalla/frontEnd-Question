// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let flatArray =[1,4,[5,7,[9,9]]]
console.log(flatArray.flat(2))
console.log(
  flatArray.reduce((ele,curr)=>{
  if(typeof curr == 'number'){
ele.push(curr)
  }else{
    ele.push(...curr)
  }
  return ele;

},[]))

function flatArrayNew(input){

  return function newArr(flatArray){
    
  return  flatArray.reduce((ele,curr)=>{
      if(typeof curr == 'number'){
    ele.push(curr)
      }else{
        ele.push(...curr)
      }
      return ele;
    
    },[])
  }

}

// Q: Design a custom json. stringify function !

// Difficulty level : hard

// Task :
// :- Design a custom json .stringify function which takes a json input and return a string of that json.
// :- Should take care of nested objects and arrays as well
// :- empty objects also to be accepted


// Example :
// customJSONString({t1:["t1"],t2:{t3:{t4:"t5"}}})
// should return
// '{"t1":["t1"],"t2":{"t3":{"t4":"t5"}}}'

const jsonStr = {t1:["t1"],
t2:{t3:{t4:"t5"}
}};
function customJsonStr(){
 // for(let i =0;i<)
 return function newString(jsonStr){
  for(let ele in jsonStr){
    console.log(ele,Object.keys(jsonStr[ele]),jsonStr[ele])
    if(Object.keys(jsonStr[ele]) == 0){
      // newString(jsonStr[ele])
console.log('i am')
    }else{
    }
  }
 }
  

}
console.log(customJsonStr()(jsonStr))


const JSONStringify = (obj) => {

  const isArray = (value) => {
    return Array.isArray(value) && typeof value === 'object';
  };

  const isObject = (value) => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  };

  const isString = (value) => {
    return typeof value === 'string';
  };

  const isBoolean = (value) => {
    return typeof value === 'boolean';
  };

  const isNumber = (value) => {
    return typeof value === 'number';
  };

  const isNull = (value) => {
    return value === null && typeof value === 'object';
  };

  const isNotNumber = (value) => {
    return typeof value === 'number' && isNaN(value);
  };

  const isInfinity = (value) => {
    return typeof value === 'number' && !isFinite(value);
  };

  const isDate = (value) => {
    return typeof value === 'object' && value !== null && typeof value.getMonth === 'function';
  };

  const isUndefined = (value) => {
    return value === undefined && typeof value === 'undefined';
  };

  const isFunction = (value) => {
    return typeof value === 'function';
  };

  const isSymbol = (value) => {
    return typeof value === 'symbol';
  };

  const restOfDataTypes = (value) => {
    return isNumber(value) || isString(value) || isBoolean(value);
  };

  const ignoreDataTypes = (value) => {
    return isUndefined(value) || isFunction(value) || isSymbol(value);
  };

  const nullDataTypes = (value) => {
    return isNotNumber(value) || isInfinity(value) || isNull(value);
  }

  const arrayValuesNullTypes = (value) => {
    return isNotNumber(value) || isInfinity(value) || isNull(value) || ignoreDataTypes(value);
  }

  const removeComma = (str) => {
    const tempArr = str.split('');
    tempArr.pop();
    return tempArr.join('');
  };


  if (ignoreDataTypes(obj)) {
    return undefined;
  }

  if (isDate(obj)) {
    return `"${obj.toISOString()}"`;
  }

  if(nullDataTypes(obj)) {
    return `${null}`
  }

  if(isSymbol(obj)) {
    return undefined;
  }


  if (restOfDataTypes(obj)) {
    const passQuotes = isString(obj) ? `"` : '';
    return `${passQuotes}${obj}${passQuotes}`;
  }

  if (isArray(obj)) {
    let arrStr = '';
    obj.forEach((eachValue) => {
      arrStr += arrayValuesNullTypes(eachValue) ? JSONStringify(null) : JSONStringify(eachValue);
      arrStr += ','
    });

    return  `[` + removeComma(arrStr) + `]`;
  }

  if (isObject(obj)) {
      
    let objStr = '';

    const objKeys = Object.keys(obj);

    objKeys.forEach((eachKey) => {
        const eachValue = obj[eachKey];
        objStr +=  (!ignoreDataTypes(eachValue)) ? `"${eachKey}":${JSONStringify(eachValue)},` : '';
    });
    return `{` + removeComma(objStr) + `}`;
  }
};

//Q: Write a function which will take array of multiple functions and execute them in left to right fashion

// Difficulty: medium

// Ex: customFn([ fn1,fn2,fn3 ]) should run fn1 first and then fn2 and fn3
 function fn1(){
   console.log('abc')
return ('abc')
}
function fn2(){
  console.log('abca')
  return ('abca')
  }
  function fn3(){
    console.log('abcd')
    return ('abcd')
    }
function customFn(){
 return [ fn1(),fn2(),fn3() ].map(ele =>{ 
    //console.log(ele)
    return ele
  })

}
console.log(customFn())




