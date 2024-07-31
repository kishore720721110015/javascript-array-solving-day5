// // 1.Array creation and initialization

// let arr = [1, 2, 3, 4, 5, 6]
// console.log("after creation of array: "+arr);

// // 2.Add elements in array
// let arr1=[1,2,3,4,5,6]
// arr1.push(7);
// console.log("push operation: "+arr1);
// arr1.unshift(0);
// console.log("unshift operation: "+arr1);
// arr1.shift(0);
// console.log("shift operation: "+arr1);
// arr1.pop();
// console.log("pop operation: "+arr1);

// //3. Array searching

// // 3.1 indexof
// let arr2=[1,2,3,4,5,6,7,8]
// console.log("indexof method: "+arr2.indexOf(5));
// // 3.2 find()
// let arr3=[1,2,3,4,5,6,7,8]
// console.log("find method: "+arr3.find((x)=>x==5));
// // 3.3 includes
// let arr4=[1,2,3,4,5,6,7,8]
// console.log("includes method: "+arr4.includes(4));

// // 4.Array filter
// let arr5=[1,2,3,4,5,6,7,8]
// function check(arr5){
//     return arr5%5==0;
// }
// console.log("filter method: "+arr5.filter(check));

// // 6.Array sorting

// let arr6=[8,7,6,4,5,2,3]
// console.log("sort method: "+arr6.sort());

// // 6.1 Array reverse
// let arr7=[8,7,6,4,5,2,3]
// console.log("reverse method: "+arr7.reverse());

// // 5.Map
// let arr8=[8,7,6,4,5,2,3]
// console.log("map method: "+arr8.map((x)=>x+1));

// // 7. Array join
// let arr9=[8,7,6,4,5,2,3]
// console.log("join method: "+arr9.join("-"));
// // 7.1 Array spliting
// let arr10="8-7-6-4-5-2-3";
// console.log("split method: "+arr10.split("-"));

// // 10. Array maximum
// let arr11=[5,4,8,7,9,5,3,6]
// arr11.sort();
// console.log("maximum method: "+arr11[arr11.length-1]);
// // 10.1 Array minimum
// let arr12=[5,4,8,7,9,5,3,6]
// arr12.sort();
// console.log("minimum method: "+arr12[0]);

// // 14.Array merging
// let arr14=[5,4,8,7,9,5,3,6]
// let arr15=[1,2,3,4,5,6,7,8]
// console.log("merge method: "+arr14.concat(arr15));

// // 15.finding the index of the first occurance
// let arr16=[5,4,8,7,9,5,3,6]
// console.log("index method: "+arr16.indexOf(5));

// // 16.new array with given length
// let arr13=[];
// let num=6;
// for(let i=0;i<num;i++)
// {
//     arr13[i]=prompt("Enter the number");
// }
// console.log("after initialization of array: "+arr13)

// // 21.Array intersection of two sets
// let arr17=[5,4,8,7,9,5,3,6]
// let arr18=[1,2,3,4,5,6,7,8]
// console.log("intersection method: "+arr17.filter((x)=>arr18.includes(x)))

// day 3

// // 22.Array slice
// let arr19=[5,4,8,7,9,5,3,6]
// console.log("slice method: "+arr19.slice(2,5));

// // 18.finding intersection of two arrays
// let arr20=[5,4,8,7,9,5,3,6]
// let arr21=[1,2,3,4,5,6,7,8]
// console.log("intersection method: "+arr20.filter((x)=>arr21.includes(x)))

// // 11.Array Flattening
// let  arr22=[[1,2],[3,4],[5,6],[7,8]]
// console.log("flattening method: "+arr22.flat());

// // 24.implementing a stack with arrays;

// function ent(num1){
//     return arr24.push(num1);
// }
// function pop(){
//     return arr24.pop();
// }
// let arr24=[1,2,3,4,5,6];
// console.log(ent(8));
// console.log("after push in stack",arr24);
// console.log(pop());
// console.log("after pop method",arr24); 

// // 23.implementing a queue with arrays

// function ent1(nu1){
//     return arr01.push(nu1);
// }
// function shift(){
//     return arr01.shift();
// }
// let arr01=[1,2,3,4,5,6];
// console.log(ent1(7));
// console.log("after push in queue",arr01);
// console.log(shift());
// console.log("after shift method",arr01);

// // 33.Rotating an array of an range
// let arr1=[1,2,3,4,5];
// console.log("Before rotating an array",arr1);
// let len1=arr1.length -1;
// let j=0;
// let k=len1;
// while(j<k){
//     let temp=arr1[j];
//     arr1[j]=arr1[k];
//     arr1[k]=temp;
//     j++;
//     k--;
// }
// console.log("rotating an array : "+arr1);

// // 20.Grouping array elements
// let arr2=[1,2,3];
// let arr3=[4,5,6];
// // console.log(arr2.concat(arr3));
// for(let i=0;i<arr3.length;i++)
//     arr2.push(arr3[i]);
// console.log(arr2);

// //34. Generating the array of range
// function arrayran(start,end){
//     let arr4=[];
//     for(let i=start;i<=end;i++)
//         arr4.push(i);
//     return arr4;
// }
// console.log("After the given range of array",arrayran(1,10));

//   DAY 05

// 8.Array destructuring

// const obj1={
//     name:'kishore',
//     age:20,
//     city:'madurai'
// }

// const obj2={name,age,city}=obj1;
// console.log("ARRAY DESTRUCTURING OUTPUT :");
// console.log(name);
// console.log(age);
// console.log(city);


// // 9.Array Spreading

// const arr1=[1,2,3,4,5];
// const arr2=[6,7,8,9,0];
// const comb=[...arr1,...arr2];
// console.log("ARRAY SPREADING OUTPUT :");
// console.log(comb);

// // 12.checking array elements

// let check=[1,2,3,4,5,6,7];
// let flag=0;
// for(let i=0;i<check.length;i++)
// {
//     if(check[i]==6){
//         flag=1;
//         break;
//     }
// }
// console.log("CHECKING ARRAY ELEMENT : ");
// if(flag==1){
//     console.log("it is presented in array");
// }
// else{
//     console.log("it is not presented in array");
// }

// // 29.Removing items of array by index

// let arr3=[1,2,3,4,5,6];
// function del(pos){
//     for(let i=pos+1;i<arr3.length;i++){
//         arr3[i-1]=arr3[i];
//     }
//     arr3.pop();
//     console.log("Removing items of array by index");
//     console.log(arr3);
// }
// del(3);

// // 32.Finding the longest string

// function lon(str)
// {
//     let word=str.split(" ");
//     let max=0,lar,i;
//     for(i=0;i<word.length;i++)
//     {
//         if(word[i].length>max)
//         {
//             max=word[i].length;
//         }
//     }
//     for( i=0;i<word.length;i++)
//     {
//         if(word[i].length==max)
//         {
//                 lar=word[i];
//         }
//     }
//     return lar;
// }
// console.log("LONGEST WORD");
// console.log(lon("I am a football player"));

// 21.array intersection of two sets
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
let intersection = [...set1].filter(x => set2.has(x));
console.log("Array Intersection : ")
console.log(intersection);

// 27.Comparing two arrays of equality

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 5];
console.log("Array Equality : ")
console.log(arr1 == arr2);
console.log(arr1 == arr3);

// 30.inserting items at specific position
let arr = [1, 2, 3, 4, 5];
let index = 3;
let item = 10;
console.log("Array before insertion : ")
console.log(arr);
console.log("Array after insertion : ")
arr.splice(index, 0, item);
console.log(arr);

// 28.converting array of object
let arr5 = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" }
    ];
    console.log("Array of Object : ")
    console.log(arr5);
    
    
// 19.finding the difference between two arrays
let arr6 = [1, 2, 3, 4, 5];
let arr7 = [4, 5, 6, 7, 8];
console.log("Array Difference : ")
console.log([...new Set(arr6)].filter(x => !arr7.includes(x))); 


























