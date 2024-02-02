'use client'
import { addPost } from '@/app/db/actions';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

const AddPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form className='flex justify-between grow' ref={formRef} action={async (formData) => {
      await addPost(formData);
      formRef.current?.reset()
    }}>
      <input type='text' placeholder="Post emoji that describes your day..." required name="emoji" className=" outline-none bg-transparent w-full" />
      <SubmitPostButton />
    </form >
  )
}

export default AddPostForm


function SubmitPostButton() {
  const { pending } = useFormStatus()

  return (
    <button className='disabled:bg-slate-600 text-black' type="submit" disabled={pending}>Post</button>
  )
}
