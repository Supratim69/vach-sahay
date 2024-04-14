// export default async function Register() {
//     const [fname, setFname] = useState("");
//     const [lname, setLname] = useState("");
//     const [age, setAge] = useState("");
//     const [nationality, setNationality] = useState("");
//     const [contactNumber, setContactNumber] = useState("");
//     const [email, setEmail] = useState("");
//     const [gender, setGender] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setError("");
//     };

//     try {
//         const response = await fetch(`${process.env.API_BASE_URL}/register`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 fname,
//                 lname,
//                 age,
//                 nationality,
//                 contactNumber,
//                 email,
//                 gender,
//             }),
//         });

//         if (!response.ok) {
//             throw new Error(await response.text());
//         }

//         setError("");
//     } catch (error) {
//         setError(error.message);
//     }

//     return (
//         <form className="flex flex-col" onSubmit={handleSubmit}>
//             <label htmlFor="fname">First Name:</label>
//             <input
//                 type="text"
//                 id="fname"
//                 value={fname}
//                 onChange={(e) => setFname(e.target.value)}
//             />
//             <label htmlFor="lname">Last Name:</label>
//             <input
//                 type="text"
//                 id="lname"
//                 value={lname}
//                 onChange={(e) => setLname(e.target.value)}
//             />
//             <label htmlFor="age">Age:</label>
//             <input
//                 type="number"
//                 id="age"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//             />
//             <label htmlFor="nationality">Nationality:</label>
//             <input
//                 type="text"
//                 id="nationality"
//                 value={nationality}
//                 onChange={(e) => setNationality(e.target.value)}
//             />
//             <label htmlFor="contactNumber">Contact Number:</label>
//             <input
//                 type="tel"
//                 id="contactNumber"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <label htmlFor="gender">Gender:</label>
//             <select
//                 id="gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//             >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//             </select>
//             <button type="submit">Register</button>
//             {error && <p className="error">{error}</p>}
//         </form>
//     );
// }
