type ValueObject = { [key: string]: any };
type Operator = '+' | '-' | '*' | '/';

export function stringTemplateParser(
  expression: object,
  values: ValueObject
): object {
  const templateMatcher =
    /{{\s?([a-zA-Z0-9]*)(\[\d+\])?\s?([/+*-]\s?\d+)?\s?}}/g;

  const description = JSON.stringify(expression).replace(
    templateMatcher,
    (match, key, index, operation) => {
      let value = values[key];

      if (index) {
        value = extractValueWithIndex(value, index);
      }
      if (operation) {
        value = performOperation(value, operation.trim());
      }
      return JSON.stringify(value);
    }
  );

  return JSON.parse(description);
}

function extractValueWithIndex(value: any[], index: string): any {
  const parsedIndex = parseInt(index.replace(/\D/g, ''), 10);
  return value[parsedIndex];
}

function performOperation(value: number, operation: string): number {
  const [operator, operandStr] = [
    operation.charAt(0) as Operator,
    operation.slice(1),
  ];
  const operand = parseFloat(operandStr);

  switch (operator) {
    case '+':
      return value + operand;
    case '-':
      return value - operand;
    case '*':
      return value * operand;
    case '/':
      if (operand !== 0) {
        return value / operand;
      }
      throw new Error('Division by zero');
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}
