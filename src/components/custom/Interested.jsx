import { useState } from "react";

export default function Interested() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("http://localhost:8000/register-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                throw new Error("Failed to register email");
            }

            setEmail("");
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong");
        }
    }

    return (
        <div className="w-full max-[460px]:px-10 px-16 md:px-20 py-8 bg-[#171A23]">
            <div className="relative w-full max-w-6xl mx-auto rounded-2xl bg-[#171A23] p-[1px] bg-gradient-to-l from-[#369FFF] to-[#17C58F] overflow-auto">
                <form
                    onSubmit={handleSubmit}
                    className="w-full rounded-2xl bg-[#171A23] px-8 min-[500px]:px-12 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369FFF] to-[#17C58F]">
                            Intrested for IT-Meet 2025?
                        </h2>
                        <p className="text-white text-lg max-[410px]:text-lg text-base md:text-lg leading-relaxed">
                            Enter your email to get exclusive news and announcements regarding
                            the events of IT Meet.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 w-full min-[420px]:min-w-[300px] md:min-w-[380px] lg:min-w-[420px]">
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />

                        {status === "error" && (
                            <p className="text-destructive text-sm">{errorMsg}</p>
                        )}
                        {status === "success" && (
                            <p className="text-primary text-sm">Registered successfully!</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full text-xl small:text-lg bg-[#17C58F] text-primary-foreground hover:bg-[#369FFF] hover:text-[#369FFF]-foreground disabled:opacity-70 disabled:cursor-not-allowed font-bold px-8 py-3 rounded-lg transition-colors shadow-lg"
                        >
                            {status === "loading" ? "Submitting..." : "Confirm"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
