// RHFRadioGroup.tsx

import { Controller, FieldValues } from "react-hook-form";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BaseFieldWithOptionProps } from "@/src/types/form-builder.type";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

export function RadioGroupField<T extends FieldValues>({
  control,
  name,
  label,
  options,
}: BaseFieldWithOptionProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <FieldContent>
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              {options.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <RadioGroupItem value={option.value} id={option.value} />

                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </RadioGroup>

            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
