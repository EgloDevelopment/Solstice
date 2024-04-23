import * as React from "react";

export default function Page() {
    return (
        <main>
            <div className="h-screen flex items-center justify-center">
                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div>
                            <h3 className="card-title">Register</h3>
                            <p className="text-sm">Let's begin with some basics</p>
                        </div>
                        <div className="mt-4">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Enter your phone number</span>
                                </div>
                                <input
                                    type="tel"
                                    placeholder="(000) 000-0000"
                                    className="input input-bordered w-full max-w-xs bg-base-200"
                                />
                            </label>
                        </div>
                        <div className="card-actions justify-end mt-10">
                            {/*
                            <a className="underline text-sm mt-3.5 mr-2" href="/register/email/v1/1">Continue with email</a>
                            */}
                            <button className="btn btn-accent">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
