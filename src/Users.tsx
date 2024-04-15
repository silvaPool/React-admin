import { Theme, useMediaQuery } from "@mui/material";
import { Datagrid, List, SimpleList, TextField, UrlField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => {

    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
   return (
        <List>
            {isSmall ? (
                   <SimpleList
                   primaryText={(record) => record.name}
                   secondaryText={(record) => record.username}
                   tertiaryText={(record) => record.email}
               /> 
            ) : (
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            {/* <TextField source="website" /> */}
            {/* <UrlField source="website" /> */}
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
            )}
    </List>
   );
};