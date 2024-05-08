import { generateID } from "./common";

export const FormControlNames = {
  STEPCONTAINER: "step-container",
  INPUTTEXTFIELD: "text-field",
  INPUTMULTILINE: "multiline-text-field",
  CHECKBOX: "checkbox",
  BUTTON: "button",
  RADIOGROUP: "radio-group",
  SELECTDROPDOWN: "select-drop-down",
  DATEFIELD: "date-field",
  TIMEFIELD: "time-field",
  FILEUPLOAD: "file-upload",
  IMAGEUPLOAD: "image-upload",
  MULTICHOICES: "multi-choices",
  SCANCODE: "scan-code",
  VERIFIEDID: "verified-id",
};

export const FormTextDataTypes = {
  TEXT: "text",
  BUTTON:"button"
};

export const FormItemTypes = {
  CONTROL: "control",
  CONTAINER: "container",
};

export const FormPublishStatus = {
  DRAFT: "draft",
  PUBLISHED: "published",
};

export const FormContainerList = [
  {
    id: '',
    controlName: FormControlNames.STEPCONTAINER,
    displayText: "Container",
    itemType: FormItemTypes.CONTAINER,
    icon: "fa fa-building",
    heading: "Heading",
  },
];

export const FormControlList = [
  {
    id: '',
    controlName: FormControlNames.INPUTTEXTFIELD,
    displayText: "Text Field",
    placeholder: "Placeholder for Text Field",
    labelName: "Text Field",
    itemType: FormItemTypes.CONTROL,
    dataType: FormTextDataTypes.TEXT,
    icon: "fas fa-text-height",
    required: false,
    category: "text-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.BUTTON,
    displayText: "Button",
    labelName: "Button",
    itemType: FormItemTypes.CONTROL,
    dataType: FormTextDataTypes.BUTTON,
    icon: "fas fa-mobile-alt",
    required: false,
    category: "text-elements",
    containerId: '',
    buttonType:'primary'
  },
  {
    id: '',
    controlName: FormControlNames.INPUTMULTILINE,
    displayText: "Text Area",
    description: "Some Description about the field",
    placeholder: "Please write your notes here.",
    labelName: "Notes",
    rows: 4,
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-file",
    required: false,
    category: "text-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.RADIOGROUP,
    displayText: "Radio",
    labelName: "Label for Radio",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-dot-circle",
    required: false,
    items: [
      {
        id: generateID(),
        value: "Button__-1",
        label: "Button 1",
      },
      {
        id: generateID(),
        value: "Button__-2",
        label: "Button 2",
      },
    ],
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.SELECTDROPDOWN,
    displayText: "Dropdown",
    labelName: "Label for Dropdown",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-caret-square-down",
    required: false,
    items: [
      {
        id: generateID(),
        value: "Option__-1",
        label: "Option 1",
      },
      {
        id: generateID(),
        value: "Option__-2",
        label: "Option 2",
      },
    ],
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.CHECKBOX,
    displayText: "Checkbox",
    labelName: "Label for Checkbox",
    placeholder: "Place Holder Text",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-check-square",
    required: false,
    category: "other-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.DATEFIELD,
    displayText: "Date Picker",
    labelName: "Label for Date",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-calendar",
    required: false,
    category: "date-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.TIMEFIELD,
    displayText: "Time",
    labelName: "Label for Time",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-clock",
    required: false,
    category: "date-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.FILEUPLOAD,
    displayText: "Upload",
    labelName: "Label for File Upload",
    itemType: FormItemTypes.CONTROL,
    icon: "fas fa-cloud-upload-alt",
    required: false,
    category: "media-elements",
    containerId: '',
  },
  {
    id: '',
    controlName: FormControlNames.IMAGEUPLOAD,
    displayText: "Image",
    labelName: "Label for Image Upload",
    itemType: FormItemTypes.CONTROL,
    icon: "far fa-image",
    required: false,
    category: "media-elements",
    containerId: '',
  },
];
