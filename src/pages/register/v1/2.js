import * as React from "react";

export default function Page() {
    return (
        <main>
            <div className="h-screen flex items-center justify-center">
                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <div>
                            <h3 className="card-title">Register</h3>
                            <p className="text-sm">Let's finish up here</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-center text-sm mb-3 mt-1">Enter the code we sent you</p>
                            <div className="flex items-center justify-center">
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200"
                                    onChange={() => document.getElementById("2").focus()}
                                    maxLength={1}
                                    id="1"
                                />
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200 ml-2.5"
                                    onChange={() => document.getElementById("3").focus()}
                                    maxLength={1}
                                    id="2"
                                />
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200 ml-2.5"
                                    onChange={() => document.getElementById("4").focus()}
                                    maxLength={1}
                                    id="3"
                                />
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200 ml-2.5"
                                    onChange={() => document.getElementById("5").focus()}
                                    maxLength={1}
                                    id="4"
                                />
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200 ml-2.5"
                                    onChange={() => document.getElementById("6").focus()}
                                    maxLength={1}
                                    id="5"
                                />
                                <input
                                    type="text"
                                    className="input input-bordered w-11 bg-base-200 ml-2.5"
                                    onChange={() => document.getElementById("1").focus()}
                                    maxLength={1}
                                    id="6"
                                />
                            </div>
                        </div>
                        <div className="card-actions justify-end mt-10">
                            <button className="btn btn-accent">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
