import ClipLoader from "react-spinners/ClipLoader";
import { LoaderProps } from "./@types/Loader";

const Loader: React.FC<LoaderProps> = ({ text, height }) => {
	return (
		<div className="page-loader flex flex:center-all" style={{ height }}>
			<div className="page-loader-label flex-col flex:center-all min-h:_10">
				<ClipLoader />
				<small className="mt:_1">{text || "Loading..."}</small>
			</div>
		</div>
	);
}
 
export default Loader;
