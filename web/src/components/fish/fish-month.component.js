import { useEffect } from 'react';
import axios from 'axios';

export default function FishMonth() {
  const [fishList, setFishList] = useState({})

  useEffect(() => {
    axios.get('/data/fish.json')
      .then(response => {
        let tempResponse = response;

        // TODO: Implement props.
        // TODO: Implement JSON parsing.

        setFishList(tempResponse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  })

  return (
    <h4 className="text-center">
      Fish month under construction!
    </h4>
  );
}