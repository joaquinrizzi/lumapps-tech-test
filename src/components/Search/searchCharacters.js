export const searchCharacters = async (query,page) => {
  
  let limit = page * 4; 
  
  const apiKey = "d9f1d673d0e1fafc331795366e182c7b";
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +

    query +
    "&limit=" + 
    limit + 
 /*   "&offset=" +
    offSet +
  */  "&apikey=" +
    apiKey;

  console.log("URL requested: " + url);

  const res = await fetch(url);
  const data = await res.json();
  return data.data.results;
};
