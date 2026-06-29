import { FormConfig, FormFieldType } from "@/src/types/form-builder.type";

const vehiclesFormConfig = {
  fields: [
    {
      type: FormFieldType.TEXT,
      size: 12,
      margin: "mb-4",
      formField: {
        name: "registration",
        label: "Registration",
        placeholder: "Enter the registration...",
        required: true,
      },
    },
    {
      type: FormFieldType.NUMBER,
      size: 12,
      margin: "mb-4",
      formField: {
        type: FormFieldType.NUMBER,
        name: "capacity",
        label: "Capacity",
        placeholder: "Enter the capacity...",
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
  ],
} as FormConfig;

export default vehiclesFormConfig;
