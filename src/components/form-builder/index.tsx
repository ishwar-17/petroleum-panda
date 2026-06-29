import {
  FormBuilderProps,
  FormFieldControl,
  FormFieldType,
} from "@/src/types/form-builder.type";
import { Fragment, ReactElement, useCallback } from "react";
import { FieldValues, FormProvider, Path } from "react-hook-form";
import {
  CheckboxField,
  ComboxField,
  DatePickerField,
  InputField,
  RadioGroupField,
  SelectField,
  SwitchField,
  TextareaField,
} from "../form-components/";
import { Row, Col } from "../grid-layout";

const FormBuilder = <T extends FieldValues = FieldValues>({
  form,
  methods,
}: FormBuilderProps<T>) => {
  const renderForm = useCallback((renderFields: (ReactElement | null)[]) => {
    return (
      <div>
        <Row>{renderFields}</Row>
      </div>
    );
  }, []);

  const renderField = useCallback(
    (field: FormFieldControl | null): ReactElement | null => {
      if (!field) {
        return null;
      }
      const { type, size, padding, margin, formField } = field;
      switch (type) {
        case FormFieldType.TEXT:
        case FormFieldType.NUMBER:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <InputField<T>
                className="w-1/2"
                type={formField.type}
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.TEXTAREA:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <TextareaField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.CHECKBOX:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <CheckboxField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.SELECT:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <SelectField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                options={formField.options}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.COMBOX:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <ComboxField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                options={formField.options}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.DATE_PICKER:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <DatePickerField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.RADIO_GROUP:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <RadioGroupField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                placeholder={formField.placeholder}
                options={formField.options}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        case FormFieldType.SWITCH:
          return (
            <Col size={size} padding={padding} margin={margin}>
              <SwitchField<T>
                control={methods.control}
                name={formField.name as Path<T>}
                label={formField.label}
                disabled={formField.disabled}
                required={formField.required}
              />
            </Col>
          );
        default:
          return null;
      }
    },
    [methods.control]
  );

  const renderFormFields = form.fields.map((field, index) => (
    <Fragment key={index}>{renderField(field)}</Fragment>
  ));
  return (
    <FormProvider {...methods}>{renderForm(renderFormFields)}</FormProvider>
  );
};

export default FormBuilder;
