import {useState} from "react"
function Project() {
      const [formData, setFormData] = useState({ name: "", email: "" }); // State for managing form data
    const [emailError, setEmailError] = useState(false); // State for email validation error
    const [submit, changeSubmit] = useState(false);
    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
         const isFormValid = formData.name !== "" && formData.email !== "";
         changeSubmit(isFormValid); 
    }
    const validateEmail = (email:String) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const handleSubmit = (event:any) => {
        event.preventDefault();
      const isValidEmail = validateEmail(formData.email);
      if (!isValidEmail) {
        setEmailError(true);
        return;
      }
      window.location.href = "/success";
      
    };
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="items-center flex flex-col w-[30%]">
        <div className="text-[#2DA950] font-covered text-[2rem] text-center">
          Registration Form
        </div>
        <div className="font-semibold font-sans text-[36px] text-center">
          Start your success Journey here!
        </div>
      </div>
      <div className="w-[27vw]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="mb-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-full py-4 px-4 bg-[#EFEFEF]"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border border-gray-300 p-2 rounded-full py-4 px-4 bg-[#EFEFEF] ${
                emailError ? "border-red-500" : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`text-white font-bold py-4 px-4 rounded-full ${
              !submit ? "bg-[#C9C9C9]" : "bg-[#1C1C1C]"
            }`}
            disabled={!submit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Project