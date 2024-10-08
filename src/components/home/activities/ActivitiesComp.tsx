import activitiesbg from "../../../assets/images/activitiesbg.jpg";
import { ActivitesData } from "./ActvitiesData";
import { motion } from "framer-motion";

function ActivitiesComp() {
    return(
        <div 
  className=" flex flex-col justify-start w-full p-8 md:p-12 lg:p-20 gap-12" 
  style={{
    backgroundImage: `url(${activitiesbg})`, 
    backgroundPosition: "center", 
    backgroundSize: "cover"
  }}
>

            <div className="flex flex-col md:w-1/6 justify-center md:justify-start items-center md:items-start ">
                <p className="text-[#DB4242] text-lg font-semibold ">Activities</p>
                <p className=" text-3xl font-semibold text-white">Description</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 text-white w-full gap-8 lg:gap-0 h-full">
                {ActivitesData.map((item, idx) => {
                    return(

                        // <div></div>
                        <motion.div key={idx} whileHover={{scale: 1.05, transition: {
                            duration: 0.25 
                        }}} className={`flex flex-col items-center md:items-start justify-around gap-4 rounded-xl  lg:w-5/6 h-full p-4 lg:px-6  ${item.color === "#ffffff" ? "text-[#44233B]": ""}  `} style={{backgroundColor: item.color }}
                        >

                                <img src={item.img} alt="image" className="w-12" />
                            
                            <div className="text-center md:text-left">
                                <p>{item.title}</p>
                                <p>{item.content}</p>
                            </div>

                            <a href="#">Learn More &#8594;
                            </a>

                        </motion.div>

                    )
                })}
            </div>

        </div>
    )
}

export default ActivitiesComp;

