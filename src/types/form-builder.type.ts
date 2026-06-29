import {
  Control,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import { ColSize } from "./common.type";

export interface BaseFieldProps<
  T extends FieldValues
> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  type?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  regex?: {
    pattern: RegExp;
    message: string;
  };
}

export type Option = {
  label: string;
  value: string;
};

export interface BaseFieldWithOptionProps<T extends FieldValues> extends BaseFieldProps<T> {
  options: Option[];
};

export type FormFieldBase= {
    size: ColSize;
    padding?: string;
    margin?: string;
};

export type FormField<T, F> = FormFieldBase & {
    type: T,
    formField: F,
};

export enum FormFieldType {
    CHECKBOX = 'checkbox',
    COMBOX = 'combox',
    DATE_PICKER = 'data-picker',
    RADIO_GROUP = 'radio-group',
    SELECT = 'select',
    SWITCH = 'switch',
    TEXT = 'text',
    NUMBER = 'number',
    TEXTAREA = 'textarea',
}

export type FormFieldMap = {
  [FormFieldType.TEXT]: BaseFieldProps<FieldValues>;
  [FormFieldType.TEXTAREA]: BaseFieldProps<FieldValues>;
  [FormFieldType.DATE_PICKER]: BaseFieldProps<FieldValues>;
  [FormFieldType.SWITCH]: BaseFieldProps<FieldValues>;
  [FormFieldType.CHECKBOX]: BaseFieldProps<FieldValues>;
  [FormFieldType.NUMBER]: BaseFieldProps<FieldValues>;

  [FormFieldType.COMBOX]:
    BaseFieldWithOptionProps<FieldValues>;
  [FormFieldType.RADIO_GROUP]:
    BaseFieldWithOptionProps<FieldValues>;
  [FormFieldType.SELECT]: BaseFieldWithOptionProps<FieldValues>
};

export type FormFieldByType<
  T extends keyof FormFieldMap
> = FormField<T, FormFieldMap[T]>;

export type FormFieldInput =
  FormFieldByType<FormFieldType.TEXT>;

  export type FormFieldInputNumber =
  FormFieldByType<FormFieldType.NUMBER>;

export type FormFieldTextarea =
  FormFieldByType<FormFieldType.TEXTAREA>;

export type FormFieldCheckbox =
    FormFieldByType<FormFieldType.CHECKBOX>;

export type FormFieldCombobox =
  FormFieldByType<FormFieldType.COMBOX>;

export type FormFieldDatePicker =
  FormFieldByType<FormFieldType.DATE_PICKER>;

export type FormFieldRadioGroup =
  FormFieldByType<FormFieldType.RADIO_GROUP>;

export type FormFieldSelect =
  FormFieldByType<FormFieldType.SELECT>;

export type FormFieldSwitch =
  FormFieldByType<FormFieldType.SWITCH>;

export type FormFieldControl = FormFieldInput | FormFieldInputNumber | FormFieldTextarea | FormFieldCheckbox| FormFieldCombobox | FormFieldDatePicker | FormFieldRadioGroup | FormFieldSelect | FormFieldSwitch;

export type FormConfig = {
    fields: Array<FormFieldControl>;
};

export type FormBuilderProps<T extends FieldValues = FieldValues> = {
    form: FormConfig,
    methods: UseFormReturn<T>
};