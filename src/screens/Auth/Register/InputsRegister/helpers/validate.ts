export const validateName = (value: string) => {
    // Dividir o nome em partes usando espaços como delimitador
    const names = value.split(' ');

    // Verificar se o primeiro nome tem pelo menos 3 letras
    if (names[0].length < 3) {
        return 'O primeiro nome deve ter pelo menos 3 letras';
    }

    // Verificar os nomes subsequentes
    for (let i = 1; i < names.length; i++) {
        if (names[i].length < 2) {
            return 'Os nomes subsequentes não podem ter menos de 2 letras';
        }
    }

    return true; // A validação passou
};
