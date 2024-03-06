import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoIosReturnLeft } from "react-icons/io";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	const handleBackClick = () => {
		setSelectedConversation(null);
	};
	return (
		<div className={`flex flex-col w-full z-30 ${selectedConversation ? "" : "sm:hidden"}`}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='flex bg-slate-500 px-4 py-2 mb-2 items-center'>
						<button className="mr-4 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={handleBackClick}>
							<IoIosReturnLeft />
						</button>
						<div className='w-10 rounded-full mr-4'>
							<img alt='Tailwind CSS chat bubble component' src={selectedConversation.profilePic} />
						</div>
						<span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome {authUser.fullName}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};