import { createSchema } from "@/src/components/form-components";
import { FC, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormBuilder from "@/src/components/form-builder";
import { DRIVER_FORM_INITIAL_FORM_VALUES } from "@/src/constants";
import useDrawerSotore from "@/src/store/drawerStore";
import driverFormConfig from "./config";
import AppDrawer from "@/src/components/app-drawer";
import vehiclesFormConfig from "./config";
import { Vehicle } from "@/src/types";
import { useCreateVehicle } from "@/src/data-query/vehciles";

const VehicleForm: FC = () => {
  const { mutate, isPending } = useCreateVehicle();
  const { openFormDrawer: openDriverFormDrawer, onOpenFormDrawer } =
    useDrawerSotore((state) => state);

  const schema = useMemo(() => createSchema(vehiclesFormConfig), []);

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: DRIVER_FORM_INITIAL_FORM_VALUES,
    mode: "onChange",
  });

  const handleResetForm = useCallback(() => {
    methods.reset(DRIVER_FORM_INITIAL_FORM_VALUES);
  }, [methods]);

  const submitHandler = useCallback(
    (data: z.infer<typeof schema>) => {
      mutate(data as Omit<Vehicle, "id">, {
        onSuccess: () => {
          onOpenFormDrawer(false);
          handleResetForm();
        },
      });
    },
    [mutate, onOpenFormDrawer, handleResetForm]
  );

  const handleOnValidForm = useCallback(() => {
    methods.handleSubmit(submitHandler)();
  }, [methods, submitHandler]);

  return (
    <AppDrawer
      open={openDriverFormDrawer}
      onOpenChange={onOpenFormDrawer}
      style={{
        width: "30%",
        maxWidth: "none",
        borderRadius: "0px",
      }}
      direction="right"
      title="Create Vehicle"
      actions={{
        title: isPending ? "Submitting..." : "Submit",
        resetForm: handleResetForm,
        onClick: handleOnValidForm,
        disabled: isPending,
      }}
    >
      <div className="flex flex-col w-full p-4 no-scrollbar overflow-y-auto">
        <form>
          <FormBuilder<z.infer<typeof schema>>
            form={driverFormConfig}
            methods={methods}
          />
        </form>
      </div>
    </AppDrawer>
  );
};
export default VehicleForm;
