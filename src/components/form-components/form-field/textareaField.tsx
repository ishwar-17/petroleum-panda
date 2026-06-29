// RHFTextarea.tsx

import { Controller, FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { BaseFieldProps } from "@/src/types/form-builder.type";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

export function TextareaField<T extends FieldValues>({
  control,
  name,
  label,
}: BaseFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <FieldContent>
            <Textarea {...field} aria-invalid={fieldState.invalid} />

            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
