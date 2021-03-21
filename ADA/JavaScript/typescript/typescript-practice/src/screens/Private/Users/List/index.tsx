import React, { FC, useState, useEffect } from "react";
import { Layout, Main } from "../../../../components";
import { TableUsers } from "./components";
import { user } from '../../../../utils';


const User: FC = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     setUsers(user.get());
    // }, []);

    return (
        <Layout>
            <Main showButton={true} link={('/users/add')} className={"bg-light main"} >
                <div className="container">
                    <table className="table striped bordered hover p-5">
                        <thead className="text-center">

                        </thead>
                        {users.map(({ name, lastName, email, password }) => {
                            return (
                                <TableUsers name={name} lastName={lastName} email={email} password={password} />
                            );
                        })}
                    </table>
                </div>
            </Main>
        </Layout>
    );
};

export { User };