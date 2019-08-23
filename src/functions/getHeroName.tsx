export const getHeroes = () => {
    return fetch('https://dotabuff.herokuapp.com/getHeroes')
    .then(res => res.json())
    .then(data => data.result.heroes)
}

export const getHeroName = (heroes: any, hero_id: number) => 
    heroes.filter((hero: any) => hero.id === hero_id)[0].name.replace('npc_dota_hero_','');
 
