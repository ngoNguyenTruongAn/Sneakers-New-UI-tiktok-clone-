import { forwardRef } from "react";

const Image = forwardRef(({...props}, ref) => {
    return <img {...props} ref={ref} />;
})

export default Image;