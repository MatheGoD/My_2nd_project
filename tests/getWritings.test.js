const { removeAllListeners } = require('nodemon');
const request = require('supertest');

const { createApp } = require('../app');
const { appDataSource } = require('../src/models/data-source');

describe('Get All Writings', () => {
    let app;

    beforeAll(async () => {
        app = createApp();
        await appDataSource.initialize();
    });

    afterAll(async () => {
        await appDataSource.destroy();
    });
    test('Get All Writings', async () => {
        await request(app)
            .get('/writings')
            .expect(200)
            .expect({
                result: [
                    {
                        id: 1,
                        title: "'사장'에서 풀스텍까지",
                        content: '10주만에 완성하기',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Oh',
                    },
                    {
                        id: 2,
                        title: '코딩의 중독은 이런 것',
                        content: '세상 모든 것은 코딩에서부터',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.Kim',
                    },
                    {
                        id: 3,
                        title: '망나니 개발자 인생',
                        content: '망나니 개발자 되는 법 1 : 그냥 복붙을 해라',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Lee',
                    },
                    {
                        id: 4,
                        title: 'Nodejs로 하는 카카오 로그인',
                        content: '난이도 : 쉬움',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.LeeY',
                    },
                    {
                        id: 5,
                        title: '자바스크립트란 무엇인가?',
                        content: '그냥 하는 것',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.Kimbo',
                    },
                    {
                        id: 6,
                        title: 'React 껌이지!',
                        content: '껌껌껌',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Oh',
                    },
                    {
                        id: 7,
                        title: '풀스텍 그까이거 뭐',
                        content: '1달만에 가능하지',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.Kim',
                    },
                    {
                        id: 8,
                        title: 'AWS로 100억 벌었어요',
                        content: '상엽님 AWS 계정 해킹해서 비트코인 채굴했어요',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Lee',
                    },
                    {
                        id: 9,
                        title: '해킹으로서의 삶',
                        content: '우리 모두 해커가 되어보자',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.LeeY',
                    },
                    {
                        id: 10,
                        title: 'MySQL 결합집합은 이렇게',
                        content: '안된다',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Kimbo',
                    },
                ],
            });
    });
    test('Writings Filtered By Cate_id', async () => {
        await request(app)
            .get('/writings?cate_id=2')
            .expect(200)
            .expect({
                result: [
                    {
                        id: 2,
                        title: '코딩의 중독은 이런 것',
                        content: '세상 모든 것은 코딩에서부터',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.Kim',
                    },
                    {
                        id: 9,
                        title: '해킹으로서의 삶',
                        content: '우리 모두 해커가 되어보자',
                        header_image: 'https://picsum.photos/200/300',
                        price: 0,
                        authors: 'Mr.LeeY',
                    },
                ],
            });
    });
    test('Writings Filtered By Cate_id and Price', async () => {
        await request(app)
            .get('/writings?cate_id=3&price=1000')
            .expect(200)
            .expect({
                result: [
                    {
                        id: 3,
                        title: '망나니 개발자 인생',
                        content: '망나니 개발자 되는 법 1 : 그냥 복붙을 해라',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Lee',
                    },
                    {
                        id: 10,
                        title: 'MySQL 결합집합은 이렇게',
                        content: '안된다',
                        header_image: 'https://picsum.photos/200/300',
                        price: 1000,
                        authors: 'Mr.Kimbo',
                    },
                ],
            });
    });
});
