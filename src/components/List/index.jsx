import { mdiDotsHorizontal } from "@lumx/icons";
import {
  Size,
  Avatar,
  Emphasis,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  FlexBox,
  Chip
} from "@lumx/react";
import React, { useState, useEffect } from "react";

const Listitems = ({ query, title }) => {
  const [characters, setCharacters] = useState(null);

  const url =
    "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
    query +
    "&limit=4&apikey=8fb61ed0d8ae4cc76943c8d2b8e2ed9c";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacters(data.data.results);
      });
  }, []);

  return (
    <>
      <List>
        <ListSubheader>{title}</ListSubheader>
        <FlexBox>
          {characters &&
            characters.map((result, index) => (
              <ListItem
                className="flex-box-joaquin"
                key={index}
                size={Size.huge}
                before={
                  <Avatar
                    alt={result.name}
                    image={result.thumbnail.path + ".jpg"}
                    size={Size.l}
                  />
                }
                after={
                  <IconButton
                    label="More"
                    emphasis={Emphasis.low}
                    icon={mdiDotsHorizontal}
                  />
                }
              >
                <div>
                  <h3>
                    <span>{result.name}</span>
                  </h3>
                </div>
                <div>
                  <span className="lumx-color-font-dark-L2">
                    {result.description}
                  </span>
                </div>
                <div>
                  <Chip theme="light" size={Size.m} >
                    
                    {"#comics: " + result.comics.returned}
                  </Chip>
                  <Chip size={Size.m} theme="light">
                    {"#series: " + result.series.returned}
                  </Chip>

                  <Chip size={Size.m}  theme="light">
                    {"#stories: " + result.stories.returned}
                  </Chip>
                </div>
              </ListItem>
            ))}
        </FlexBox>
      </List>
    </>
  );
};


export default Listitems;
