import React, { FunctionComponent, useEffect } from "react";
import ControlDragComponent from "./subcomponents/ControlDragComponent";
import {
  FormContainerList,
  FormControlList,
} from "../../utils/formBuilderUtils";
import {
  FormLayoutComponentChildrenType,
  FormLayoutComponentContainerType,
  FormLayoutComponentsType,
} from "../../types/FormTemplateTypes";

interface LeftSidebarProps {
  handleItemAdded: (
    item: FormLayoutComponentChildrenType | FormLayoutComponentContainerType,
    containerId?: string
  ) => void;
  formLayoutComponents: FormLayoutComponentsType[]
}

const LeftSidebar: FunctionComponent<LeftSidebarProps> = (props) => {

  return (
    <>
      <div className="container">
        <h5>Container</h5>
        {FormContainerList.map((container, ind) => {
          return (
            <ControlDragComponent
              key={container.controlName}
              item={container}
              handleItemAdded={props.handleItemAdded}
              formLayoutComponents={props.formLayoutComponents}
            />
          );
        })}
        <div className="m-t-30"></div>
        <h5>Elements</h5>
        <div className="">
          {FormControlList.filter(
            (control) => control.category === "text-elements"
          ).map((control, ind) => {
            return (
              <div className="col-12" key={control.controlName}>
                <ControlDragComponent
                  key={control.controlName}
                  item={control}
                  handleItemAdded={props.handleItemAdded}
                  formLayoutComponents={props.formLayoutComponents}
                />
              </div>
            );
          })}
        </div>

        <div className="">
          {FormControlList.filter(
            (control) => control.category === "date-elements"
          ).map((control, ind) => {
            return (
              <div className="col-12" key={control.controlName}>
                <ControlDragComponent
                  key={control.controlName}
                  item={control}
                  handleItemAdded={props.handleItemAdded}
                  formLayoutComponents={props.formLayoutComponents}
                />
              </div>
            );
          })}
        </div>
        <div className="">
          {FormControlList.filter(
            (control) => control.category === "other-elements"
          ).map((control, ind) => {
            return (
              <div className="col-12" key={control.controlName}>
                <ControlDragComponent
                  key={control.controlName}
                  item={control}
                  handleItemAdded={props.handleItemAdded}
                  formLayoutComponents={props.formLayoutComponents}
                />
              </div>
            );
          })}
        </div>
        <div className="">
          {FormControlList.filter(
            (control) => control.category === "media-elements"
          ).map((control, ind) => {
            return (
              <div className="col-12" key={control.controlName}>
                <ControlDragComponent
                  key={control.controlName}
                  item={control}
                  handleItemAdded={props.handleItemAdded}
                  formLayoutComponents={props.formLayoutComponents}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
