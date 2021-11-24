import React, { useState, useContext } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";

import { Formik } from "formik";
import authApi from "../api/Auth";
import ErrorMessage from "../forms/ErrorMessage";

import UseAuth from "../app/auth/UseAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = UseAuth();
  const [loginField, setLoginField] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginField(true);
    setLoginField(false);
    auth.logIn(result.data);
  };
  return (
    <Screen style={Styles.container}>
      <Image style={Styles.logo} source={require("../images/zeikh.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <ErrorMessage
              error="inveld email or password"
              visable={loginField}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorret={false}
              icon="email"
              name="email"
              keyboardType="email-addres"
              placeholder="email"
              textContentType="emailAddress"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorret={false}
              icon="lock"
              name="password"
              keyboardType="email-addres"
              placeholder="password"
              secureTextEntry={true}
              textContentType="password"
            />
            <SubmitButton title="login" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
