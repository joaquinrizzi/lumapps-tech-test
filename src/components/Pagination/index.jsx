import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  FlexBox,
  Orientation,
  Size,
} from "@lumx/react";

export default function PaginationRounded() {
  return (
    <FlexBox orientation={Orientation.horizontal} gap={Size.big} wrap>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </FlexBox>
  );
}
