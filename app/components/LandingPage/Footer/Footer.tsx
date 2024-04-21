"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { visuallyHidden } from "@mui/utils";
import Image from "next/legacy/image";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Link from "next/link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="https://ultrabalaton.hu/">ultrabalaton&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Link href="/" passHref>
              <div
                style={{
                  position: "relative",
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                }}
              >
                {" "}
                {/* Ensuring the link covers the image */}
                <Image
                  src="/react.svg"
                  alt="Site Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            <Typography
              variant="body2"
              fontWeight={600}
              gutterBottom
              sx={{ mt: 2 }}
            >
              Join the newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <InputLabel htmlFor="email-newsletter" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                placeholder="Your email address"
                inputProps={{
                  autocomplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Product
          </Typography>
          <Link href="#">Features</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Highlights</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">FAQs</Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Company
          </Typography>
          <Link href="#">About us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Press</Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Legal
          </Typography>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Contact</Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link href="#">Privacy Policy</Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link href="#">Terms of Service</Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton color="inherit" href="#" sx={{ alignSelf: "center" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="#" sx={{ alignSelf: "center" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="#" sx={{ alignSelf: "center" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
