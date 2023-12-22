import React, { useState } from "react";
import { FlexBox, Orientation, Size, TextField } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";
import Listitems from "../List";
import { searchCharacters } from "../Search/searchCharacters";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState(null);

  // triggered when pressing Enter key to search characters receiving the value of the TextField as prop
  const handleKeyEnter = (value) => {  
    
    let nextPage = 1;
    
    console.log("Value queried: " + value);
    console.log("Current page #: "+ page);

    

    searchCharacters(value,1).then((results) => {
      console.log(results);
      setCharacters(results);
      
      
    });

    setPage(nextPage);

    //console.log(characters);
  };

  // expands the search of characters with 4 additional items
  const fetchMoreData = () => {

    let nextPage = page + 1;
    console.log("scrolling");
    console.log("Current page #: "+ page);
    console.log("Next page #: " + nextPage);

    searchCharacters(query,nextPage).then((results) => {
      console.log(results);
      setCharacters(results);
      //console.log(characters);
      
    });

    setPage(nextPage);
    //console.log("Page #: "+ page);


  };


  return (
    <div>
      <FlexBox
        vAlign="left"
        hAlign="center"
        orientation={Orientation.horizontal}
        gap={Size.big}
      >
        <TextField
          orientation={Orientation.horizontal}
          gap={Size.big}
          value={query}
          onChange={setQuery}
          icon={mdiMagnify}
          placeholder="Search"
          onKeyPress={(e) => {
            
            if (e.key === "Enter") {                      
              handleKeyEnter(query);
            }
          }}
        />
      </FlexBox>
      <FlexBox>
        {characters  && (               
          
          <InfiniteScroll
          
            dataLength={characters.length} 
            next={() =>{

              console.log("dataLength: " + characters.length);
              fetchMoreData();
            }}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={              
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            /*{pullDownToRefresh={true}
            pullDownToRefreshContent={<h4>Pull down to refresh</h4>}
          }*/
          >
          <Listitems
            characters={characters}
            title={"Super Heros starting with '" + query + "'"}
          />
        
          </InfiniteScroll>
        )}
      </FlexBox>
    </div>
  );

  /*
  return (
    <div>
      <FlexBox
        vAlign="left"
        hAlign="center"
        orientation={Orientation.horizontal}
        gap={Size.big}
      >
        <TextField
          orientation={Orientation.horizontal}
          gap={Size.big}
          value={query}
          onChange={setQuery}
          icon={mdiMagnify}
          placeholder="Search"
          onKeyPress={(e)=> {
            if(e.key === 'Enter'){
              handleKeyEnter(query);
            }
          }
        }
          
        />
      </FlexBox>
      <FlexBox
        vAlign="left"
        hAlign="center"
        orientation={Orientation.horizontal}
        gap={Size.big}
      >
        {characters && (
          <Listitems
            characters={characters}
            title={"Super Heros starting with '" + query + "'"}
          />
        )}
      </FlexBox>
    </div>
  );

  */
}

export default Home;
