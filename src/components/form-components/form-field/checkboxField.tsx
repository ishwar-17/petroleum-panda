// RHFCheckbox.tsx

import { Controller, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { BaseFieldProps } from "@/src/types/form-builder.type";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

export function CheckboxField<T extends FieldValues>({
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
          <FieldContent>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={fieldState.invalid}
              />

              <FieldLabel>{label}</FieldLabel>
            </div>

            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
