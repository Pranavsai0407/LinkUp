import { RiCloseFill } from "react-icons/ri";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/lib/utils";

const ChatHeader = () => {
  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-12 h-12 relative flex items-center justify-center">
            {1 ? (
              <Avatar className="w-12 h-12 rounded-full overflow-hidden">
                {1 ? (
                  <AvatarImage
                    src={`https://tse4.mm.bing.net/th?id=OIP.mamzviGSCYcq42adHIJgIAHaHa&pid=Api&P=0&h=180`}
                    alt="profile"
                    className="object-cover w-full h-full bg-black rounded-full"
                  />
                ) : (
                  <div
                    className={`uppercase w-12 h-12 text-lg   border-[1px] ${getColor(
                      selectedChatData.color
                    )} flex items-center justify-center rounded-full`}
                  >
                    {LinkUp - Ai}
                  </div>
                )}
              </Avatar>
            ) : (
              <div
                className={` bg-[#ffffff22] py-3 px-5 flex items-center justify-center rounded-full`}
              >
              </div>
            )}
          </div>
          <div>LinkUp AI</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
