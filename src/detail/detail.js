import { getDetail } from '../utils/getData';
import queryString from 'query-string';

const idObj = queryString.parse(location.search);
$('.title').text(idObj.name);
getDetail(idObj.id).then(res => res.json()).then(res => {
    for (const city of res) {
        $('<dd>').text(city.simpleName).appendTo('.container dl');
    }
})