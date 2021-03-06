export default {
    $schema: "http://json-schema.org/schema#",
    title: "Number field",
    description: "A number field component's schema definition.",
    type: "object",
    id: "@microsoft/fast-components-react-base/number-field",
    formPluginId: "@microsoft/fast-components-react-base/number-field",
    properties: {
        min: {
            title: "HTML min attribute",
            type: "number",
        },
        max: {
            title: "HTML max attribute",
            type: "number",
        },
        step: {
            title: "HTML step attribute",
            type: "number",
        },
        name: {
            title: "HTML name attribute",
            type: "string",
        },
        placeholder: {
            title: "HTML placeholder attribute",
            type: "string",
        },
        disabled: {
            title: "HTML disabled attribute",
            type: "boolean",
        },
        readOnly: {
            title: "HTML readOnly attribute",
            type: "boolean",
        },
        required: {
            title: "HTML required attribute",
            type: "boolean",
        },
        value: {
            title: "HTML value attribute",
            type: "number",
        },
    },
};
