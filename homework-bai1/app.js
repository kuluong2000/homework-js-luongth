// 1. Khai báo 5 tên biến đúng, 5 tên biến sai
// khai báo 5 tên biến đúng
let number;
let lastName;
let first_Name;
var $info;
const _pi;
// khai báo 5 tên biến sai
let Number;
let 7;
let const;
let 1name;
const first%Name;
//Bài 2: Làm 5 bài toán sử dụng 5 toán tử: + - * / %
let x =4; 
let y =2;
let total;
console.log(total = x + y);
console.log(total = x - y);
console.log(total = x * y);
console.log(total = x / y);
console.log(total = x % y);
/* 
3. Tính kết quả các bài tập sau đây, in ra màn hình và giải thích tại sao lại ra được kết quả như vậy:
   3.1 x = 5. Tính: ++x + x++ - --x - x--
   3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y
   3.3 x = 10, y = 12, z = 16. Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--
   enter, tính lần 2 bài 3.3: ++x - x++ + z++ + ++y - y-- 
*/
// 3.1:++x + x++ - --x - x--  -> kết quả là 0
/* 
    --- giải thích --
    lúc đầu x có giá trị 5, sau ghi gặp ++x thì giá trị chạy lên 6,
    rồi + x++( giá trị lúc này của x sẽ nhận là 6) sẽ thành 12,
    sau khi cộng xong thì giá trị của x sẽ lên là 7, lúc này gặp - --x( do có --x nên lúc này x sẽ giảm 1 đơn vị trước khi thực hiện phep toán thì x lúc này giảm xuống là 6 ) sẽ là 12- 6 là bằng 6 và - x-- thì kết quả sẽ là 6-6 là  0
*/
// bài 3.2: ++y - y++ + x++ + x-- - --x - --y -> -3

/* 
    --- giải thích --
    giá trị ban đầu của x là 6 và y là 10,
    trước khi thực hiện phép cộng thì giá trị của y tăng lên 1 ( vi ++y) lúc này y sẽ là 11, 11 -11 sẽ là 0, sau khi thực hiện xong phép trừ thì y tăng lên 12( tại vì y++), giá trị lúc này của x là 6, khi thực hiện phép cộng thì giá trị của biến x-- sẽ là 7,0 +  6 + 7 sẽ là 13, sau khi thực hiện phép công thì biến x trở về lại 6 tại vì (x-- nên giá trị biến x sẽ giảm 1 đơn vị), tiếp theo - --x( giá trị X lúc này sẽ là 5): 0 + 6 + 7 - 5 là 8, tiếp tục phép tính, do có --y nên giá trị y lúc này sẽ là 11- > 0 + 6 + 7 - 5 - 11 = -3
*/
// bài 3.3 tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x-- ->68
/* 
    --- giải thích --
    giá trị ban đầu của x là 10 và y là 12, và z là 16;
     sau khi thực hiện phép công giữa x++ + z-- thì lúc này sẽ là 10 + 16 và sau khi thực hiện tính toán thì  giá trị x lúc này sẽ tăng 1đơn vị là lên 11 và giá trị của z sẽ giảm 1 đơn vị là 15, tiêp theo gặp - --x(thì giá trị x lúc này sẽ giảm xuống 1 đơn vị trước khi thực hiện phép trừ thì giá trị x lúc này sẽ là 10) nên sẽ là  10 + 16 - 10, tiếp theo  + --Y(thì giá trị y lúc này sẽ giảm xuống 1 đơn vị trước khi thực hiện phép trừ thì giá trị x lúc này sẽ là 11) thì lúc này phép tính sẽ là 10 + 16 - 10 + 11, tiếp theo - y--( do dấu -- nằm phía sau biến Y nên lúc này giá trị của y vẫn là 11) thì lúc này phép tính sẽ là10 + 16 - 10 + 11 - 11, sau khi thức hiện tính toán thì giá trị y lúc này sẽ là 10,tiếp theo là + ++y( do dấu ++ nằm phía trước Y nến lúc này giá trị của y sẽ tăng lên 11) thì phép tính sẽ là 10 + 16 - 10 + 11 - 11 + 11, tiếp theo là + ++z( do dâu ++ đứng phía trước z nên giá trị z lúc này sẽ tăng lên 16) thì phép tính sẽ là
     10 + 16 - 10 + 11 - 11 + 11 + 16, tiếp theo + --z(do dâu ++ đứng phía trước z nên giá trị z lúc này sẽ tăng lên 15) thì phép tính sẽ là 10 + 16 - 10 + 11 - 11 + 11 + 16 + 15, tiếp theo là + x--(do dâu ++ đứng phía trước X nên giá trị X lúc này vẫn giữ nguyên là 10) thfi phép tính sẽ là 10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 +10 = 68;
*/
// tính lần 2 bài 3.3: ++x - x++ + z++ + ++y - y--  -> 15

/* 
    --- giải thích --
    giá trị ban đầu của x là 9 và y là 11, và z là 15;
    do gặp ++x lên giá trị lúc này của x là 10 - X++ thì phép tính sẽ là 10 - 10( giá trị của x lúc này sẽ giảm đi 1 đơn vị sẽ thành 9), tiếp theo là + z++ thì phép tính sẽ là 10 - 10 + 15 ( lúc này giá trị của Z sẽ tăng lên 1 là 16), tiếp theo là  + ++y( giá trị Y lúc này sẽ tăng lên 1 nên giá trị của Y là 12) thì phép tính sẽ là 10 -10 + 15 + 12, tiếp theo là - y--( do dâu -- nằm sau Y nên giá trị của Y lúc này sẽ là 12) thì phép tính sẽ là 10 -10 + 15 + 12 - 12 = 0
*/


// bài 4 Khai báo 5 biến với 5 kiểu dữ liệu 
let number =1;
let name = 'trần hữu lương';
let array = [1,2,3,4,5];
let obj = {name: 'lương', age: 21};
let bool = true;
// 5. Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]
let arr = [1,2,3,4,5,6,7,8,9,10];
  // 5.1 Tính tổng (+) phần tử đầu tiên (0) và phần từ thứ 2 (1)
    let sum =  arr[0] + arr[1]; // 1+2= 3
   //5.2 Tính tích (*) phần tử đầu tiên (0) và phần từ cuối cùng (9)
   let total =  arr[0] * arr[9]; //1* 10 = 10
//  6. Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite
    let info = { firstName:'Lương' , lastName:'Trần', age: 21 , favorite: 'game'};
// 6.1 Thay đổi firstName, lastName với text bất kỳ
    info.firstName = 'Mai';
    info.lastName ='Thị';
//    6.2 In ra màn hình firstName + lastName mới
    console.log(`firstName: ${info.firstName} và lastName: ${info.lastName}`);
