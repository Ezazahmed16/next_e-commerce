'use client'
import React, { useState } from 'react'
import LoaderButton from '../master/LoaderButton'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginForm = () => {
    let [submit, setSubmit] = useState(false);

    const router = useRouter();

    async function onAction(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get("email")

        if(email.length === 0){
            toast.error('Email address required')
        }else{
            setSubmit(true)
            await fetch(`/api/user/sent-otp?email=${email}`)
            setSubmit(false)
            sessionStorage.setItem("email", email)
            router.push('/user/otp')
        }
    }

    return (
        <section className='min-h-screen max-w-3xl mx-auto flex justify-center items-center'>
            <form onSubmit={onAction} className='bg-gray-100 p-10 rounded-3xl'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Enter Your Email</span>
                    </div>
                    <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
                </label>
                <button disabled={submit} type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md mt-5 btn-success btn-outline">
                    {submit ? (<LoaderButton />) : ('submit')}
                </button>
            </form>
        </section>
    )
}

export default LoginForm