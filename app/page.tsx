"use client"
import { Button, PasswordInput, TextInput, Title, Box, useMantineTheme } from '@mantine/core'
import { FiLock, FiMail } from "react-icons/fi"
import { Text, Group, PasswordInputProps, Anchor } from '@mantine/core';


export default function Home() {

const theme = useMantineTheme()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={(theme) => ({
        backgroundColor: theme.colors.dark[5],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xl,
        width: "27rem"
      })}>
        <TextInput
          label="Email Address"
          icon={<FiMail />}
          placeholder="test@gmail.com"
          size="lg"
          styles={{
            label: { color: "#6C7293", fontSize: "0.9rem" },
            input: {
              borderColor: "#000",
              color: "#6C7293",
              backgroundColor: "black",
              "&:focus": { borderColor: theme.colors.primary[0] },
              "&::placeholder": { color: "#6C7293" }
            }
          }}
        />
        <PasswordInput
          label="Password"
          icon={<FiLock />}
          placeholder="**********"
          size="lg"
          styles={{
            label: { color: "#6C7293", fontSize: "0.9rem" },
            input: {
              borderColor: "#000",
              backgroundColor: "black",
              "&:focus": { borderColor: theme.colors.primary[0] },
              color: "#6C7293",
            }
          }}
          mt={15}
        />
        <Button size="lg" fullWidth mb={30} mt={15}
         sx={(theme)=> ({
           backgroundColor: theme.colors.primary,
           ":hover": {
            backgroundColor: theme.colors.primary[7]
          }
        })}>
          Login
        </Button>
      </Box>
    </Box>
  )
}
