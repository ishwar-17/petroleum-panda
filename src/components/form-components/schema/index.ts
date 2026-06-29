import { FormConfig, FormFieldType } from "@/src/types/form-builder.type";
import { z } from "zod";

export const createSchema = ({
  fields
}: FormConfig) => {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    switch (field.type) {
      case FormFieldType.TEXT:
      case FormFieldType.TEXTAREA:
      case FormFieldType.SELECT:
      case FormFieldType.COMBOX:
      case FormFieldType.RADIO_GROUP:
        shape[field.formField.name] = field.formField.required
          ? z.string().min(1, `${field.formField.label} is required`)
          : z.string().optional();
        break;
      case FormFieldType.NUMBER:
        shape[field.formField.name] = field.formField.required
            ? z
                .string()
                .trim()
                .min(1, `${field.formField.label} is required`)
                .regex(field.formField.regex?.pattern ?? /^\d*$/, field.formField.regex?.message)
                .transform(Number)
            : z
                .string()
                .regex(field.formField.regex?.pattern ?? /^\d*$/, field.formField.regex?.message)
                .transform((v) => (v === "" ? null : Number(v)))
                .nullable();
        break;
      case FormFieldType.SWITCH:
      case FormFieldType.CHECKBOX:
        shape[field.formField.name] = z.boolean();
        break;

      case FormFieldType.DATE_PICKER:
        shape[field.formField.name] = field.formField.required
          ? z.date({
              error: `${field.formField.label} is required`,
            })
          : z.date().optional();
        break;
    }
  });

  return z.object(shape);
};