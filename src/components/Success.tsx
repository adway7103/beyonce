import img from "../assets/Frame.png"
import {useEffect,useState} from "react"
function Success() {
     const [countdown, setCountdown] = useState(5); 
     useEffect(() => {
       const timeoutId = setTimeout(() => {
         if (countdown === 0) {
           window.location.href = "/"; // Redirect when countdown reaches 0
         } else {
           setCountdown(countdown - 1);
         }
       }, 1000); // 1000 milliseconds = 1 second

       return () => clearTimeout(timeoutId);
     }, [countdown]);
  return (
    <div className="flex flex-col h-[70vh] items-center justify-center gap-8">
      <div className="items-center flex flex-col w-[40%] gap-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="text-[#2DA950] font-covered text-[2rem] text-center">
          Success Submitted
        </div>
        <div className="font-semibold font-sans text-[36px] text-center">
          Congratulations
        </div>
        <div className="text-center font-sans text-[#727272] text-[1.3rem]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>
      <div>
        Redirecting to home page in <strong> {countdown} seconds</strong>
      </div>
    </div>
  );
}

export default Success