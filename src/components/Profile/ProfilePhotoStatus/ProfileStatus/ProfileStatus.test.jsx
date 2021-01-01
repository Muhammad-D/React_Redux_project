import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
  test("was status from props assigned to local state", () => {
    const component = create(
      <ProfileStatus status="Testing status prop assingment" />
    );
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Testing status prop assingment");
  });
  test("after component rendering a span tag should be displayed at first", () => {
    const component = create(
      <ProfileStatus status="Testing span appearance in the document" />
    );
    const instance = component.root;
    expect(() => {
      let input = instance.findByType("input");
    }).toThrow();
  });
  test("a span tag contains right text", () => {
    const component = create(<ProfileStatus status="Testing span" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("Testing span");
  });
  test("after double click on the span tag, an input tag should appear", () => {
    const component = create(<ProfileStatus status="Testing span" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");
    expect(input.props.value).toBe("Testing span");
  });
  test("does callback called", () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status="Testing span" updataStatus={mockCallBack} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
