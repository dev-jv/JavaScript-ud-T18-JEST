const cliente = {
    nombre: 'Dean Winchester',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });
    test('Es Dean Winchester', () => {
        expect(cliente.nombre).toBe('Dean Winchester');
    });
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Dean');
    });
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });

})