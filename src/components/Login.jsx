
import { useState } from "react";
import * as Yup from "yup";
import "../App.css";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: ""
    })

    const [errors, setErrors] = useState({});

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Inavlid email format").required("Email is required"),
        phoneNumber: Yup.string().matches(/^\+?(91)?[ -]?\d{10}$/, "PhoneNumber must be 10 digits").required("Phone Number is required"),
        password: Yup.string().required("Password is required").min(8, "Minimum 8 characters are required")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one Symbol")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase")
            .matches(/[a-z]/, "Password must contain at least one lowercase"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password must match").required(" Confirm Password is required"),
        age: Yup.number().typeError("Age must be a number").min(18, "You must be at least 18 year old")
            .max(100, "You cannot be older than 100 year").required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        interests: Yup.array().min(1, "select at leat one interest").required("select at leat one interest"),
        birthDate: Yup.date().required("Date of Birth is Required"),

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false })
            console.log("form Submitted", formData);
        } catch (errors) {
            const newErrors = {};

            errors.inner.forEach((err) => {
                if (!newErrors[err.path]) {
                    newErrors[err.path] = err.message;
                }
            });
            setErrors(newErrors);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedInterset = [...formData.interests];
        if (checked) {
            updatedInterset.push(name);
        } else {
            updatedInterset = updatedInterset.filter((interest) => interest !== name);
        }

        setFormData({
            ...formData,
            interests: updatedInterset,
        })
    }
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <form className="flex justify-center m-5 p-3" onSubmit={handleSubmit}>
                <div className="max-w-md w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="Enter First Name"
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="text-red-500 text-xs italic">{errors.firstName}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Enter Last Name"
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="text-red-500 text-xs italic">{errors.lastName}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            name="email"
                            autoComplete="username"
                            value={formData.email}
                            placeholder="Enter Email"
                            onChange={handleChange}
                        />
                        {errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            placeholder="Enter Phone Number"
                            autoComplete="tel"
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <div className="text-red-500 text-xs italic">{errors.phoneNumber}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter Password"
                            autoComplete="new-password"
                            onChange={handleChange}
                        />
                        {errors.password && <div className="text-red-500 text-xs italic">{errors.password}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <div className="text-red-500 text-xs italic">{errors.confirmPassword}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Age:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="age"
                            type="number"
                            name="age"
                            value={formData.age}
                            placeholder="Enter Your Age"
                            onChange={handleChange}
                        />
                        {errors.age && <div className="text-red-500 text-xs italic">{errors.age}</div>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender:
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <div className="text-red-500 text-xs italic">{errors.gender}</div>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Interests:</label>
                        <div className="flex flex-wrap">
                            <label className="mr-4">
                                <input
                                    type="checkbox"
                                    name="coding"
                                    checked={formData.interests.includes("coding")}
                                    onChange={handleCheckboxChange}
                                    className="mr-2 leading-tight"
                                />
                                Coding
                            </label>
                            <label className="mr-4">
                                <input
                                    type="checkbox"
                                    name="sports"
                                    checked={formData.interests.includes("sports")}
                                    onChange={handleCheckboxChange}
                                    className="mr-2 leading-tight"
                                />
                                Sports
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="reading"
                                    checked={formData.interests.includes("reading")}
                                    onChange={handleCheckboxChange}
                                    className="mr-2 leading-tight"
                                />
                                Reading
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
                            Date of Birth:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="birthDate"
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                        {errors.birthDate && <div className="text-red-500 text-xs italic">{errors.birthDate}</div>}
                    </div>

                    <div className="mb-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </form >
        </div>

    )
}

export default SignUpPage;


