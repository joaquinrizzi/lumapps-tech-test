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
import React from "react";


const Listitems = ({ characters, title }) => {

  //console.log(characters);

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
