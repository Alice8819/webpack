import style1 from './assets/style1.css';
import style2 from './assets/style2.css';

console.log(style1,style2);

let divs = document.getElementsByTagName('div');

divs[0].className = style1.c1;
divs[1].className = style2.c1

// style-loader 处理结果
// Object
// c1: "_1TyUMnubgEBLCDM5y3ayYM"
// c2: "_2zx-GIxJrLp9GYr2vZuLcC"

// css-loader 处理结果
// ._1TyUMnubgEBLCDM5y3ayYM{
//     color:blue;
// }
// ._2zx-GIxJrLp9GYr2vZuLcC{
//     color:yellow;
// }