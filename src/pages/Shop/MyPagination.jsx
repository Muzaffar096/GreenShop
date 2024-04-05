import { Pagination, Stack } from "@mui/material";

export default function MyPagination({
   count,
   handlePaginationChange,
   page,
}) {
   return (
      <Stack className=" float-right lg:float-none" spacing={2}>
         <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={handlePaginationChange}
            page={page}
         />
      </Stack>
   );
}
