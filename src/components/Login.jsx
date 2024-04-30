
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
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <div className="formField" >
                    <label >First Name :</label>
                    <input type="text" name="firstName" value={formData.firstName} placeholder="Enter firstName" onChange={handleChange} />
                    {errors.firstName && <div className="error">{errors.firstName}</div>}
                </div>
                <div className="formField">
                    <label>Last Name :</label>
                    <input type="text" name="lastName" value={formData.lastName} placeholder="Enter lastName" onChange={handleChange} />
                    {errors.lastName && <div className="error">{errors.lastName}</div>}
                </div>
                <div className="formField">
                    <label>Email :</label>
                    <input type="text" name="email" value={formData.email} placeholder="Enter EmailName" onChange={handleChange} />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="formField">
                    <label>Phone Number :</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} placeholder="Enter phoneNumber"  autoComplete="tel" onChange={handleChange} />
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                </div>
                <div className="formField">
                    <label>Password :</label>
                    <input type="password" name="password" value={formData.password} placeholder="Enter password" autoComplete="new-password"  onChange={handleChange} />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                <div className="formField">
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Enter password" autoComplete="new-password" onChange={handleChange} />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                </div>
                <div className="formField">
                    <label>Age :</label>
                    <input type="number" name="age" value={formData.age} placeholder="Enter your age" onChange={handleChange} />
                    {errors.age && <div className="error">{errors.age}</div>}
                </div>
                <div className="formField"> <label>Gender :</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>
                    {errors.gender && <div className="error">{errors.gender}</div>}
                </div>
                <div className="formField"> <label>Interests :</label>
                    <label>
                        <input type="checkbox" name="coding" checked={formData.interests.includes("coding")} onChange={handleCheckboxChange}/>
                        Coding
                    </label>
                    <label>
                        <input type="checkbox" name="sports" checked={formData.interests.includes("sports")} onChange={handleCheckboxChange} />
                        Sports
                    </label>
                    <label>
                        <input type="checkbox" name="reading" checked={formData.interests.includes("reading")} onChange={handleCheckboxChange} />
                        Reading
                    </label>
                </div>
                <div className="formField"> <label>Date of Birth :</label>
                    <input type="date" name="birthDate" value={formData.birthDate} placeholder="Enter your DOB" onChange={handleChange} />
                </div>
                {errors.birthDate && <div className="error">{errors.birthDate}</div>}
               <div className="formField">
                <button   className="submitButton" type="Submit">Submit</button>
              </div>
            </div>
        </form>

    )
}

export default SignUpPage;