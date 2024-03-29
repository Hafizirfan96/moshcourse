import React from "react";
import AppButton from "../components/AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit}></AppButton>;
}
