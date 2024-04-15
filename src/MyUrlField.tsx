import { Link } from "@mui/material";
import { useRecordContext } from "react-admin"
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({source}: {source: string}) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{textDecoration: "none"}}>
            {record[source]}
            <LaunchIcon sx={{fontSize: 15, ml: 1}} />
        </Link>
    ) : null;
    // if(!record) return null;
    // return <a href={`{http://${record[source]}`}>{record[source]}</a>;
};

export default MyUrlField;