"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";

const OrganizationIdPage = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      console.log(fieldErrors);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <div>
      <form action={onSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter board name!"
          className="border-black border p-1"
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
