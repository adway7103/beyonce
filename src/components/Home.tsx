import Footer from "./Footer";
import img from "../assets/img.png";
import TextSlider from "./TextSlider";
import ExpandableBox from "./expamd";
function Home() {
  return (
    <div className="font-sans flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8">
        <div className="w-[50%] flex flex-col items-center p-4">
          <div className="font-covered text-[#2DA950] text-[2.25vw]">
            Success Stories
          </div>
          <div className="font-semibold text-[3.5vw] text-center leading-[7.3vh]">
            Every success journey we’ve encountered.
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className="w-[50vw]">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="items-left flex flex-col pt-[10vh] pb-[80px] gap-10">
            <TextSlider />
            <button className="p-5 px-8 ml-[20px] rounded-full w-fit border-2 bg-black text-white">
                          Explore More →
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#E8EEE7] rounded-[40px] flex justify-between">
        <div className="p-12 w-[30vw]">
          <div className="font-covered text-[#9E9D9D] text-[1.5rem]">
            What's on your mind
          </div>
          <div className="text-[3rem] font-semibold">Ask Questions</div>
        </div>
        <div className="w-[55vw] pt-16 pb-4 pr-6">
          <ExpandableBox
            title="Do you offer freelancers?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <ExpandableBox
            title="What’s the guarantee that I will be satisfied
with the hired talent?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <ExpandableBox
            title="Can I hire multiple talents at once?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <ExpandableBox
            title="Why should I not go to an agency directly?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
          <ExpandableBox
            title="Who can help me pick a right skillset
and duration for me?"
            content="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
