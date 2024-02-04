"use client";
import { addPost } from "@/app/db/actions";
import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./Loading";
import toast from "react-hot-toast";
import { useRef } from "react";

const AddPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex justify-between grow"
      ref={formRef}
      action={async (formData) => {
        try {
          await addPost(formData);
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "An unexpected error occurred";
          toast.error(errorMessage, { duration: 2000 });
        }
        formRef.current?.reset();
      }}
    >
      <input
        type="text"
        placeholder="Post emoji that describes your day..."
        required
        name="emoji"
        className=" outline-none bg-transparent w-full"
      />
      <SubmitPostButton />
    </form>
  );
};

export default AddPostForm;

function SubmitPostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="disabled:text-slate-600 text-black"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoadingSpinner size={20} /> : "Post"}
    </button>
  );
}
