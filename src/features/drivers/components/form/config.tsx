import { FormConfig, FormFieldType } from "@/src/types/form-builder.type";

const driverFormConfig = {
  fields: [
    {
      type: FormFieldType.TEXT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "name",
        label: "Driver Name",
        placeholder: "Enter the driver name...",
        required: true,
      },
    },
    {
      type: FormFieldType.TEXT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "license",
        label: "License",
        placeholder: "Enter the license...",
        required: true,
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "phone",
        label: "Phone Number",
        placeholder: "Enter the phone number...",
        required: true,
        regex: {
          pattern: /^(?:\+91|91)?[6-9]\d{9}$/,
          message: "Invalid phone number",
        },
      },
    },
    {
      type: FormFieldType.TEXTAREA,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "address",
        label: "Address",
        placeholder: "Enter your address...",
        required: true,
      },
    },
  ],
} as FormConfig;

export default driverFormConfig;
