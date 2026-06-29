"use client";
import { createSchema } from "@/src/components/form-components";
import { FC, useCallback, useMemo } from "react";
import hubFormConfig from "./config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import AppDrawer from "@/src/components/app-drawer";
import { useCreateHub } from "@/src/data-query/hubs";
import { HubPayload } from "@/src/types/hubs.type";
import { HUB_FORM_INITIAL_FORM_VALUES } from "@/src/constants";
import useDrawerSotore from "@/src/store/drawerStore";
import FormBuilder from "@/src/components/form-builder";

const HubForm: FC = () => {
  const { mutate, isPending } = useCreateHub();
  const { openFormDrawer, onOpenFormDrawer } = useDrawerSotore(
    (state) => state
  );

  const schema = useMemo(() => createSchema(hubFormConfig), []);

  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: HUB_FORM_INITIAL_FORM_VALUES,
    mode: "onChange",
  });

  const handleResetForm = useCallback(() => {
    methods.reset(HUB_FORM_INITIAL_FORM_VALUES);
  }, [methods]);

  const submitHandler = useCallback(
    (data: z.infer<typeof schema>) => {
      mutate(data as HubPayload, {
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
      open={openFormDrawer}
      onOpenChange={onOpenFormDrawer}
      style={{
        width: "30%",
        maxWidth: "none",
        borderRadius: "0px",
      }}
      direction="right"
      title="Create Hub"
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
            form={hubFormConfig}
            methods={methods}
          />
        </form>
      </div>
    </AppDrawer>
  );
};
export default HubForm;
