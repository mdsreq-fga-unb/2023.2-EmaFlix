const { test, expect } = require('@jest/globals');

function isFieldFilled(field) {
    return field !== null && field !== '';
}

// Escrever um teste que verifica se a função retorna verdadeiro quando o campo está preenchido
test('returns true when field is filled', () => {
    expect(isFieldFilled('filled field')).toBe(true);
});

// Escrever um teste que verifica se a função retorna falso quando o campo não está preenchido
test('returns false when field is not filled', () => {
    expect(isFieldFilled('')).toBe(false);
});