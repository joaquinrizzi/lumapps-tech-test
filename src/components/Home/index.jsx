import React, { useState } from "react";
import { FlexBox, Orientation, Size, TextField } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";
import Listitems from "../List";


const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="lumx-spacing-padding-horizontal-huge">
      <FlexBox orientation={Orientation.horizontal} gap={Size.big} wrap>
        <TextField
          orientation={Orientation.vertical}
          gap={Size.big}
          value={query}
          onChange={setQuery}
          icon={mdiMagnify}
          placeholder="Search"
        />
      </FlexBox>
      <FlexBox orientation={Orientation.horizontal} gap={Size.big} wrap
        
        fillSpace
      >
        {query && <Listitems query={query} title={"Super Heros starting with '" + query + "'"} />}
      </FlexBox>
    </div>
  );
};

export default Home;
