import Ajv from 'ajv';
const ajv = new Ajv();

const validate = (schema, data) => ajv.validate(schema, data) ? true : ajv.errors;

export default validate;