// RHFSwitch.tsx

import { Controller, FieldValues } from "react-hook-form";

import { Switch } from "@/components/ui/switch";
import { BaseFieldProps } from "@/src/types/form-builder.type";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export function SwitchField<T extends FieldValues>({
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
          <div className="flex items-center justify-between">
            <FieldLabel>{label}</FieldLabel>

            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </div>

          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
