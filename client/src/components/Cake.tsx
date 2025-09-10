import { useRoute } from "wouter";

export default function Cake() {
  const [match, params] = useRoute("/detail/:id");
  return (
    <div>
      <h1>Photo Detail for ID: {params ? params.id : "Unknown"}</h1>
      {/* You can show the photo or more info here */}
    </div>
  );
}