'use client'
import { addPost } from '@/app/db/actions';
import { useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { LoadingSpinner } from './Loading';
import InputEmoji from "react-input-emoji";

const AddPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [text, setText] = useState("");
  return (
    <form className='flex justify-between grow' ref={formRef} action={async (formData) => {
      formData.append('emoji', text);
      await addPost(formData);
      setText('');
    }}>
      {/*
      <input type='text' placeholder="Post emoji that describes your day..." required name="emoji" className=" outline-none bg-transparent w-full" />
    */}
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        placeholder="Paste or choose your own emoji..."
        theme='dark'
        borderColor='outline-none'
        maxLength={2}
      />

      <SubmitPostButton />
    </form >
  )
}

export default AddPostForm


function SubmitPostButton() {
  const { pending } = useFormStatus()

  return (
    <button className='disabled:text-slate-600 text-black' type="submit" disabled={pending}>
      {pending ? <LoadingSpinner size={20} /> : "Post"}
    </button>
  )
}
