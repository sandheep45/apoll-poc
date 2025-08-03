import { useState } from "react";
import { useGetPostByIdQuery } from "./graphql/generated";

function App() {
  const [value, setValue] = useState(1);
  const { data, loading, previousData, fetchMore } = useGetPostByIdQuery({
    variables: {
      id: value.toString(),
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleFetchMore = async () => {
    await fetchMore({
      variables: {
        id: (value + 1).toString(),
      },
    });
    setValue(value + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.valueAsNumber)}
      />
      {loading && <p>Loading... data for post {value}</p>}
      <div>{data && JSON.stringify(data)}</div>
      <div>{data && JSON.stringify(previousData)}</div>

      <button onClick={handleFetchMore}>Fetch Next</button>
    </div>
  );
}

export default App;
