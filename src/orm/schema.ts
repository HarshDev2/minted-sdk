type GeneralType = 'string' | 'number' | 'boolean' | 'null';

type ObjectTypeWithRequired = {
  type: GeneralType;
  required?: boolean;
  default?: any
};

type ObjectType = {
  [key: string]: GeneralType | ObjectType | ArrayType | ObjectTypeWithRequired;
};

type ArrayType = [] | [ObjectType];

interface schema {
  [key: string]: GeneralType | ObjectType | ArrayType | ObjectTypeWithRequired;
}

export class Schema {
  schema: schema;
  constructor(schema: schema) {
    this.schema = schema;
  }
}

new Schema({
  stringField: 'string',
  objectField: {
    nestedStringField: 'string',
  },
  requiredStringField: {
    type: 'string',
    required: false,
    default: true
  },
});