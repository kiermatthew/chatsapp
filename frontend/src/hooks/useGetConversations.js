import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = (currentUser) => { // Pass currentUser as a dependency
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [currentUser]); 

  return { loading, conversations };
};

export default useGetConversations;
