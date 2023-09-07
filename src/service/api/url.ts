const publicKey = '6c517ded538f380f56f38d557ba36b63';
const privateKey = 'b3f627887265b2c023a84b7a971a864d60f004bd';
import md5 from 'js-md5';

// Api da Marvel precisa de um hash e por isso criei essa função

function BaseToURl() {
    // Get the current timestamp
    const ts = new Date().getTime().toString();

    const hash = md5.create();

    // Add the timestamp, public key, and private key to the hash
    hash.update(ts + privateKey + publicKey);

    return {
        ts,
        apikey: publicKey,
        hash: hash.hex(),
    };
}

// Funções que retornam as urls para as requisições da API da Marvel com intuito de facilitar a manutenção do código sem a necessidade de ficar digitando a url, com limitação de 22 itens por página

export function getCharacters() {
    const { ts, apikey, hash } = BaseToURl();
    return `/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

export function getCharacter(id: number) {
    const { ts, apikey, hash } = BaseToURl();
    return `/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;
}

export function getComics() {
    const { ts, apikey, hash } = BaseToURl();
    return `/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

export function getEvents() {
    const { ts, apikey, hash } = BaseToURl();
    return `/events?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

export function getSeries() {
    const { ts, apikey, hash } = BaseToURl();
    return `/series?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

// Funções que retornam a url para pegar os quadrinhos

export function getComicsFromCharacter(id: number) {
    const { ts, apikey, hash } = BaseToURl();
    return `/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

export function getComicsFromEvents(id: number) {
    const { ts, apikey, hash } = BaseToURl();
    return `/events/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

export function getComicsFromSeries(id: number) {
    const { ts, apikey, hash } = BaseToURl();
    return `/series/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
}

// Como não temos imagens para a maioria das histórias e os quadrinhos não apresentam eventos também, escolhi
// que o usuário ao clicar em um card relacionando no quadrinho, não terá nenhum carrossel de quadrinhos

// export function getEventsFromComics(id: number) {
//     const { ts, apikey, hash } = BaseToURl();
//     return `/comics/${id}/stories?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=22`;
// }
