const cliente = {
    nombre: 'Dean Winchester',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al Cliente', () => {

    test('Es Dean Winchester', () => {
        expect(cliente).toMatchSnapshot();
    });

}) 