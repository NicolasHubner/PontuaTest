import JWT from 'expo-jwt';

export const secretKey = 'SIMULANDO_SECRET_KEY';

interface LoginProps {
    email: string;
    password: string;
}

export async function UseFakeLogin({ email, password }: LoginProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.length > 3 && password.length > 3) {
                const token = JWT.encode(
                    {
                        email,
                        password,
                    },
                    secretKey
                );
                resolve({ token: token });
            } else {
                reject('Credenciais inválidas');
            }
        }, 1000); // Simula um atraso de 1 segundo, como uma resposta real do servidor
    });
}
