import { FormConfig, FormFieldType } from "@/src/types/form-builder.type";

const terminalFormConfig = {
  fields: [
    {
      type: FormFieldType.TEXT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "name",
        label: "Terminal Name",
        placeholder: "Enter the terminal name...",
        required: true,
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "diesel",
        label: "Diesel",
        placeholder: "Enter the diesel...",
        required: true,
        regex: {
          pattern: /^\d*$/,
          message: "Only numbers are allowed",
        },
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "petrol",
        label: "Petrol",
        placeholder: "Enter the petrol...",
        required: true,
        regex: {
          pattern: /^\d*$/,
          message: "Only numbers are allowed",
        },
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "lat",
        label: "Latitue",
        placeholder: "Enter the latitude...",
        required: true,
        regex: {
          pattern: /^(?:0|[1-9]\d*)(?:\.\d{1,4})?$/,
          message: "Positive number, max 4 decimals",
        },
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "lng",
        label: "Longitude",
        placeholder: "Enter the longitude...",
        required: true,
        regex: {
          pattern: /^(?:0|[1-9]\d*)(?:\.\d{1,4})?$/,
          message: "Positive number, max 4 decimals",
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

export default terminalFormConfig;
