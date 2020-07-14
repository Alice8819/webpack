import { getProvinces } from '../utils/getData';

getProvinces().then(res => res.json()).then(res => {
    for (const province of res) {
        const li = $('<li>')
        const a = $('<a>');
        a.prop('href',`/detail.html?name=${province.simpleName}&id=${province.id}`)
        a.text(province.simpleName).appendTo(li);
        $('.provinces').append(li);

    }
})
