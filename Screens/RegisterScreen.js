import React, { useState, useContext } from "react";
import { StyleSheet, Button } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";
import { Formik } from "formik";
import ErrorMessage from "../forms/ErrorMessage";
import userApi from "../api/Users";

import UseAuth from "../app/auth/UseAuth";
import authApi from "../api/Auth";
import UseApi from "../hooks/UseApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = UseApi(userApi.register);
  const loginApi = UseApi(authApi.login);

  const auth = UseAuth();

  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    console.log("result1111======>", result.data);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log("result===>", result);
      }
      return;
    }
    console.log(result.status);

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };
  return (
    <>
      <Screen style={Styles.container}>
        <ActivityIndicator visible={loginApi.loading || registerApi.loading} />
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <>
              <ErrorMessage error="inveld email or password" />

              <AppFormField
                autoCapitalize="none"
                autoCorret={false}
                icon="account"
                name="name"
                keyboardType="email-addres"
                placeholder="Name"
                textContentType="emailAddress"
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
              <SubmitButton title="Register" />
            </>
          )}
        </Formik>
      </Screen>
    </>
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
export default RegisterScreen;
