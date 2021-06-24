const randomCity = require('../index')

describe('Probar funcionalidades de RandomCities', () => {
    test('Probar la funcion', () => {
        expect(typeof(randomCity())).toBe('string')
    })
    test('Comporbar que no existe una ciudad', () =>{
        expect(randomCity()).not.toMatch(/Cordoba/)
    })
})