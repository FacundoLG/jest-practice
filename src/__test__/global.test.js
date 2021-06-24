const text = 'hola Mundo'
const fruits = ['apple','banana','tomato'] 
test('Debe conterer un texto',() =>{
    expect(text).toMatch(/Mundo/)
})
test('Tenemos una banana', () => {
    expect(fruits).toContain('banana')
})

test('Mayor que', ()=>{
    expect(10).toBeGreaterThan(9)
})

test('Verdadero', () =>{
    expect(true).toBeTruthy()
})

const reverseString = str =>{
    return new Promise((resolve,reject) =>{
        if(!str) {
            reject( Error('error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}
test('Probar una promesa', () =>{
    return reverseString('Hola')
        .then(string =>{
            expect(string).toBe('aloH')
        })
})