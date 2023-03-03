const validDays = new Set([
'2019.1',
'2019.2'
]);

export default function validate( m: string, d: string) : boolean {
  return validDays.has(m + '.' + d);
}


