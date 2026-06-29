// RHFInput.tsx

import { Controller, FieldValues } from "react-hook-form";

import { Input } from "@/components/ui/input";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { BaseFieldProps, FormFieldType } from "@/src/types/form-builder.type";

export function InputField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type,
  required,
  disabled,
}: BaseFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required,
      }}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={"w-1/2"}>
          {label && <FieldLabel>{label}</FieldLabel>}
          <FieldContent>
            <Input
              {...field}
              type="text"
              inputMode={type === FormFieldType.NUMBER ? "numeric" : "text"}
              value={field.value ?? ""}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={fieldState.invalid}
            />

            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
