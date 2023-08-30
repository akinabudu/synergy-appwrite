
import Spinner from "../../public/assets/svg/spinner";

export default function Loading() {
  return (
    <div className="h-screen  m-3">
    <div role="status">
       <Spinner size={8} />
        <span className="sr-only">Loading...</span>
    </div>
</div>
  );
}
