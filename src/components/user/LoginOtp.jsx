'use client'
import React, { useState } from 'react';
import LoaderButton from '../master/LoaderButton';
import toast from 'react-hot-toast';

const LoginOtp = () => {
    const [submit, setSubmit] = useState(false);

    async function onAction(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const otp = formData.get("otp");

        if (otp.length === 0) {
            toast.error('OTP Code Required');
        } else {
            setSubmit(true);
            try {
                const response = await fetch(`/api/user/verify-otp`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: sessionStorage.getItem('email'), otp: otp })
                });

                if (response.ok) {
                    toast.success('OTP Verified Successfully');
                    sessionStorage.clear();
                    window.location.href = '/';
                } else {
                    const result = await response.json();
                    toast.error(result.message || 'Failed to verify OTP');
                }
            } catch (error) {
                toast.error('An error occurred. Please try again.');
            } finally {
                setSubmit(false);
            }
        }
    }

    return (
        <div>
            <section className='min-h-screen max-w-3xl mx-auto flex justify-center items-center'>
                <form onSubmit={onAction} className='bg-gray-100 p-10 rounded-3xl'>
                    <p className='text-lg text-center'>OTP</p>
                    <p className='text-sm text-center mb-3'>A verification code has been sent to your email address.</p>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Enter Your OTP</span>
                        </div>
                        <input type="text" name='otp' placeholder="******" className="input input-bordered w-full max-w-xs" required />
                    </label>
                    <button disabled={submit} type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md mt-5 btn-success btn-outline">
                        {submit ? (<LoaderButton />) : ('Verify')}
                    </button>
                </form>
            </section>
        </div>
    );
}

export default LoginOtp;
