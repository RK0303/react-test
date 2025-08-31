import { Stack } from "@mui/material";

export default function NotFound() {
    return(
    <Stack sx={{
          backgroundImage:'url("/404page.jpg")',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat',
          height:'100vh'
        }}>

    </Stack>
    );
}

