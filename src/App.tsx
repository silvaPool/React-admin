import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./Users";
import { PostList } from "./posts";

export const App = () => 
 <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} />
    {/* <Resource name="users" list={UserList} /> */}
    {/* <Resource name="users" list={UserList} recordRepresentation="name" /> */}
    <Resource name="users" list={UserList} show={ShowGuesser} />
 </Admin>;
