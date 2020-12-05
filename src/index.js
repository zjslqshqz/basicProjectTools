import _ from 'lodash';
import Icon from './jingao.png';
import './style.scss';
import Data from './data.json'
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    const btn = document.createElement('input'); // 创建一个 button 标签

    // Lodash, now imported by this script
    element.innerHTML = _.join(['你', '好啊'], '');
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    console.log(Data)

    btn.type = 'button'
    btn.value = '点我！！！';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());