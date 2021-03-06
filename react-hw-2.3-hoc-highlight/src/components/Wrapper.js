import New from "./New";
import Popular from "./Popular";

export default function Wrapper(Component) {
    function Sort(props) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            )
        }
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            )
        }
        return <Component {...props} />
    }
    return Sort;
}