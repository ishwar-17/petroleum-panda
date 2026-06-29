import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { BaseFieldWithOptionProps } from "@/src/types/form-builder.type";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

export function ComboxField<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder,
}: BaseFieldWithOptionProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <FieldContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox">
                  {field.value
                    ? options.find((x) => x.value === field.value)?.label
                    : placeholder}
                </Button>
              </PopoverTrigger>

              <PopoverContent>
                <Command>
                  <CommandInput />

                  <CommandEmpty>No data found</CommandEmpty>

                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={() => field.onChange(option.value)}
                      >
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <FieldError errors={[fieldState.error]} />
          </FieldContent>
        </Field>
      )}
    />
  );
}
