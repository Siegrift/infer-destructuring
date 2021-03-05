type DestructureFn = <T extends string[]>(
  strings: TemplateStringsArray,
  ...vars: T
) => (target: string) => { [key in T[number]]: string };

export const destructure: DestructureFn = (strings, ...vars) => target => {
  const pattern = new RegExp(
    strings.reduce((acc, _, i) => {
      if (i + 1 == strings.length) return acc + '$';
      else return `${acc}(.*?)${strings[i + 1]}`;
    }, '^' + strings[0])
  );
  const match = target.match(pattern);
  if (!match) throw new Error('Invalid target for given pattern match');
  else {
    return vars.reduce((acc, v, i) => {
      acc[v] = match[i + 1];
      return acc;
    }, {} as Record<string, string>) as any; // to satisfy return type contract
  }
};
