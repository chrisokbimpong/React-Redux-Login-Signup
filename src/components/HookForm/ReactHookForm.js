import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

type formValues = {
  fullname: string,
  email: string,
  age: number,
  password: string,
  confirmPassword: string,
};

export const ReactHookForm = () => {
  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      age: {},
      password: "",
      confirmPassword: "",
    },
  });

  const { register, handleSubmit, formState } = form;

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const { errors } = formState;

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        direction: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          width={300}
          sx={{
            display: "flex",
            flexDirection: "column",
            left: "50%",
            top: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <TextField
            label="Fullname"
            color="secondary"
            type="text"
            focused
            {...register("fullname")}
          />
          <TextField
            label="Email"
            color="secondary"
            type="email"
            focused
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Age"
            color="secondary"
            type="number"
            focused
            {...register("age")}
          />
          <TextField
            label="Password"
            color="secondary"
            type="password"
            focused
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            color="secondary"
            type="password"
            focused
            {...register("confirmPassword")}
          />
          <Button type="submit" variant="contained" color="error">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
