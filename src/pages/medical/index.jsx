import { Outlet, useMatch } from "react-router-dom";
import Nav from "@/components/navbar";
import { Search } from "@react-vant/icons";
import './index.scss';

const medical = () => {
    const symptomMatch = useMatch("/medical/symptom/:symptomId");
    const hospitalDetailMatch = useMatch("/medical/hospitalDetail/:hospitalId");

    let title = "医疗";
    let rightBtn = <button><Search /></button>;
    return (
        <div className="medical">
            {!symptomMatch && !hospitalDetailMatch? (
                <Nav title={title} showLeftArrow="true" rightText={rightBtn} clickLeft />
            ) : ''}
            <Outlet />
        </div>
    );
};

export default medical;