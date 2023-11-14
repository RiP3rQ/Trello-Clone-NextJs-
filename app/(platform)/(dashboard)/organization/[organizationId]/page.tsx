"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

const OrganizationIdPage = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("Title") as string;

    execute({ title });
  };

  return (
    <div>
      <form action={onSubmit}>
        <FormInput id="Title" label="Board title" errors={fieldErrors} />
        <FormSubmit>Create board</FormSubmit>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
