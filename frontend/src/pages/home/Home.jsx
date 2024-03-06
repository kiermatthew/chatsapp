import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-full h-full  '>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;