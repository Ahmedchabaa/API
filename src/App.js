import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    function listOfUSer() {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => setError(err));
    }
 
    listOfUSer();
  }, []);
  return <div />;
 };

export default App;
