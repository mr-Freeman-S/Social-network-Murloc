import React from 'react'
import StatusText from "./StatusText";
import TestRenderer, {act} from "react-test-renderer";


describe('StatusText component', () => {
    const TestRenderer = require('react-test-renderer');
    test('status should be "Hello world"  ', () => {
        const component = TestRenderer.create(<StatusText isOwner={true} status={'Hello world'} updateStatus={() => {
        }}/>)
        const instance = component.root
        expect(instance.props.status).toBe('Hello world')
    })
    test('children in span should be equal status', () => {
        const component = TestRenderer.create(<StatusText isOwner={true} status={'Hello world'} updateStatus={() => {
        }}/>)
        const instance = component.root
        const span = instance.findByType("span")
        expect(span.children[0]).toEqual(instance.props.status)
    })
    test('editable mode should be off and input not displayed', () => {
        const component = TestRenderer.create(<StatusText isOwner={true} status={'Hello world'} updateStatus={() => {
        }}/>)
        const instance = component.root
        const input = instance.findAllByType("input")
        expect(input.length).toBe(0)
    })
    test('editable mode should be on and input displayed', () => {
        const component = TestRenderer.create(<StatusText isOwner={true} status={'Hello world'} updateStatus={() => {
        }}/>)
        const instance = component.root
        const span = instance.findByType('span')
        act(() => {
            span.props.onDoubleClick()
        })
        const input = instance.findAllByType("input")
        expect(input.length).toBe(1)
    })
    test('value in input should be equal status', () => {
        const component = TestRenderer.create(<StatusText isOwner={true} status={'Hello world'} updateStatus={() => {
        }}/>)
        const instance = component.root
        const span = instance.findByType('span')
        act(() => {
            span.props.onDoubleClick()
        })
        const input = instance.findAllByType("input")
        expect(input[0].props.value).toEqual(instance.props.status)
    })
})