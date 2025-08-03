import { useGetPostByIdQuery } from "./graphql/generated";

function App() {
  const { data } = useGetPostByIdQuery();
  console.log(data);
  return <>Hello WOrld</>;
}

export default App;
