import React, { useState, useEffect } from 'react';
import { Spinner, Pane, Heading, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import FormComponent from '../../components/FormComponent';
import { useStateValue } from '../../context';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function EditView({ one, saveOne }: { one: any, saveOne: any }) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const { state, dispatch } = useStateValue();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (one) {
        return (
            <div className="containerMy">
                <Pane display="flex" padding={16} marginY={20} background="tint2" borderRadius={5}>
                    <Pane flex={1} alignItems="center" display="flex">
                        <Heading size={600}>You are editing "{one.title}" post</Heading>
                    </Pane>
                    <Pane>
                        <Link to="/">
                            <Button marginRight={16} iconBefore="arrow-left">Back</Button>
                        </Link>
                        <Button marginRight={16} appearance="primary" iconBefore="small-tick" onClick={() => saveOne(true)}>Save and exit</Button>
                        <Button appearance="primary" iconBefore="floppy-disk" onClick={() => saveOne(false)}>Save</Button>
                    </Pane>
                </Pane>
                <Pane display="flex" padding={16} marginY={20} background="tint2" borderRadius={5} height={windowDimensions.height - 177}>
                    <Pane flex={1} display="flex">
                        <FormComponent />
                    </Pane>
                </Pane>
            </div>
        )
    } else {
        return (
            <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
                <Spinner />
            </Pane>
        )
    }

}

export default EditView;