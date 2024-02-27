import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-full h-full rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;