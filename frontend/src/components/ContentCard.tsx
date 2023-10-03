import { FunctionComponent } from "react";

const ContentCard: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div className="flex box-border m-2 p-5 bg-white drop-shadow-lg h-fit w-full rounded-md">
      {title}
    </div>
  );
};
export default ContentCard;
