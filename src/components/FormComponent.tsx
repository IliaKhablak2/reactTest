import React, { useState, useEffect, useRef } from 'react';
import { TextInputField, Textarea, Label, Combobox } from 'evergreen-ui';
import { useStateValue } from '../context';

function FormComponent() {
    const { state, dispatch } = useStateValue();

    const handleSubm = (event: any) => {
        event.preventDefault()
        console.log(state.post)
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{ width: '62%', float: 'left', padding: '2%' }}>
                <TextInputField
                    label="Title"
                    required
                    value={state.post.title}
                    onChange={(e: any) => dispatch({ type: 'setPost', value: { ...state.post, title: e.target.value } })}
                />
                <Label
                    htmlFor="textarea-2"
                    marginBottom={4}
                    display="block"
                >
                    Body
            </Label>
                <Textarea
                    onChange={(e: any) => dispatch({ type: 'setPost', value: { ...state.post, body: e.target.value } })}
                    value={state.post.body}
                    className="bigText"
                />
            </div>
            <div style={{ width: '30%', float: 'right', padding: '2%' }}>
                <Label
                    htmlFor="textarea-2"
                    marginBottom={4}
                    display="block"
                >
                    Author
            </Label>
                <Combobox
                    openOnFocus
                    width="100%"
                    items={state.users}
                    itemToString={item => item ? item.name : ''}
                    onChange={selected => dispatch({ type: 'setPost', value: { ...state.post, userId: selected.id } })}
                    selectedItem={state.users.filter((e: any) => { return e.id == state.post.userId })[0]}
                />
            </div>
        </div>
    )

}

export default FormComponent;