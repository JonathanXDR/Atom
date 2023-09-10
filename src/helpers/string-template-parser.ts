export function stringTemplateParser(
  expression: object,
  object: { [key: string]: any }
) {
  const templateMatcher =
    /{{\s?([a-zA-Z0-9]*)(\[\d+\])?\s?([/+\-*]\s?\d+)?\s?}}/g;
  const description = JSON.stringify(expression).replace(
    templateMatcher,
    (...args: [string, string | undefined, undefined]) => {
      const [key, index, operation] = args;
      let value = object[key];
      if (index) {
        value = value[index.replace(/\[|\]/g, '')];
      }
      if (operation) {
        value = eval(`${value} ${operation}`);
      }
      return value;
    }
  );
  return JSON.parse(description);
}
