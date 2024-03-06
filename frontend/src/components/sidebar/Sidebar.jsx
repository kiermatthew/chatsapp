import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className={`flex flex-col sm:w-full w-[25rem] border-r border-slate-500 p-4 ${selectedConversation ? 'sm:hidden' : ''}`}>
			<SearchInput />
			<div className='divider px-3 mt-8 text-white'>Available Users</div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;