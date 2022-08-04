const mat = require("./Matematica")
const axios = require('axios');


beforeAll(() => {
    matematica = new mat()
});

test("Palavra", () => {
    expect(matematica.compara('Bruna')).toBe('Bruna');
})

test("Teste soma, 1+2=3", () => {
    expect(matematica.soma(1, 2)).toBe(3);
})

test("Teste sub, 2-1=1", () => {
    expect(matematica.sub(2, 1)).toBe(1);
})

test("Teste div, 10/2=5", () => {
    expect(matematica.div(10, 2)).toBe(5);
})

//TO EQUAL
test('Valida objeto', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});


//NULL
test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});


//Numeros
test('Valida numeros', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

// String
test('não existe I em team', () => {
    expect('team').not.toMatch(/I/);
});

test('mas existe "stop" em Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//Exceção
function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
}

test('compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // Você também pode usar a mensagem exata de erro ou uma regexp
    expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});

//Requisição api web
test("Assíncrono Promises", () => {
    return axios.get('https://goweather.herokuapp.com/weather/Curitiba').then((rs) => {
        //console.log(rs.data)
        expect(rs.data.wind).toBeDefined() // adicionar validação certa
    }).catch((err) => {
        console.log(err)
    })
})

test("Assíncrono Async/Await", async() => {
        const data = await axios.get('https://goweather.herokuapp.com/weather/Curitiba')
        expect(data).not.toBeNull()
})