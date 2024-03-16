import CardLayout from "../../Common/CardLayout";

const ExpertiseCard = ({ data }) => {
  return (
    <CardLayout>
      <div className="h-full space-y-2 p-8 card_stylings">
        <div className=" text-pink-500">{data.title}</div>
        <div className=" text-gray-500">Country: {data.country}</div>
        <div className=" text-gray-500">Date: {data.workingTime}</div>
        <div className="text-sm text-LightGray font-normal">
          1. {data.point1}
        </div>
        <div className="text-sm text-LightGray font-normal">
          2. {data.point2}
        </div>
        <div className="text-sm text-LightGray font-normal">
          3. {data?.point3}
        </div>
        <div className="text-sm text-LightGray font-normal">
          4. {data?.point4}
        </div>
        <div className="text-sm text-LightGray font-normal">
          5. {data?.point5}
        </div>
       
        <div className="text-sm text-LightGray font-normal">
          6. {data?.point6}
        </div>
        {data?.point7 ? 
        <div className="text-sm text-LightGray font-normal">
          7. {data?.point7}
        </div>: <br />}
        
        <div className=" text-pink-700"><span className="text-gray-300">Skill: </span> {data.skill}</div>
      </div>
    </CardLayout>
  );
};

export default ExpertiseCard;
