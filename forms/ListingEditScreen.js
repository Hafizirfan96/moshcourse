import React, { useEffect, useState } from "react";
import ListingsApi, { addListing } from "../api/Listing";
import * as Yup from "yup";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppFormPicker from "./AppFormPicker";
import SubmitButton from "./SubmitButton";
import Screen from "../components/Screen";
import Styles from "../components/Styles";
import FormImagePicker from "./FormImagePicker";
import ImageInputList from "../components/ImageInputList";
import UseLocation from "../hooks/UseLocation";
import CategoryPickerItem from "../components/CategoryPickerItem";
// import { Form } from "formik";
// import AppForm from "../forms/AppForm";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required").min(1).label("Title"),
  price: Yup.number()
    .required("Price is required")
    .min(1)
    .max(10000)
    .label("Price "),
  description: Yup.string()
    .required("Description is required")
    .label("Description"),
  category: Yup.object().required("Category is required").label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  { backgroundColor: "#fed330", icon: "camera", label: "Cameras", value: 3 },
  { backgroundColor: "#fed330", icon: "cards", label: "Games", value: 4 },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  { backgroundColor: "#45aaf2", icon: "basketball", label: "Sports", value: 6 },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  { backgroundColor: "#778ca3", icon: "application", label: "Other", value: 9 },
];

export default function ListingEditScreen() {
  const location = UseLocation();

  const handleSubmit = async (listing) => {
    const result = await ListingsApi.addListing({ ...listing, location });
    if (!result.ok) return alert("could not save the listing");
    alert("succes");
  };

  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ImageInputList
          name="images"
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
