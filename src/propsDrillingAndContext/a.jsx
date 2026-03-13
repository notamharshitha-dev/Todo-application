import React from "react";
import B from "./b";
function A(){
    var name="Harshitha Notam"
    return <div>
        <h1>This is component A</h1>
        <B n={name} />
    </div>
}
export default A