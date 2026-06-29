import { FormConfig, FormFieldType } from "@/src/types/form-builder.type";

const hubFormConfig = {
  fields: [
    {
      type: FormFieldType.TEXT,
      size: 6,
      margin: "mb-4",
      formField: {
        name: "code",
        label: "Code",
        placeholder: "Enter the code...",
        required: true,
      },
    },
    {
      type: FormFieldType.TEXT,
      size: 6,
      margin: "mb-4",
      formField: {
        name: "name",
        label: "Hub Name",
        placeholder: "Enter the hub name...",
        required: true,
      },
    },
    {
      type: FormFieldType.SELECT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "status",
        label: "Status",
        placeholder: "Select a status",
        required: true,
        options: [
          { label: "Active", value: "active" },
          { label: "InActive", value: "inactive" },
        ],
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
      type: FormFieldType.TEXT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "contactPerson",
        label: "Contact Person",
        placeholder: "Enter the contact person...",
        required: true,
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "contactNumber",
        label: "Contact Number",
        placeholder: "Enter the contact number...",
        required: true,
        regex: {
          pattern: /^(?:\+91|91)?[6-9]\d{9}$/,
          message: "Invalid contact number",
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

export default hubFormConfig;
