"use client";
import { addPost } from "@/app/db/actions";
import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "./Loading";
import toast from "react-hot-toast";
import { useRef } from "react";

const AddPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    const result = await addPost(formData);

    if (result?.error) {
      toast.error(result.error);
    }

    formRef.current?.reset();
  }

  return (
    <>
      <form
        className="flex justify-between grow"
        ref={formRef}
        action={clientAction}
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
    </>
  );
};

export default AddPostForm;

function SubmitPostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="disabled:text-slate-600 text-black cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoadingSpinner size={20} /> : "Post"}
    </button>
  );
}
