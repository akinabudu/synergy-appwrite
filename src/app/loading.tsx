
import Spinner from "./appComponents/assets/svg/spinner";

export default function Loading() {
  return (
    <div className="    m-3">
    <div role="status">
       <Spinner size={8} />
        <span className="sr-only">Loading...</span>
    </div>
</div>
  );
}
