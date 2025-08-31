import { Box, Grid, Stack } from "@mui/material";

import BlogCard from "../../components/card/BlogCard";

const Blog = () => {
  return (
    <Stack sx={{mb:'120px'}}>
      <Box
        sx={{
          backgroundImage: 'url("/blog-bg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <h1 className=" text-white text-5xl font-bold flex justify-center items-center h-full">
          Our Blog
        </h1>
      </Box>

      <Box sx={{my:'80px',ml:'80px'}}>
          <Grid container rowSpacing={1}>
            <Grid size={4}>
              <BlogCard
                image={"/blog-1.jpg"}
                date={"16 February 2020"}
                title={"What Curling Irons Are The Best Ones"}
              />
            </Grid>
            <Grid size={4}>
              <BlogCard
                image={"/blog-2.jpg"}
                date={"21 February 2020"}
                title={"Eternity Bands Do Last Forever"}
              />
            </Grid>
            <Grid size={4}>
              <BlogCard
                image={"/blog-3.jpg"}
                date={"28 February 2020"}
                title={"The Health Benefits Of Sunglasses"}
              />
            </Grid>
            <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-4.jpg"}
                date={"16 February 2020"}
                title={"Aiming For Higher The Mastopexy"}
              />
            </Grid>
            <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-5.jpg"}
                date={" 21 February 2020"}
                title={"Wedding Rings A Gift For A Lifetime"}
              />
            </Grid>
            <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-6.jpg"}
                date={"28 February 2020"}
                title={"The Different Methods Of Hair Removal"}
              />
            </Grid>
             <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-7.jpg"}
                date={"16 February 2020"}
                title={"Hoop Earrings A Style From History"}
              />
            </Grid>
            <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-8.jpg"}
                date={"21 February 2020"}
                title={"Lasik Eye Surgery Are You Ready"}
              />
            </Grid>
            <Grid size={4} mt={'160px'}>
              <BlogCard
                image={"/blog-9.jpg"}
                date={"28 February 2020"}
                title={"Lasik Eye Surgery Are You Ready   "}
              />
            </Grid>
          </Grid>
      </Box>
    </Stack>
  );
};

export default Blog;
