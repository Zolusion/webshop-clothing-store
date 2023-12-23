'use client';

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Error from '@/components/Error'
import Success from '@/components/Success'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const features = [
    {
        title: "Contact",
        subTitle:
            "Heeft u een vraag of wilt u een afspraak maken? Vul dan het onderstaande formulier in en wij nemen zo snel mogelijk contact met u op.",
    },
];

const form = [
    {
        label: "Naam",
        placeholder: "Naam",
    },
    {
        label: "Achternaam",
        placeholder: "Achternaam",
    },
    {
        label: "E-mail",
        placeholder: "E-mail",
    },
    {
        label: "Telefoonnummer",
        placeholder: "Telefoonnummer",
    },
    {
        label: "Bericht",
        placeholder: "Stel ons een vraag",
    },
    {
        label: "Land",
    },
];

const buttons = [
    {
        button: "Verstuur",
    },
];

export default function ClientComponent() {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phone: '', message: '' });
    const [agreed, setAgreed] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');



    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (formData.firstname == '') {
            setSuccessMsg('');
            setErrorMsg("Voornaam veld is niet ingevuld.");
            return
        }
        if (formData.lastname == '') {
            setSuccessMsg('');
            setErrorMsg("Achternaam veld is niet ingevuld.");
            return
        }
        if (formData.email == '') {
            setSuccessMsg('');
            setErrorMsg("Email veld is niet ingevuld.");
            return
        }
        if (formData.phone == '') {
            setSuccessMsg('');
            setErrorMsg("Telefoonnumer veld is niet ingevuld.");
            return
        }
        if (formData.message == '') {
            setSuccessMsg('');
            setErrorMsg("Bericht veld is niet ingevuld.");
            return
        }
        if (agreed == false) {
            setSuccessMsg('');
            setErrorMsg("U bent nog niet akkoord gegaan met onze voorwaarden.");
            return
        }

        try {
            const res = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setErrorMsg(data.message);
            setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
            setSuccessMsg('Uw bericht is verzonden!')
        } catch (error) {
            console.error(error);
            setErrorMsg("Er is iets fout gegaan, probeer het opnieuw.");
            setSuccessMsg('');
        }
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {features[0].title}
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    {features[0].subTitle}
                </p>

            </div>
            <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <Error message={errorMsg} />
                <Success message={successMsg} />
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="firstname"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Naam
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete="given-name"
                                placeholder="Naam"
                                value={formData.firstname}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastname"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Achternaam
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete="family-name"
                                placeholder="Achternaam"
                                value={formData.lastname}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Telefoonnumer
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                placeholder="Telefoonnummer"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            {form[4].label}
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                                placeholder="Schrijf hier je bericht..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? "bg-green-600" : "bg-gray-200",
                                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? "translate-x-3.5" : "translate-x-0",
                                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            Door dit te selecteren, gaat u akkoord met onze{" "}
                            <a href="#" className="font-semibold text-[#138500]">
                                algemene&nbsp;voorwaarden
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-[#138500] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#138500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Verzenden
                    </button>
                </div>
            </form>
        </div>
    );
}