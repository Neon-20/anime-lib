"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const fetchAnimes = async(page:number) =>{
    const apiURL = `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
    const response = await fetch(apiURL);
    const data = await response.json();

    return data.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
    ));
}

export default fetchAnimes;