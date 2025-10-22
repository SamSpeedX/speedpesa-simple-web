import React, { useState } from "react";
import Swal from "sweetalert2";

export default function PaymentPage() {
    const [name, setName] = useState("Sam ochu");
    const [phoneNumber, setPhone] = useState("255778760701");
    const [amount, setAmount] = useState("1000");
    const [processing, setProcessing] = useState(false);
    // const validPhone = (p) => /^(?:\255|0)[17]\d{8}$/.test(p);
    const validAmount = (a) => Number(a) > 0;

    // const resetForm = () => {
    //     setName("");
    //     setPhone("");
    //     setAmount("");
    // };

    // const sure = () => {
    //     Swal.fire({
    //       title: "Are you sure?",
    //       text: "You want to send!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, comfime!"
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         Swal.fire({
    //           title: "Success!",
    //           text: "Payment request sent. Please check your phone for the payment prompt.",
    //           icon: "success"
    //         });
    //       }
    //     });
    // }

    const arifu1 = (message, title, icon) => {
        Swal.fire({
          title: title,
          text: message,
          icon: icon
        });
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!name || !phoneNumber || !validAmount(amount)) {
            arifu1("Please check your details and try again.", "warning", "warning")
            return;
        }
        if (phoneNumber.startsWith('+')) {
            arifu1("Please check your details and try again.", "warning", "warning")
        }
        setProcessing(true);
        try {
            arifu1("Payment request sent. Please check your phone for the payment prompt.", "Success", 'success')
            console.log("Payment data:", { name, phoneNumber, amount });

            setProcessing(false);
            // resetForm();
        } catch (err) {
            console.error(err);
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8 bg-linear-to-br from-indigo-600 to-indigo-400 text-white">
                    <h1 className="text-2xl font-semibold">SpeedPesa Mobile Payment</h1>
                    <p className="mt-4 text-sm opacity-90">
                        Fast and secure mobile money payments.
                    </p>

                    <div className="mt-6 bg-blue-700 bg-opacity-10 rounded-md p-4">
                        <div className="text-xs uppercase tracking-wide opacity-90">Total</div>
                        <div className="mt-2 text-2xl font-bold">TZS {amount || "0.00"}</div>
                    </div>
                </div>

                <div className="p-8">
                    <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="255712345678"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Amount (TZS)</label>
                            <input
                                type="number"
                                min="3"
                                step="0.01"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                                placeholder="1000"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                                    processing ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                {processing ? "Processing..." : `Pay TZS ${amount || "0.00"}`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
