import React, { useState, useEffect } from 'react';
import { Table, Button, Pane, Dialog } from 'evergreen-ui';
import { Link } from 'react-router-dom';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function HomeView({ users, posts, deletePost }: { users: any, posts: any, deletePost: any }) {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [isShown, setisShown] = useState(null);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <main className="contanerMy">
            <div className="table-container">
                <Table>
                    <Table.Head>
                        {/* <Table.SearchHeaderCell /> */}
                        <Table.TextHeaderCell>
                            Name
    </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Title
    </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Actions
    </Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={windowDimensions.height - 85}>
                        {posts.map((el: any, index: number) => (
                            <Table.Row key={index} className="paddingLeft">
                                <Table.TextCell className="left">{users.filter((e: any) => { return e.id == el.userId })[0] ? users.filter((e: any) => { return e.id == el.userId })[0].name : 'none'}</Table.TextCell>
                                <Table.TextCell>{el.title}</Table.TextCell>
                                <Table.Cell className="right">
                                    <Link to={"/edit/" + el.id}>
                                        <Button height={35} marginRight={16} appearance="primary" iconBefore="edit">
                                            Edit
                            </Button>
                                    </Link>
                                    <Button height={35} marginRight={16} appearance="primary" intent="danger" iconBefore="trash" onClick={() => setisShown(el.id)}>
                                        Delete
                            </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <Pane>
                <Dialog
                    isShown={isShown != null}
                    title="Stop it, take a minute to think!"
                    onCloseComplete={() => setisShown(null)}
                    // isConfirmLoading={state.isLoading}
                    onConfirm={() => {
                        deletePost(isShown);
                        setisShown(null);
                    }}
                    confirmLabel="delete"
                >
                    Are you sure you want to delete this awesome post!?
                </Dialog>
            </Pane>
        </main>
    )
}

export default HomeView;