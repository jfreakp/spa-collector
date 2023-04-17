import { ReactNode } from "react";
// form
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
};

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form
        onSubmit={onSubmit}
        onKeyDown={(e) => {
          if (e.code === "Enter") e.preventDefault();
        }}
      >
        {children}
      </form>
    </Form>
  );
}
