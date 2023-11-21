import React, { useState } from "react";
import { FlexBox, Alignment, Orientation, Size, TextField } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";

const Search = () => {
  
  const [query, setQuery] = useState("");

  return (
    <div >
      <FlexBox vAlign={Alignment.right}>
        <TextField
          orientation={Orientation.horizontal}
          gap={Size.medium}
          value={query}
          onChange={setQuery}
          icon={mdiMagnify}
          placeholder="Search"
        />
      </FlexBox>
    </div>
  );
};

export default Search;
