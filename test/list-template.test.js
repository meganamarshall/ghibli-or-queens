import { makeListTemplate } from '../src/list-component.js';
const test = QUnit.test;

test('make list dynamically', assert => {
    //arrange
    const film = {
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        'title': 'Castle in the Sky',
        'description': 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95'
    };

    const expected = /*html*/
    `<li><a href="film-detail.html?id=2baf70d1-42bb-4437-b551-e5fed5a87abe">Castle in the Sky </a>(1986)</li>`;
    //act
    const result = makeListTemplate(film);
    //assert
    assert.htmlEqual(result, expected);

});